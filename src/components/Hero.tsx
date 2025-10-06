import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-10 "></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-rose-100 rounded-full opacity-10  delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-10  delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-rose-200 rounded-full opacity-10  delay-1500"></div>
        
        {/* Husté pole malých třpytivých glitrů */}
        <div className="absolute top-10 left-10 w-0.5 h-0.5 bg-white rounded-full opacity-80 "></div>
        <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-50"></div>
        <div className="absolute top-30 left-30 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-100"></div>
        <div className="absolute top-40 left-40 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-150"></div>
        <div className="absolute top-50 left-50 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-200"></div>
        <div className="absolute top-60 left-60 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-250"></div>
        <div className="absolute top-70 left-70 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-300"></div>
        <div className="absolute top-80 left-80 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-350"></div>
        <div className="absolute top-90 left-90 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-400"></div>
        <div className="absolute top-100 left-100 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-450"></div>
        
        <div className="absolute top-15 right-15 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-25"></div>
        <div className="absolute top-25 right-25 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-75"></div>
        <div className="absolute top-35 right-35 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-125"></div>
        <div className="absolute top-45 right-45 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-175"></div>
        <div className="absolute top-55 right-55 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-225"></div>
        <div className="absolute top-65 right-65 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-275"></div>
        <div className="absolute top-75 right-75 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-325"></div>
        <div className="absolute top-85 right-85 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-375"></div>
        <div className="absolute top-95 right-95 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-425"></div>
        <div className="absolute top-105 right-105 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-475"></div>
        
        <div className="absolute bottom-10 left-10 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-500"></div>
        <div className="absolute bottom-20 left-20 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-550"></div>
        <div className="absolute bottom-30 left-30 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-600"></div>
        <div className="absolute bottom-40 left-40 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-650"></div>
        <div className="absolute bottom-50 left-50 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-700"></div>
        <div className="absolute bottom-60 left-60 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-750"></div>
        <div className="absolute bottom-70 left-70 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-800"></div>
        <div className="absolute bottom-80 left-80 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-850"></div>
        <div className="absolute bottom-90 left-90 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-900"></div>
        <div className="absolute bottom-100 left-100 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-950"></div>
        
        <div className="absolute bottom-15 right-15 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-525"></div>
        <div className="absolute bottom-25 right-25 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-575"></div>
        <div className="absolute bottom-35 right-35 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-625"></div>
        <div className="absolute bottom-45 right-45 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-675"></div>
        <div className="absolute bottom-55 right-55 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-725"></div>
        <div className="absolute bottom-65 right-65 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-775"></div>
        <div className="absolute bottom-75 right-75 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-825"></div>
        <div className="absolute bottom-85 right-85 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-875"></div>
        <div className="absolute bottom-95 right-95 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-925"></div>
        <div className="absolute bottom-105 right-105 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-975"></div>
        
        {/* Střední část */}
        <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1050"></div>
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1100"></div>
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1150"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1200"></div>
        
        <div className="absolute top-1/3 left-1/4 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1025"></div>
        <div className="absolute top-1/3 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1075"></div>
        <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1125"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1175"></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1225"></div>
        
        <div className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-975"></div>
        <div className="absolute top-2/3 left-1/3 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1025"></div>
        <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1075"></div>
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1125"></div>
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1175"></div>
        
        {/* Další vrstva glitrů */}
        <div className="absolute top-1/4 left-1/6 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1300"></div>
        <div className="absolute top-1/4 left-1/5 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1350"></div>
        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1400"></div>
        <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1450"></div>
        <div className="absolute top-1/4 right-1/5 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1500"></div>
        <div className="absolute top-1/4 right-1/6 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1550"></div>
        
        <div className="absolute top-3/4 left-1/6 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1600"></div>
        <div className="absolute top-3/4 left-1/5 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1650"></div>
        <div className="absolute top-3/4 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1700"></div>
        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1750"></div>
        <div className="absolute top-3/4 right-1/5 w-0.5 h-0.5 bg-white rounded-full opacity-80  delay-1800"></div>
        <div className="absolute top-3/4 right-1/6 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-80  delay-1850"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Text content */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-elegant font-light text-gray-800 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
              Kateřina Stará
              </span>
              <span className="block text-2xl md:text-3xl font-body font-light text-gray-700 mt-6 italic">
                Porodní dula & laktační poradkyně
              </span>
            </h1>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center mb-20">
          <div className="group relative">
            <div className="relative">
              {/* Main photo with soft shadow and rounded corners */}
              <div className="relative overflow-hidden rounded-3xl shadow-soft-lg group-hover:shadow-soft-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <img 
                  src="/images/9.png" 
                  alt="Těhotná žena v přírodě - symbol nového života a mateřství"
                  className="w-96 h-96 object-cover"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-200 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        {/* Láskyplný text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-body font-light text-gray-700 leading-relaxed italic">
            "Každá žena si zaslouží láskyplnou podporu během jednoho z nejkrásnějších období svého života. 
            Jsem tu pro vás s otevřeným srdcem a odbornými znalostmi."
          </p>
        </div>

        {/* Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/kontakt"
              className="group bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-4 rounded-2xl font-body font-medium hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl transform hover:-translate-y-1"
            >
              Domluvit konzultaci
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="/sluzby"
              className="group border-2 border-rose-400 text-rose-500 px-10 py-4 rounded-2xl font-body font-medium hover:bg-rose-400 hover:text-white transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
            >
              Zjistit více
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-rose-500 mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-600 font-medium">Spokojených rodin</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-rose-500 mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-gray-600 font-medium">Kraje působnosti</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-rose-500 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600 font-medium">Pohotovost k porodu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
