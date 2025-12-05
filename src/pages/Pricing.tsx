import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary-100 via-white to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-elegant font-light text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
              Ceník
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Laktační poradenství */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Laktační poradenství</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">První schůzka</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">1500,-</div>
                <p className="text-gray-600 mb-4">Délka - 90 min.</p>
                <p className="text-sm text-gray-500">V ceně jsou online/telefonické konzultace do 14 dnů od setkání</p>
                <p className="text-sm text-gray-500">Osobně nebo online</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Každá další schůzka</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">1000,-</div>
                <p className="text-gray-600 mb-4">Délka - 60 min.</p>
                <p className="text-sm text-gray-500">V ceně jsou online/telefonické konzultace do 14 dnů od setkání</p>
                <p className="text-sm text-gray-500">Osobně nebo online</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Příprava na kojení</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">2000,-</div>
                <p className="text-gray-600 mb-4">Délka - 120 min.</p>
                <p className="text-sm text-gray-500">V ceně jsou online/telefonické konzultace do 14 dnů od setkání</p>
                <p className="text-sm text-gray-500">Osobně nebo online</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Půjčení šátku/odsávačky</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">300,-</div>
                <p className="text-gray-600 mb-4">Cena za 1 týden</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Online/tel. konzultace</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">1000,-/60 min.</div>
                <p className="text-sm text-gray-500">Minimální délka konzultace je 60 minut</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cestovné</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">10,-/km</div>
                <p className="text-sm text-gray-500">Počítáno ze Sedlčan</p>
              </div>
            </div>
          </div>

          {/* Porodní dula */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Porodní dula</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Seznamovací schůzka</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">ZDARMA</div>
                <p className="text-gray-600 mb-4">Délka 30-60 min.</p>
                <p className="text-sm text-gray-500">Osobně nebo online</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Porodní balíček</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">17000,-</div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Předporodní příprava 2x120 min
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Pohotovost od 38+0tt. až do porodu
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Doprovod k porodu
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Poporodní péče 1x120 min
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Předporodní příprava</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">1000,-/60 min.</div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Probereme vše, co je pro Vás důležité
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Komplexní a velmi praktická příprava na porod
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Příprava na kojení
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Aromaterapie a tvoření vlastního roll-onu
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Pomoc s tvorbou porodního přání
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Rebozo
                  </li>
                </ul>
              </div>
            </div>


            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pohotovost k porodu</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">4000,-</div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Od 38+0 tt. až do porodu
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Rezervace termínu a potvrzení spolupráce
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Online/telefonická podpora
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Doprovod k porodu</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">8000,-</div>
                <p className="text-gray-600 mb-4">Cena se ani při dlouhém porodu nemění</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Poporodní péče</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">2000,-</div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Délka - 120 min.
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Osobní návštěva
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Konzultace
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Laktační poradenství
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Online/tel. konzultace</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">1000,-/60 min.</div>
                <p className="text-sm text-gray-500">Minimální délka konzultace je 60 minut</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cestovné</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">10,-/km</div>
                <p className="text-sm text-gray-500">Počítáno ze Sedlčan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Informace o pojišťovnách */}
        <div className="mt-20">
          <div className="group">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                Některé zdravotní pojišťovny přispívají na služby laktační poradkyně
              </h3>
              <p className="text-xl text-gray-600 text-center leading-relaxed">
                Informujte se u své zdravotní pojišťovny o možnosti příspěvku na laktační poradenství.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
