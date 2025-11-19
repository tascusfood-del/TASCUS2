import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-4 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-2">
       <a href="tel:1900998879" className="flex-1 bg-brand-100 text-brand-700 font-bold py-3 rounded-lg flex items-center justify-center gap-2">
         <Phone size={18} />
         Gọi 1900...
       </a>
       <a href="#contact" className="flex-1 bg-brand-600 text-white font-bold py-3 rounded-lg flex items-center justify-center">
         Đăng Ký Ngay
       </a>
    </div>
  );
};

export default FloatingCTA;