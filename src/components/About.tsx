import React from 'react';

const About: React.FC = () => {
  const qualifications = [
    "Certifikovaná porodní dula",
    "Laktační poradkyně",
    "Průběžné vzdělávání v oblasti porodnictví"
  ];

  const testimonials = [
    {
      text: "Katka byla úžasná podpora při porodu našeho prvního miminka. Její klid a zkušenosti nám pomohly prožít krásný porod.",
      author: "Markéta a Tomáš",
      baby: "Eliška, 6 měsíců"
    },
    {
      text: "Díky Katce jsme úspěšně vyřešili problémy s kojením. Její rady byly praktické a velmi užitečné.",
      author: "Petra",
      baby: "Adam, 3 měsíce"
    },
    {
      text: "Katka nám pomohla připravit se na porod a byla s námi celou dobu. Její podpora byla neocenitelná.",
      author: "Jana a Pavel",
      baby: "Tereza, 1 rok"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Na úvod
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Porod dítěte vnímám jako ten největší zázrak, který můžeme v životě zažít. Věřte, že větší dar už dostat nemůžete :)
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Často ale mají ženy po porodu pocit, že byly málo podpořené, málo informované. Možná mají i výčitky, že něco mohly udělat jinak.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nabízím Vám proto pomocnou ruku, kdy Vás (případně i partnera) ještě v těhotenství naučím vše potřebné, probereme všechny vaše obavy. Budu s Vámi u porodu a navštívím Vás i po něm.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Po porodu se zaměříme také na kojení, protože ho vnímám jako přirozenou součást péče o dítě, dochází při něm také k budování vztahu dítěte s matkou. Ženy by v kojení měly být aktivně podporovány a zaslouží si dostat takovou pomoc a podporu, jakou potřebují.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Vím, že je toto období velmi křehké, proto udělám vše pro to, abych Vás co nejvíce podpořila.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kvalifikace a vzdělání</h3>
              <ul className="space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Moje filozofie</h3>
              <p className="text-gray-600 italic">
                "V lásce není strach, ale dokonalá láska strach zahání." - 1. Janova 4,18
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Co říkají spokojené rodiny</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-3">💕</div>
                    <div>
                      <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-primary-600">{testimonial.baby}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Působnost section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Kde působím</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Laktační poradenství</h4>
              <p className="text-gray-600 mb-4">
                Při laktačním poradenství působím v těchto městech a jejich okolí:
              </p>
              <p className="text-gray-600">
                Benešov, Bystřice, Příbram, Neveklov, Votice, Týnec nad Sázavou, Milevsko, Sedlec-Prčice, Petrovice, Dobříš, Kamýk nad Vltavou, Nový Knín, Mníšek pod Brdy, Štěchovice.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Doprovod k porodu</h4>
              <p className="text-gray-600 mb-4">
                K porodu vás mohu doprovodit do porodnic v těchto krajích:
              </p>
              <p className="text-gray-600">
                Středočeský, Jihočeský, Praha
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
