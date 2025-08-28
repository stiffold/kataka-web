import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    // Kontrola platnosti Measurement ID
    if (!measurementId || measurementId === 'G-XXXXXXXXXX' || measurementId.length < 10) {
      console.error('❌ Neplatné Google Analytics Measurement ID:', measurementId);
      return;
    }

    try {
      // Inicializace Google Analytics
      ReactGA.initialize(measurementId, {
        gaOptions: {
          siteSpeedSampleRate: 100
        }
      });

      // Odeslání první pageview
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
      
      console.log('✅ Google Analytics initialized with ID:', measurementId);
      console.log('📍 Current page:', location.pathname);
      
      // Test event
      ReactGA.event({
        category: 'App',
        action: 'Initialized',
        label: 'Google Analytics Setup'
      });
      
    } catch (error) {
      console.error('❌ Google Analytics initialization error:', error);
    }
  }, [measurementId]);

  useEffect(() => {
    // Sledování změn stránek
    if (measurementId && measurementId !== 'G-XXXXXXXXXX' && measurementId.length >= 10) {
      try {
        const fullPath = location.pathname + location.search;
        ReactGA.send({ 
          hitType: 'pageview', 
          page: fullPath 
        });
        console.log('📊 Pageview sent:', fullPath);
        
        // Test event pro každou stránku
        ReactGA.event({
          category: 'Navigation',
          action: 'Page View',
          label: fullPath
        });
        
      } catch (error) {
        console.error('❌ Google Analytics pageview error:', error);
      }
    }
  }, [location, measurementId]);

  return null; // Tato komponenta nic nerenderuje
};

export default GoogleAnalytics;
