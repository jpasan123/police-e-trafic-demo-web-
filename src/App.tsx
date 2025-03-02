import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Instructions from './components/instructions/Instructions';
import Footer from './components/Footer';
import BetaNotice from './components/notices/BetaNotice';
import LegalPage from './components/legal/LegalPage';
import AccountDeletionPage from './components/legal/AccountDeletionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <BetaNotice />
            <Navbar />
            <Hero />
            <Features />
            <Instructions />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;