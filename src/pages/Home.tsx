import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Úvodní sekce */}
      <section className="py-24 relative overflow-hidden">
        {/* Jemné glitrové třpytky a mramorování */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Mramorový vzor */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-rose-100/30 via-pink-50/20 to-rose-200/30" 
                 style={{
                   backgroundImage: `
                     radial-gradient(circle at 20% 30%, rgba(251, 207, 232, 0.3) 0%, transparent 50%),
                     radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.2) 0%, transparent 50%),
                     radial-gradient(circle at 40% 80%, rgba(251, 207, 232, 0.25) 0%, transparent 50%),
                     radial-gradient(circle at 90% 20%, rgba(244, 114, 182, 0.15) 0%, transparent 50%),
                     radial-gradient(circle at 10% 90%, rgba(251, 207, 232, 0.2) 0%, transparent 50%)
                   `
                 }}>
            </div>
          </div>
          
          {/* Jemné glitrové třpytky */}
          <div className="absolute top-10 left-10 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-30 animate-pulse delay-[0.5s]"></div>
          <div className="absolute top-30 left-30 w-0.5 h-0.5 bg-rose-400 rounded-full opacity-35 animate-pulse delay-[1s]"></div>
          <div className="absolute top-40 left-40 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40 animate-pulse delay-[1.5s]"></div>
          <div className="absolute top-50 left-50 w-0.5 h-0.5 bg-rose-200 rounded-full opacity-30 animate-pulse delay-[2s]"></div>
          <div className="absolute top-60 left-60 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-35 animate-pulse delay-[0.3s]"></div>
          <div className="absolute top-70 left-70 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse delay-[0.8s]"></div>
          <div className="absolute top-80 left-80 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-30 animate-pulse delay-[1.3s]"></div>
          <div className="absolute top-90 left-90 w-0.5 h-0.5 bg-rose-400 rounded-full opacity-35 animate-pulse delay-[1.8s]"></div>
          <div className="absolute top-100 left-100 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40 animate-pulse delay-[2.3s]"></div>
          
          <div className="absolute top-15 right-15 w-0.5 h-0.5 bg-rose-200 rounded-full opacity-35 animate-pulse delay-[0.3s]"></div>
          <div className="absolute top-25 right-25 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-30 animate-pulse delay-[0.8s]"></div>
          <div className="absolute top-35 right-35 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse delay-[1.3s]"></div>
          <div className="absolute top-45 right-45 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-35 animate-pulse delay-[1.8s]"></div>
          <div className="absolute top-55 right-55 w-0.5 h-0.5 bg-rose-400 rounded-full opacity-30 animate-pulse delay-[2.3s]"></div>
          <div className="absolute top-65 right-65 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40 animate-pulse delay-[0.1s]"></div>
          <div className="absolute top-75 right-75 w-0.5 h-0.5 bg-rose-200 rounded-full opacity-35 animate-pulse delay-[0.6s]"></div>
          <div className="absolute top-85 right-85 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-30 animate-pulse delay-[1.1s]"></div>
          <div className="absolute top-95 right-95 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse delay-[1.6s]"></div>
          <div className="absolute top-105 right-105 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-35 animate-pulse delay-[2.1s]"></div>
          
          {/* Další jemné třpytky pro mramorový efekt */}
          <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-rose-300/40 rounded-full opacity-25 animate-pulse delay-[0.2s]"></div>
          <div className="absolute top-1/3 left-1/3 w-0.5 h-0.5 bg-pink-200/40 rounded-full opacity-30 animate-pulse delay-[0.7s]"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-rose-400/40 rounded-full opacity-25 animate-pulse delay-[1.2s]"></div>
          <div className="absolute top-2/3 left-2/3 w-0.5 h-0.5 bg-pink-300/40 rounded-full opacity-30 animate-pulse delay-[1.7s]"></div>
          <div className="absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-rose-200/40 rounded-full opacity-25 animate-pulse delay-[2.2s]"></div>
          
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-pink-400/40 rounded-full opacity-30 animate-pulse delay-[0.4s]"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-rose-300/40 rounded-full opacity-25 animate-pulse delay-[0.9s]"></div>
          <div className="absolute top-1/2 right-1/2 w-0.5 h-0.5 bg-pink-200/40 rounded-full opacity-30 animate-pulse delay-[1.4s]"></div>
          <div className="absolute top-2/3 right-2/3 w-0.5 h-0.5 bg-rose-400/40 rounded-full opacity-25 animate-pulse delay-[1.9s]"></div>
          <div className="absolute top-3/4 right-3/4 w-0.5 h-0.5 bg-pink-300/40 rounded-full opacity-30 animate-pulse delay-[2.4s]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant font-light text-gray-800 mb-8">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
                Na úvod
              </span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-rose-50/90 via-white to-pink-50/90 rounded-3xl p-12 shadow-soft backdrop-blur-sm">
                <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-body">
                  <div className="bg-gradient-to-r from-rose-50/80 via-pink-50/80 to-rose-50/80 rounded-2xl p-8 border-l-4 border-rose-200 shadow-sm">
                    <blockquote className="text-2xl text-gray-800 font-elegant font-semibold italic leading-relaxed">
                      "Láska nezná strach; dokonalá láska strach zahání." 1. list Janův 4,18
                    </blockquote>
                    <p className="text-xl text-gray-700 font-body font-medium mt-6">
                      Věřím, že tento biblický verš je pravdivý. Ráda vás beze strachu a s láskou provedu vaší cestou mateřstvím.
                    </p>
                  </div>
                  <p className="text-xl font-elegant font-medium italic text-center py-4 text-gray-700">
                    Porod dítěte vnímám jako ten největší zázrak, který můžeme v životě zažít. Věřte, že větší dar už dostat nemůžete :)
                  </p>
                  <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                    <p className="font-body">
                      Často ale mají ženy po porodu pocit, že byly málo podpořené, málo informované. Možná mají i výčitky, že něco mohly udělat jinak.
                    </p>
                    <p className="font-body">
                      Nabízím Vám proto pomocnou ruku, kdy Vás (případně i partnera) ještě v těhotenství naučím vše potřebné, probereme všechny vaše obavy. Budu s Vámi u porodu a navštívím Vás i po něm.
                    </p>
                    <p className="font-body">
                      Po porodu se zaměříme také na kojení, protože ho vnímám jako přirozenou součást péče o dítě, dochází při něm také k budování vztahu dítěte s matkou. Ženy by v kojení měly být aktivně podporovány a zaslouží si dostat takovou pomoc a podporu, jakou potřebují.
                    </p>
                  </div>
                  <p className="text-xl text-gray-800 font-elegant font-medium text-center py-4">
                    Vím, že je toto období velmi křehké, proto udělám vše pro to, abych Vás co nejvíce podpořila.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kde působím sekce */}
      <section className="py-24 relative overflow-hidden">
        {/* Jemné glitrové třpytky a mramorování */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Mramorový vzor */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-rose-100/30 via-pink-50/20 to-rose-200/30" 
                 style={{
                   backgroundImage: `
                     radial-gradient(circle at 20% 30%, rgba(251, 207, 232, 0.3) 0%, transparent 50%),
                     radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.2) 0%, transparent 50%),
                     radial-gradient(circle at 40% 80%, rgba(251, 207, 232, 0.25) 0%, transparent 50%),
                     radial-gradient(circle at 90% 20%, rgba(244, 114, 182, 0.15) 0%, transparent 50%),
                     radial-gradient(circle at 10% 90%, rgba(251, 207, 232, 0.2) 0%, transparent 50%)
                   `
                 }}>
            </div>
          </div>
          
          {/* Jemné glitrové třpytky */}
          <div className="absolute top-10 left-10 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-30 animate-pulse delay-[0.5s]"></div>
          <div className="absolute top-30 left-30 w-0.5 h-0.5 bg-rose-400 rounded-full opacity-35 animate-pulse delay-[1s]"></div>
          <div className="absolute top-40 left-40 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40 animate-pulse delay-[1.5s]"></div>
          <div className="absolute top-50 left-50 w-0.5 h-0.5 bg-rose-200 rounded-full opacity-30 animate-pulse delay-[2s]"></div>
          <div className="absolute top-60 left-60 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-35 animate-pulse delay-[0.3s]"></div>
          <div className="absolute top-70 left-70 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse delay-[0.8s]"></div>
          <div className="absolute top-80 left-80 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-30 animate-pulse delay-[1.3s]"></div>
          <div className="absolute top-90 left-90 w-0.5 h-0.5 bg-rose-400 rounded-full opacity-35 animate-pulse delay-[1.8s]"></div>
          <div className="absolute top-100 left-100 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40 animate-pulse delay-[2.3s]"></div>
          
          <div className="absolute top-15 right-15 w-0.5 h-0.5 bg-rose-200 rounded-full opacity-35 animate-pulse delay-[0.3s]"></div>
          <div className="absolute top-25 right-25 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-30 animate-pulse delay-[0.8s]"></div>
          <div className="absolute top-35 right-35 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse delay-[1.3s]"></div>
          <div className="absolute top-45 right-45 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-35 animate-pulse delay-[1.8s]"></div>
          <div className="absolute top-55 right-55 w-0.5 h-0.5 bg-rose-400 rounded-full opacity-30 animate-pulse delay-[2.3s]"></div>
          <div className="absolute top-65 right-65 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40 animate-pulse delay-[0.1s]"></div>
          <div className="absolute top-75 right-75 w-0.5 h-0.5 bg-rose-200 rounded-full opacity-35 animate-pulse delay-[0.6s]"></div>
          <div className="absolute top-85 right-85 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-30 animate-pulse delay-[1.1s]"></div>
          <div className="absolute top-95 right-95 w-0.5 h-0.5 bg-rose-300 rounded-full opacity-40 animate-pulse delay-[1.6s]"></div>
          <div className="absolute top-105 right-105 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-35 animate-pulse delay-[2.1s]"></div>
          
          {/* Další jemné třpytky pro mramorový efekt */}
          <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-rose-300/40 rounded-full opacity-25 animate-pulse delay-[0.2s]"></div>
          <div className="absolute top-1/3 left-1/3 w-0.5 h-0.5 bg-pink-200/40 rounded-full opacity-30 animate-pulse delay-[0.7s]"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-rose-400/40 rounded-full opacity-25 animate-pulse delay-[1.2s]"></div>
          <div className="absolute top-2/3 left-2/3 w-0.5 h-0.5 bg-pink-300/40 rounded-full opacity-30 animate-pulse delay-[1.7s]"></div>
          <div className="absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-rose-200/40 rounded-full opacity-25 animate-pulse delay-[2.2s]"></div>
          
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-pink-400/40 rounded-full opacity-30 animate-pulse delay-[0.4s]"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-rose-300/40 rounded-full opacity-25 animate-pulse delay-[0.9s]"></div>
          <div className="absolute top-1/2 right-1/2 w-0.5 h-0.5 bg-pink-200/40 rounded-full opacity-30 animate-pulse delay-[1.4s]"></div>
          <div className="absolute top-2/3 right-2/3 w-0.5 h-0.5 bg-rose-400/40 rounded-full opacity-25 animate-pulse delay-[1.9s]"></div>
          <div className="absolute top-3/4 right-3/4 w-0.5 h-0.5 bg-pink-300/40 rounded-full opacity-30 animate-pulse delay-[2.4s]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant font-light text-gray-800 mb-8">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
                Kde působím
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body font-medium">
              Poskytuji služby v širokém okolí
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-br from-pink-50/90 to-rose-50/90 rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-pink-100/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-300 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤱</span>
                  </div>
                  <h3 className="text-2xl font-elegant font-light text-gray-800">
                    <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
                      Laktační poradenství
                    </span>
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 text-xl font-body font-medium">
                  Při laktačním poradenství působím v těchto městech a jejich okolí:
                </p>
                <div className="bg-gradient-to-r from-pink-100/70 to-rose-100/70 rounded-2xl p-6 border border-pink-200/50">
                  <p className="text-gray-800 font-body font-semibold leading-relaxed text-lg">
                    Sedlčany, Benešov, Bystřice, Příbram, Neveklov, Votice, Týnec nad Sázavou, Milevsko, Sedlec-Prčice, Petrovice, Dobříš, Kamýk nad Vltavou, Nový Knín
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-rose-50/90 to-pink-50/90 rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-rose-100/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm4-8h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                      <path d="M12 2l-1 1h2l-1-1z" fill="white"/>
                      <path d="M12 22l1-1h-2l1 1z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-elegant font-light text-gray-800">
                    <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
                      Doprovod k porodu
                    </span>
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 text-xl font-body font-medium">
                  K porodu vás mohu doprovodit do těchto porodnic:
                </p>
                <div className="bg-gradient-to-r from-rose-100/70 to-pink-100/70 rounded-2xl p-6 border border-rose-200/50">
                  <p className="text-gray-800 font-body font-semibold leading-relaxed text-lg">
                    Příbram, Hořovice, Tábor, Benešov
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