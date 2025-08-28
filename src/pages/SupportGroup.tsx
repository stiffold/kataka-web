import React from 'react';

const SupportGroup: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Podpůrná skupinka
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sdílejte své zkušenosti a získejte podporu od ostatních maminek
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Photo section */}
          <div className="mb-20">
            <div className="flex justify-center">
              <div className="group relative">
                <div className="relative">
                  {/* Main photo with soft shadow and rounded corners */}
                  <div className="relative overflow-hidden rounded-3xl shadow-soft-lg group-hover:shadow-soft-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <img 
                      src="/images/2.png" 
                      alt="Podpůrná skupinka kojení - sdílení zkušeností a podpora"
                      className="w-full max-w-2xl h-auto object-cover"
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary-300 rounded-full opacity-40 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group mb-16">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Srdečně vás zveme na podpůrnou skupinku kojení
                </h2>
              </div>
              
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                <p>
                  Můžete se zde sdílet s ostatními ženami o starostech, ale i radostech na Vaší cestě mateřstvím.
                </p>
                <p>
                  Dozvíte se také zajímavé informace o kojení, uspávání dětí, příkrmech a mnoho dalšího.
                </p>
                <p>
                  Skupinku vedu já a Michaela Švecová. Obě jsme duly a certifikované laktační poradkyně organizací MAMILA o.z.
                </p>
                <p className="text-center text-2xl font-semibold text-primary-600">
                  Děti jsou samozřejmě vítané! :)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Kdy */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kdy</h3>
                <p className="text-gray-600 mb-4">
                  Každé sudé úterý
                </p>
                <p className="text-2xl font-semibold text-primary-600">
                  9:00 - 11:30
                </p>
              </div>
            </div>

            {/* Kde */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kde</h3>
                <p className="text-gray-600 mb-2">
                  Komunitní centrum,
                </p>
                <p className="text-gray-600 mb-2">
                  Komenského náměstí 44,
                </p>
                <p className="text-2xl font-semibold text-primary-600">
                  Sedlčany
                </p>
              </div>
            </div>

            {/* Co vás čeká */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Co vás čeká</h3>
                <p className="text-gray-600">
                  Sdílení zkušeností, odborné rady, podpora komunity a přátelské prostředí
                </p>
              </div>
            </div>
          </div>

          {/* Cíl skupinky */}
          <div className="group mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                Náš cíl
              </h3>
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                Ženy ujistit a podpořit v kojení. Vytvořit bezpečné prostředí, kde se můžete svěřit se svými obavami 
                a získat podporu od ostatních maminek i odborníků.
              </p>
            </div>
          </div>

          {/* Kontakt pro více informací */}
          <div className="group">
            <div className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Více informací
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Máte zájem o podpůrnou skupinku nebo chcete více informací?
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-2xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportGroup;
