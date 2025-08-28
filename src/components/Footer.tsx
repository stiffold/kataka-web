import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Kateřina Stará
            </h3>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Porodní dula a laktační poradkyně. Pomáhám rodinám prožít 
              krásný porod a úspěšně nastartovat kojení.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/dula.katka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 p-3 bg-gray-800 rounded-2xl hover:bg-primary-600 hover:scale-110 transform"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/dula.katka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 p-3 bg-gray-800 rounded-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:scale-110 transform"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Navigace</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  Úvod
                </Link>
              </li>
              <li>
                <Link to="/o-mne" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  O mně
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  Služby
                </Link>
              </li>
              <li>
                <Link to="/cenik" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  Ceník
                </Link>
              </li>
              <li>
                <Link to="/podpurna-skupinka" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  Podpůrná skupinka
                </Link>
              </li>
              <li>
                <Link to="/kurzy" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  Kurzy
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Email:</span>
                <a href="mailto:stara.katerina@gmail.com" className="hover:text-white transition-colors duration-200">
                  stara.katerina@gmail.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Telefon:</span>
                <a href="tel:736722952" className="hover:text-white transition-colors duration-200">
                  736 722 952
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Působnost:</span>
                <span>Středočeský, Jihočeský kraj, Praha</span>
              </li>
              <li className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Číslo účtu:</span>
                <span className="font-mono bg-gray-800 px-2 py-1 rounded text-sm">131-39520257/0100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Kateřina Stará. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Ochrana osobních údajů
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Obchodní podmínky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
