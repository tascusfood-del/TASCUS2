import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về Tascus', href: '#about' },
    { name: 'Thực đơn', href: '#menu' },
    { name: 'Mô hình & Lợi nhuận', href: '#models' },
    { name: 'Quyền lợi & Quy trình', href: '#process' },
    { name: 'Khách hàng', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-brand-600 tracking-tighter uppercase flex items-center gap-2">
          <span className="bg-brand-600 text-white px-2 py-1 rounded">T</span>
          Tascus Food
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-600 font-medium text-sm uppercase tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
          >
            <Phone size={18} />
            1900 998 879
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t absolute w-full shadow-xl">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-brand-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-brand-600 text-white text-center py-3 rounded-lg font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Đăng Ký Nhượng Quyền
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;