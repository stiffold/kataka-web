import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                {/* Icon */}
                <div className="w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/8-100x100.png" 
                    alt="Logo" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                
                {/* Text */}
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-secondary-700 transition-all duration-300 leading-tight pb-1">
                    Kateřina Stará
                  </h1>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 font-medium leading-tight pb-0.5">
                    Porodní dula & Laktační poradkyně
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Úvod
            </Link>
            <Link 
              to="/o-mne" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/o-mne') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              O mně
            </Link>
            <Link 
              to="/sluzby" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/sluzby') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Služby
            </Link>
            <Link 
              to="/cenik" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/cenik') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Ceník
            </Link>
            <Link 
              to="/podpurna-skupinka" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/podpurna-skupinka') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Podpůrná skupinka
            </Link>
            <Link 
              to="/kurzy" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/kurzy') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Kurzy
            </Link>
            <Link 
              to="/kontakt" 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive('/kontakt') 
                  ? 'text-primary-600 bg-primary-50 shadow-soft' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link 
                to="/" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Úvod
              </Link>
              <Link 
                to="/o-mne" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/o-mne') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                O mně
              </Link>
              <Link 
                to="/sluzby" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/sluzby') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Služby
              </Link>
              <Link 
                to="/cenik" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/cenik') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ceník
              </Link>
              <Link 
                to="/podpurna-skupinka" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/podpurna-skupinka') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Podpůrná skupinka
              </Link>
              <Link 
                to="/kurzy" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/kurzy') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kurzy
              </Link>
              <Link 
                to="/kontakt" 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive('/kontakt') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
