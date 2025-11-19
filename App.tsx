import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import USP from './components/USP';
import Menu from './components/Menu';
import Models from './components/Models';
import Profit from './components/Profit';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <USP />
        <Menu />
        <Models />
        <Profit />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Tascus Food. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">Thương hiệu nhượng quyền F&B hàng đầu.</p>
        </div>
      </footer>
      <FloatingCTA />
    </div>
  );
};

export default App;