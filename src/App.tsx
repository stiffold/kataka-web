import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import TelegramChat from './components/TelegramChat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import SupportGroup from './pages/SupportGroup';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Google Analytics - nahraďte YOUR_MEASUREMENT_ID vaším skutečným ID */}
        <GoogleAnalytics measurementId="G-VCSS8B6PYR" />
        
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-mne" element={<About />} />
            <Route path="/sluzby" element={<Services />} />
            <Route path="/cenik" element={<Pricing />} />
            <Route path="/podpurna-skupinka" element={<SupportGroup />} />
            <Route path="/kurzy" element={<Courses />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Telegram Chat Widget */}
        <TelegramChat 
          telegramUsername="katerina_stara" 
          phoneNumber="+420736722952"
        />
      </div>
    </Router>
  );
}

export default App;
