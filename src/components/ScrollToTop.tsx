import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll na začátek stránky při změně cesty
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
