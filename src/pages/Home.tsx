import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Úvodní sekce */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Na úvod
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-soft">
                <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                  <p className="text-xl text-gray-700 font-medium">
                    Porod dítěte vnímám jako ten největší zázrak, který můžeme v životě zažít. Věřte, že větší dar už dostat nemůžete :)
                  </p>
                  <p>
                    Často ale mají ženy po porodu pocit, že byly málo podpořené, málo informované. Možná mají i výčitky, že něco mohly udělat jinak.
                  </p>
                  <p>
                    Nabízím Vám proto pomocnou ruku, kdy Vás (případně i partnera) ještě v těhotenství naučím vše potřebné, probereme všechny vaše obavy. Budu s Vámi u porodu a navštívím Vás i po něm.
                  </p>
                  <p>
                    Po porodu se zaměříme také na kojení, protože ho vnímám jako přirozenou součást péče o dítě, dochází při něm také k budování vztahu dítěte s matkou. Ženy by v kojení měly být aktivně podporovány a zaslouží si dostat takovou pomoc a podporu, jakou potřebují.
                  </p>
                  <p className="text-xl text-primary-600 font-medium">
                    Vím, že je toto období velmi křehké, proto udělám vše pro to, abych Vás co nejvíce podpořila.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kde působím sekce */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Kde působím
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poskytuji služby v širokém okolí s možností dojíždění
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Laktační poradenství</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Při laktačním poradenství působím v těchto městech a jejich okolí:
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Benešov, Bystřice, Příbram, Neveklov, Votice, Týnec nad Sázavou, Milevsko, Sedlec-Prčice, Petrovice, Dobříš, Kamýk nad Vltavou, Nový Knín, Mníšek pod Brdy, Štěchovice.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Doprovod k porodu</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  K porodu vás mohu doprovodit do porodnic v těchto krajích:
                </p>
                <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-6">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Středočeský, Jihočeský, Praha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
