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
      // Inicializace Google Analytics 4
      ReactGA.initialize(measurementId, {
        gaOptions: {
          siteSpeedSampleRate: 100
        }
      });

      console.log('✅ Google Analytics 4 initialized with ID:', measurementId);
      
      // Odeslání první pageview
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
      console.log('📊 Initial pageview sent:', location.pathname);
      
    } catch (error) {
      console.error('❌ Google Analytics initialization error:', error);
    }
  }, [measurementId]);

  useEffect(() => {
    // Sledování změn stránek při navigaci
    if (measurementId && measurementId !== 'G-XXXXXXXXXX' && measurementId.length >= 10) {
      try {
        const fullPath = location.pathname + location.search;
        
        // Odeslání pageview pro každou změnu stránky
        ReactGA.send({ 
          hitType: 'pageview', 
          page: fullPath 
        });
        
        console.log('📊 Pageview sent:', fullPath);
        
        // Odeslání custom event pro lepší tracking
        ReactGA.event({
          category: 'Navigation',
          action: 'Page View',
          label: fullPath,
          value: 1
        });
        
        console.log('🎯 Custom event sent for:', fullPath);
        
      } catch (error) {
        console.error('❌ Google Analytics pageview error:', error);
      }
    }
  }, [location, measurementId]);

  return null; // Tato komponenta nic nerenderuje
};

export default GoogleAnalytics;
