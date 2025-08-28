import React from 'react';

const Services: React.FC = () => {
  const lactationServices = [
    "Poraněné bradavky",
    "Bolest při kojení",
    "Nepřisávající se miminko",
    "Pomoc s různými polohami při kojení",
    "Odstranění kloboučků",
    "Bojkot kojení",
    "Nedostatečné přibírání dítěte",
    "Dokrmování",
    "Kojení v šátku/nosítku"
  ];

  const prenatalTopics = [
    "Relaxační techniky (masáže, rebozo, nácvik úlevových poloh), které ráda v případě zájmu naučím i partnera.",
    "Tipy jak přirozeně vyvolat porod, jak rozpoznat začátek porodu",
    "Informace o průběhu vaginálního porodu, porodu císařským řezem, porodu koncem pánevním či VBAC",
    "Polohy ženy při porodu",
    "Porodní přání, seznam věcí co si s sebou vzít do porodnice",
    "Vliv porodu na kojení",
    "Kojení po porodu a dále",
    "Praktické ukázky",
    "Reálné video ukázky"
  ];

  const postpartumServices = [
    "Pomoc s kojením",
    "Hojení porodních poranění",
    "Péče o jizvy",
    "Ženská napářka",
    "Jemná masáž břicha",
    "Výživa",
    "Psychická podpora",
    "Péče o miminko"
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Nabízím tyto služby
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Komplexní podpora během těhotenství, porodu a poporodního období
          </p>
        </div>

        <div className="space-y-20">
          {/* Laktační poradenství */}
          <section className="group">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">LAKTAČNÍ PORADENSTVÍ</h2>
              <p className="text-xl text-gray-600 mb-8">
                S čím Vám mohu pomoci:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {lactationServices.map((service, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-600 leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-semibold text-lg">
                    První schůzka trvá 90 min., každá další 60 min.
                  </p>
                  <p>
                    Poradenství probíhá v pohodlí Vašeho domova či v porodnici.
                  </p>
                  <p>
                    Pokud bude Vaše miminko zrovna spát, vše s Vámi v klidu proberu, vyslechnu Vás.
                  </p>
                  <p>
                    Až se dítě bude chtít kojit, podívám se na přisátí, polohu a zhodnotím vydatnost pití.
                  </p>
                  <p>
                    Následně zjistím, co stojí za Vašimi problémy a navrhnu efektivní řešení.
                  </p>
                  <p>
                    Pokud to bude třeba, ráda Vám poskytnu potřebné pomůcky, které jsou v ceně poradenství.
                  </p>
                  <p>
                    Po návštěvě s Vámi zůstanu v kontaktu (online/telefonní konzultace zdarma) a podle potřeby Vás mohu navštívit znovu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Doprovod k porodu */}
          <section className="group">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">DOPROVOD K PORODU</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  Ráda Vás provedu těhotenstvím, porodem a poporodním obdobím.
                </p>
                <p>
                  Pokud si to budete přát, zůstanu s Vámi po celou dobu porodu, budu Vás povzbuzovat, podporovat a vytvářet příjemné a vhodné prostředí.
                </p>
                <p>
                  Pomohu Vám s uvolněním a úlevou od bolesti pomocí nejrůznějších relaxačních technik. Vytvořím Vám zázemí a příjemnou atmosféru, ve které se budete moci uvolnit a plně se soustředit na samotný porod.
                </p>
                <p>
                  Pokud Vás bude doprovázet partner, blízký příbuzný nebo kamarádka, pak budu oporou též pro ně.
                </p>
                <p>
                  Po porodu miminka Vám pomohu s kojením a následně mohu pomoci s čímkoliv, podle Vašich potřeb a přání.
                </p>
              </div>
            </div>
          </section>

          {/* Předporodní příprava */}
          <section className="group">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">PŘEDPORODNÍ PŘÍPRAVA</h2>
              <p className="text-xl text-gray-600 mb-8">
                Probíhá ve 2 schůzkách, každá trvá cca 2 hodiny. V porodním balíčku je navíc příprava na kojení (1,5 hod.).
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Témata přípravy:
              </p>
              <div className="space-y-4 mb-12">
                {prenatalTopics.map((topic, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-600 leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Předporodní příprava je důležitá také proto, abych znala Vaše přání, co je Vám příjemné a co ne. Zároveň se tím prohloubí vzájemná důvěra - a to velmi pozitivně ovlivní atmosféru u porodu.
                </p>
              </div>
            </div>
          </section>

          {/* Poporodní návštěva */}
          <section className="group">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">POPORODNÍ NÁVŠTĚVA</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Návštěva probíhá v pohodlí Vašeho domova a trvá 120 min. Na poporodní návštěvě Vám poskytnu rady a pomoc v těchto oblastech:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postpartumServices.map((service, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-600 leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
