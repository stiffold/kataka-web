import React from 'react';

const About: React.FC = () => {
  const qualifications = [
    "Certifikovaná porodní dula u České asociace dul (ČAD)",
    "Certifikovaná laktační poradkyně o.z. MAMILA (od ledna 2023)",
    "Vystudovaná střední a vyšší zdravotnická škola",
    "Zkušenosti z porodních sálů a oddělení šestinedělí"
  ];

  const benefits = [
    "délku a průběh porodu, zároveň snižuje pravděpodobnost císařského řezu",
    "zdravotní stav matky i jejího dítěte po porodu",
    "délku kojení dítěte",
    "spokojenost ženy s porodem, se sebou sama jako s matkou",
    "snížený výskyt poporodních depresí",
    "duševní pohodu ženy i celé rodiny"
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-primary-100 via-white to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-elegant font-light text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
              O mně
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-body font-light text-gray-700 mb-6 italic">
            Porodní dula & laktační poradkyně
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Photo section */}
        <div className="mb-20">
          <div className="flex justify-center">
            <div className="group relative">
              <div className="relative">
                {/* Main photo with soft shadow and rounded corners */}
                <div className="relative overflow-hidden rounded-3xl shadow-soft-lg group-hover:shadow-soft-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <img 
                    src="/images/about-photo.png" 
                    alt="Kateřina Stará - Porodní dula a laktační poradkyně"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Osobní informace */}
          <div className="space-y-8">
            <div className="group">
              <div className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">Osobní informace</h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Jmenuji se Kateřina Stará, bydlím s manželem a našimi skvělými čtyřmi dětmi nedaleko Sedlčan.
                  </p>
                  <p>
                    Vystudovala jsem střední a vyšší zdravotnickou školu. Už při studiu jsem byla nejraději na porodních sálech a na oddělení šestinedělí :)
                  </p>
                  <p>
                    Jsem certifikovaná porodní dula u České asociace dul (ČAD).
                  </p>
                  <p>
                    Od ledna 2023 jsem certifikovaná laktační poradkyně o.z. MAMILA. Tato práce mě velmi baví a naplňuje.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">Moje poslání</h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Bude mi velkou ctí, milé ženy, provést Vás těhotenstvím a být s Vámi u zrodu nového života.
                  </p>
                  <p>
                    Velmi ráda Vám též pomůžu s jakýmkoliv problémem při kojení.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kvalifikace a zkušenosti */}
          <div className="space-y-8">
            <div className="group">
              <div className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">Kvalifikace a vzdělání</h3>
                <ul className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start text-gray-600 group/item">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg leading-relaxed">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">Moje zkušenosti</h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Mám za sebou čtyři porody, u kterých jsem ledacos zažila. Uvědomuju si ale, že každý porod je jiný, a stejně tak každá žena bude mít jiné potřeby. Proto k Vám přistupuji s respektem a ctím Vaše konkrétní potřeby a představy.
                  </p>
                  <p>
                    Také během kojení svých dětí jsem zažila spoustu situací, kdy to nebylo jednoduché. Vyzkoušela jsem např. kojení s kloboučky, řešila přirostlou podjazykovou uzdičku u dcery i velký bojkot kojení. Proto se dokážu do ženy vžít, soucítit s ní a efektivně pomoci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vědecké studie */}
        <div className="mt-20">
          <div className="group">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Můj pohled na porod a kojení</h3>
              <div className="space-y-8">
                <p className="text-xl text-gray-700 text-center leading-relaxed">
                  Podle vědeckých studií má péče duly významný pozitivní vliv na:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-600 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Kojení je dokonalý nástroj, který my, maminky máme. Nejen že díky němu dokážeme miminko zasytit, ale kojením ho dokážeme také uklidnit, dáváme mu pocit jistoty a bezpečí, pomáháme mu usnout a v neposlední řadě mu kojením můžeme pomoci od bolesti.
                  </p>
                  <p className="text-xl text-primary-600 font-medium text-center">
                    Věřím, že každá žena může prožívat naplňující a posilující porod a po něm radostné a láskyplné chvíle se svým miminkem. Velmi se těším, až u toho budu moct být s Vámi :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
