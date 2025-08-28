import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24 lg:py-32 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-secondary-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-secondary-300 rounded-full opacity-10 animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Text content */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Kateřina Stará
              <span className="block text-primary-600 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Porodní dula & laktační poradkyně
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Porod dítěte vnímám jako ten největší zázrak, který můžeme v životě zažít. 
            Nabízím vám pomocnou ruku při přípravě na porod, podporu během porodu a pomoc s kojením.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="/kontakt"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-2xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl transform hover:-translate-y-1"
            >
              Domluvit konzultaci
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="/sluzby"
              className="group border-2 border-primary-600 text-primary-600 px-10 py-4 rounded-2xl font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
            >
              Zjistit více
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center mb-20">
          <div className="group relative">
            <div className="relative">
              {/* Main photo with soft shadow and rounded corners */}
              <div className="relative overflow-hidden rounded-3xl shadow-soft-lg group-hover:shadow-soft-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <img 
                  src="/images/1.png" 
                  alt="Těhotná žena v přírodě - symbol nového života a mateřství"
                  className="w-96 h-96 object-cover"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-600 font-medium">Spokojených rodin</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-gray-600 font-medium">Kraje působnosti</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600 font-medium">Dostupnost pro porody</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
