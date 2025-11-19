import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for a busy restaurant scene */}
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Tascus Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-1 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            Cơ hội đầu tư F&B Hot nhất 2024
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Nhượng quyền <span className="text-brand-600">Tascus Food</span> <br />
            Mô hình F&B tinh gọn
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 font-medium mb-4">
            Sở hữu cửa hàng Burger, Bánh mì & Crepe phong cách Châu Âu chỉ từ <span className="text-brand-700 font-bold">290 triệu</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircle2 className="text-green-600" size={20} />
              Lợi nhuận ròng 20% - 25%/tháng
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircle2 className="text-green-600" size={20} />
              Chuẩn Gu Gen Z
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
            >
              Đăng ký tư vấn ngay <ArrowRight size={20} />
            </a>
            <a 
              href="tel:1900998879" 
              className="bg-white hover:bg-gray-50 text-brand-600 border-2 border-brand-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Gọi Hotline 1900 998 879
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;