import React from 'react';

const Courses: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary-100 via-white to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-elegant font-light text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
              Předporodní kurzy
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zde najdete kurzy, které pro vás připravujeme.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Plakát kurzů */}
          <div className="group mb-20">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Aktuální kurzy</h3>
              
              <div className="flex justify-center">
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-soft-lg group-hover:shadow-soft-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <img 
                      src="/images/3.png" 
                      alt="Plakát předporodního kurzu"
                      className="w-full max-w-2xl h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registrace na kurzy */}
          <div className="group mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                Registrace na kurzy
              </h3>
              <div className="text-center space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Máte zájem o některý z našich kurzů? Přihlaste se přímo přes stránky našeho kurzu.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.vlnylasky.cz/prihlaska/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-2xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
                  >
                    Přihlásit se na kurz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Informace o kurzech */}
          <div className="group">
            <div className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Důležité informace
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Kurzy probíhají v malých skupinách pro osobnější přístup
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Vítáni jsou i partneři
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Všechny materiály jsou v ceně kurzu
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Možnost individuálních konzultací po kurzu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
