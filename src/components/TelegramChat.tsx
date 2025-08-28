import React, { useState } from 'react';

interface TelegramChatProps {
  telegramUsername: string;
  phoneNumber?: string;
}

const TelegramChat: React.FC<TelegramChatProps> = ({ telegramUsername, phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleTelegramClick = () => {
    // Otevře Telegram s vaším uživatelem
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  const handlePhoneClick = () => {
    if (phoneNumber) {
      window.open(`tel:${phoneNumber}`, '_blank');
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white p-4 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Otevřít chat"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>

        {/* Chat Widget */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-3xl shadow-soft-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Kateřina Stará</h3>
                    <p className="text-sm opacity-90 font-medium">Porodní dula & laktační poradkyně</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white transition-all duration-200 p-2 rounded-xl hover:bg-white/10"
                >
                  {isMinimized ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    👋 Ahoj! Jsem Kateřina, porodní dula a laktační poradkyně. 
                    Jak vám mohu pomoci na vaší cestě mateřstvím?
                  </p>
                </div>

                {/* Contact Options */}
                <div className="space-y-4">
                  {/* Telegram Button */}
                  <button
                    onClick={handleTelegramClick}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>Napsat na Telegram</span>
                  </button>

                  {/* Phone Button */}
                  {phoneNumber && (
                    <button
                      onClick={handlePhoneClick}
                      className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Zavolat</span>
                    </button>
                  )}

                  {/* Contact Form Link */}
                  <button
                    onClick={() => window.location.href = '/kontakt'}
                    className="w-full border-2 border-primary-500 text-primary-600 py-4 px-6 rounded-2xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Kontaktní formulář</span>
                  </button>
                </div>

                {/* Quick Info */}
                <div className="mt-6 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    💡 <strong>Tip:</strong> Pro rychlou odpověď použijte Telegram. 
                    Odpovídám obvykle do 30 minut a jsem dostupná 24/7 pro porody.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TelegramChat;
