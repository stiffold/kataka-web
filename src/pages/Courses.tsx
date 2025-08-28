import React from 'react';

const Courses: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Předporodní kurzy
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Informace o veškerých plánovaných kurzech
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Pravidelně pořádám předporodní kurzy pro nastávající rodiče. Kurzy jsou zaměřené na praktické dovednosti 
                a poskytují komplexní informace o porodu, kojení a péči o novorozence.
              </p>
              <p>
                Všechny kurzy jsou vedeny v přátelské atmosféře a jsou přizpůsobeny potřebám účastníků.
              </p>
            </div>
          </div>

          {/* Aktuální kurzy */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aktuální kurzy</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Předporodní příprava - Kompletní kurz</h4>
                <p className="text-gray-600 mb-2">
                  <strong>Délka:</strong> 2x120 minut
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Cena:</strong> 4000 Kč
                </p>
                <p className="text-gray-600 mb-4">
                  Komplexní příprava na porod včetně praktických cvičení, relaxačních technik a informací o kojení.
                </p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Co se naučíte:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Relaxační techniky a masáže</li>
                    <li>• Nácvik úlevových poloh</li>
                    <li>• Informace o průběhu porodu</li>
                    <li>• Příprava na kojení</li>
                    <li>• Praktické ukázky</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-secondary-600 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Předporodní setkání</h4>
                <p className="text-gray-600 mb-2">
                  <strong>Délka:</strong> 120 minut
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Cena:</strong> 2000 Kč
                </p>
                <p className="text-gray-600 mb-4">
                  Pro ženy, které nechtějí kompletní předporodní přípravu nebo již prošly předporodním kurzem.
                </p>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Obsah setkání:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Seznámení a vzájemné poznání</li>
                    <li>• Zjištění vašich potřeb a přání</li>
                    <li>• Odborné rady a doporučení</li>
                    <li>• Možnost dotazů</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Registrace na kurzy */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Registrace na kurzy
            </h3>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                Máte zájem o některý z našich kurzů? Kontaktujte mě pro více informací a rezervaci místa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Kontaktovat
                </a>
                <a
                  href="tel:736722952"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                >
                  Zavolat
                </a>
              </div>
            </div>
          </div>

          {/* Informace o kurzech */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Důležité informace
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Kurzy probíhají v malých skupinách pro osobnější přístup
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Vítáni jsou i partneři
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Všechny materiály jsou v ceně kurzu
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Možnost individuálních konzultací po kurzu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
