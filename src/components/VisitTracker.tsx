import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface VisitData {
  path: string;
}

const VisitTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const trackFirstVisit = async () => {
      // Kontrola, zda už uživatel navštívil web (s expirací po 5 minutách)
      const visitedData = localStorage.getItem('katka_web_visited');
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000; // 5 minut v milisekundách
      
      let hasVisited = false;
      let shouldTrack = true;
      
      if (visitedData) {
        try {
          const { timestamp } = JSON.parse(visitedData);
          // Kontrola, zda uplynulo více než 5 minut
          if (now - timestamp < fiveMinutes) {
            hasVisited = true;
            shouldTrack = false;
          } else {
            // Expirovalo, můžeme trackovat znovu
            localStorage.removeItem('katka_web_visited');
          }
        } catch (error) {
          // Neplatný formát, odstraníme a trackujeme znovu
          localStorage.removeItem('katka_web_visited');
        }
      }
      
      if (shouldTrack) {
        // Detekce, zda se jedná o člověka nebo robota
        if (isHumanUser()) {
          try {
            // Data pro odeslání - Lambda will get location from CloudFront headers
            const visitData: VisitData = {
              path: location.pathname
            };

            // Odeslání na Lambda endpoint
            const response = await fetch('https://kjpumcusyt2gdtwo5kb3px6q6i0syqkc.lambda-url.eu-central-1.on.aws/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(visitData)
            });

            if (response.ok) {
              console.log('✅ Visit data sent successfully:', visitData);
              // Označení, že uživatel navštívil web s timestampem
              localStorage.setItem('katka_web_visited', JSON.stringify({
                timestamp: now
              }));
            } else {
              console.log('❌ Failed to send visit data:', response.status);
            }
          } catch (error) {
            console.log('❌ Error tracking visit:', error);
          }
        } else {
          console.log('🤖 Bot detected, skipping visit tracking');
        }
      }
    };

    trackFirstVisit();
  }, [location.pathname]);

  // Funkce pro detekci, zda se jedná o člověka nebo robota
  const isHumanUser = (): boolean => {
    // 1. Kontrola User-Agent
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'bot', 'crawler', 'spider', 'scraper', 'scraper', 'scraper',
      'googlebot', 'bingbot', 'yandexbot', 'baiduspider',
      'facebookexternalhit', 'twitterbot', 'linkedinbot',
      'whatsapp', 'telegram', 'slackbot',
      'headless', 'phantomjs', 'selenium', 'webdriver',
      'curl', 'wget', 'python', 'java', 'perl', 'ruby',
      'apache-httpclient', 'okhttp', 'go-http-client'
    ];
    
    for (const pattern of botPatterns) {
      if (userAgent.includes(pattern)) {
        return false; // Bot detected
      }
    }

    // 2. Kontrola, zda má prohlížeč JavaScript
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false; // Bot detected
    }

    // 3. Kontrola, zda má prohlížeč základní API
    if (!navigator || !navigator.userAgent || !navigator.language) {
      return false; // Bot detected
    }

    // 4. Kontrola, zda má prohlížeč cookies/localStorage
    try {
      const testKey = '__bot_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
    } catch (error) {
      return false; // Bot detected (no localStorage access)
    }

    // 5. Kontrola, zda má prohlížeč canvas API
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return false; // Bot detected (no canvas support)
      }
    } catch (error) {
      return false; // Bot detected
    }

    // 6. Kontrola, zda má prohlížeč WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        return false; // Bot detected (no WebGL support)
      }
    } catch (error) {
      return false; // Bot detected
    }

    // 7. Kontrola, zda má prohlížeč navigator.plugins
    if (!navigator.plugins || navigator.plugins.length === 0) {
      return false; // Bot detected (no plugins)
    }

    // 8. Kontrola, zda má prohlížeč navigator.mimeTypes
    if (!navigator.mimeTypes || navigator.mimeTypes.length === 0) {
      return false; // Bot detected (no MIME types)
    }

    // 9. Kontrola, zda má prohlížeč screen resolution
    if (!screen || !screen.width || !screen.height) {
      return false; // Bot detected (no screen info)
    }

    // 10. Kontrola, zda má prohlížeč window size
    if (!window.innerWidth || !window.innerHeight) {
      return false; // Bot detected (no window size)
    }

    // Všechny testy prošly - pravděpodobně člověk
    return true;
  };

  return null; // Tato komponenta nic nerenderuje
};

export default VisitTracker;
