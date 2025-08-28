import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface GoogleAnalyticsProps {
  measurementId: string;
}

// Deklarace gtag funkce
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    // Kontrola platnosti Measurement ID
    if (!measurementId || measurementId === 'G-XXXXXXXXXX' || measurementId.length < 10) {
      console.error('❌ Neplatné Google Analytics Measurement ID:', measurementId);
      return;
    }

    // Funkce pro kontrolu, jestli je gtag načtený
    const checkGtag = () => {
      if (typeof window.gtag === 'undefined') {
        console.warn('⚠️ Google Analytics gtag není načtený, čekám...');
        setTimeout(checkGtag, 1000); // Zkusím znovu za 1 sekundu
        return false;
      }
      return true;
    };

    // Počkáme na načtení gtag
    const initGA = () => {
      if (checkGtag()) {
        try {
          // Odeslání první pageview
          window.gtag('config', measurementId, {
            page_title: document.title,
            page_location: window.location.href,
            page_path: location.pathname
          });
          
          console.log('✅ Google Analytics initialized with ID:', measurementId);
          console.log('📍 Current page:', location.pathname);
          
          // Test event
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: location.pathname
          });
          
        } catch (error) {
          console.error('❌ Google Analytics initialization error:', error);
        }
      }
    };

    // Spustíme inicializaci po načtení stránky
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initGA);
    } else {
      initGA();
    }

  }, [measurementId]);

  useEffect(() => {
    // Sledování změn stránek
    if (measurementId && measurementId !== 'G-XXXXXXXXXX' && measurementId.length >= 10 && window.gtag) {
      try {
        const fullPath = location.pathname + location.search;
        
        // Odeslání pageview
        window.gtag('config', measurementId, {
          page_title: document.title,
          page_location: window.location.origin + fullPath,
          page_path: fullPath
        });
        
        console.log('📊 Pageview sent:', fullPath);
        
        // Test event
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.origin + fullPath,
          page_path: fullPath
        });
        
      } catch (error) {
        console.error('❌ Google Analytics pageview error:', error);
      }
    }
  }, [location, measurementId]);

  return null; // Tato komponenta nic nerenderuje
};

export default GoogleAnalytics;
