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
          <div className="group mb-16">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-12">
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">🌸</div>
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
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📅</div>
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
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📍</div>
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
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💕</div>
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
