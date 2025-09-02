import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface VisitData {
  location: string;
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
        try {
          // Získání lokace uživatele
          const userLocation = await getUserLocation();
          
          // Data pro odeslání
          const visitData: VisitData = {
            location: userLocation,
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
            console.error('❌ Failed to send visit data:', response.status);
          }
        } catch (error) {
          console.error('❌ Error tracking visit:', error);
        }
      }
    };

    trackFirstVisit();
  }, [location.pathname]);

  // Funkce pro získání lokace uživatele s více fallbacky
  const getUserLocation = async (): Promise<string> => {
    try {
      // Metoda 1: ipapi.com (CORS-friendly)
      const ipResponse = await fetch('https://ipapi.com/json/');
      const ipData = await ipResponse.json();
      
      if (ipData.country_name && ipData.city) {
        return `${ipData.country_name}: ${ipData.city}`;
      } else if (ipData.country_name) {
        return ipData.country_name;
      }
    } catch (error) {
      console.log('⚠️ ipapi.com failed, trying alternative...');
    }

    try {
      // Metoda 2: ip-api.com (CORS-friendly)
      const ipApiResponse = await fetch('http://ip-api.com/json/?fields=country,city');
      const ipApiData = await ipApiResponse.json();
      
      if (ipApiData.country && ipApiData.city) {
        return `${ipApiData.country}: ${ipApiData.city}`;
      } else if (ipApiData.country) {
        return ipApiData.country;
      }
    } catch (error) {
      console.log('⚠️ ip-api.com failed, trying alternative...');
    }

    try {
      // Metoda 3: ipinfo.io (CORS-friendly)
      const ipInfoResponse = await fetch('https://ipinfo.io/json');
      const ipInfoData = await ipInfoResponse.json();
      
      if (ipInfoData.country && ipInfoData.city) {
        return `${ipInfoData.country}: ${ipInfoData.city}`;
      } else if (ipInfoData.country) {
        return ipInfoData.country;
      }
    } catch (error) {
      console.log('⚠️ ipinfo.io failed, trying alternative...');
    }

    try {
      // Metoda 4: ipgeolocation.io (CORS-friendly)
      const ipGeoResponse = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=free');
      const ipGeoData = await ipGeoResponse.json();
      
      if (ipGeoData.country_name && ipGeoData.city) {
        return `${ipGeoData.country_name}: ${ipGeoData.city}`;
      } else if (ipGeoData.country_name) {
        return ipGeoData.country_name;
      }
    } catch (error) {
      console.log('⚠️ ipgeolocation.io failed, using fallback...');
    }

    // Fallback: Použijeme časové pásmo a jazyk prohrávače
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const language = navigator.language || 'unknown';
      
      if (timezone && timezone !== 'unknown') {
        return `Timezone: ${timezone}`;
      } else if (language && language !== 'unknown') {
        return `Language: ${language}`;
      }
    } catch (error) {
      console.log('⚠️ Timezone/language fallback failed...');
    }

    // Poslední fallback
    return 'Unknown';
  };

  return null; // Tato komponenta nic nerenderuje
};

export default VisitTracker;
