import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Prenatální příprava",
      description: "Naučím vás vše potřebné, probereme všechny vaše obavy a připravíme se na porod společně.",
      icon: "🤰",
      features: ["Dechové techniky", "Relaxační cvičení", "Informace o porodu", "Příprava partnera"]
    },
    {
      title: "Podpora při porodu",
      description: "Budu s vámi u porodu a poskytnu fyzickou i emocionální podporu během celého procesu.",
      icon: "👶",
      features: ["Fyzická podpora", "Emocionální podpora", "Komunikace s personálem", "Pomoc s pozicemi"]
    },
    {
      title: "Laktační poradenství",
      description: "Pomohu vám s kojením, které vnímám jako přirozenou součást péče o dítě a budování vztahu.",
      icon: "🍼",
      features: ["Správné přiložení", "Řešení problémů", "Techniky kojení", "Podpora při přechodu"]
    },
    {
      title: "Poporodní péče",
      description: "Navštívím vás po porodu a pomohu s péčí o miminko a adaptací na novou roli rodiče.",
      icon: "💕",
      features: ["Péče o matku", "Péče o miminko", "Emocionální podpora", "Praktické rady"]
    },
    {
      title: "Podpůrná skupinka",
      description: "Setkávání s dalšími maminkami a sdílení zkušeností v bezpečném prostředí.",
      icon: "👥",
      features: ["Sdílení zkušeností", "Odborné rady", "Podpora komunity", "Přátelské prostředí"]
    },
    {
      title: "Kurzy",
      description: "Specializované kurzy pro těhotné a rodiče s praktickými informacemi a dovednostmi.",
      icon: "📚",
      features: ["Prenatální kurzy", "Kurzy kojení", "Praktické dovednosti", "Odborné informace"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Moje služby
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nabízím komplexní podporu během celého období od těhotenství až po poporodní péči. 
            Každá rodina je jedinečná a přizpůsobuji své služby vašim potřebám.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ceník služeb
            </h3>
            <p className="text-gray-600">
              Transparentní ceny bez skrytých poplatků
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Konzultace</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">800 Kč</div>
              <p className="text-gray-600 text-sm">60 minutová konzultace</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center border-2 border-primary-600">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Porodní balíček</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">5 000 Kč</div>
              <p className="text-gray-600 text-sm">Prenatální příprava + podpora při porodu</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Laktační poradenství</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">1 200 Kč</div>
              <p className="text-gray-600 text-sm">Komplexní poradenství + následná péče</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Podpůrná skupinka</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">200 Kč</div>
              <p className="text-gray-600 text-sm">Jedno setkání</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
