import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    // Inicializace Google Analytics
    ReactGA.initialize(measurementId);
  }, [measurementId]);

  useEffect(() => {
    // Sledování změn stránek
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null; // Tato komponenta nic nerenderuje
};

export default GoogleAnalytics;
