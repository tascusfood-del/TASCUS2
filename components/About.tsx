import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-100 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/600/400" 
              alt="Tascus Store" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover transform transition-transform hover:scale-[1.02] duration-500"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tascus Food là ai?
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Tascus Food là thương hiệu F&B hiện đại chuyên về <strong className="text-brand-600">Burger, Bánh mì, Crepe, Sandwich</strong> và đồ uống. Chúng tôi mang đến trải nghiệm ẩm thực "Great taste - Superior speed" (Hương vị tuyệt vời - Tốc độ vượt trội).
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Thương hiệu đã được đăng ký bảo hộ pháp lý và sở hữu quy trình sản xuất đạt chuẩn <strong className="text-brand-600">ISO 22000:2018</strong>.
            </p>
            
            <div className="bg-brand-50 border-l-4 border-brand-500 p-4 rounded-r-lg">
              <p className="font-semibold text-brand-800">
                Điểm nhấn: Menu đa dạng phù hợp mọi khung giờ: Sáng - Trưa - Chiều - Tối.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;