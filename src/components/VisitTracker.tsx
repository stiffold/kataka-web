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

  // Funkce pro získání lokace uživatele
  const getUserLocation = async (): Promise<string> => {
    try {
      // Pokus o získání lokace z IP adresy
      const ipResponse = await fetch('https://ipapi.co/json/');
      const ipData = await ipResponse.json();
      
      if (ipData.country && ipData.city) {
        return `${ipData.country}: ${ipData.city}`;
      } else if (ipData.country) {
        return ipData.country;
      } else {
        return 'Unknown';
      }
    } catch (error) {
      console.log('⚠️ Could not get location from IP, using fallback');
      return 'Unknown';
    }
  };

  return null; // Tato komponenta nic nerenderuje
};

export default VisitTracker;
