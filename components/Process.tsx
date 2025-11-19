import React from 'react';
import { Package, Award, Truck, Percent, Search, FileSignature, Hammer, Store } from 'lucide-react';

const Process: React.FC = () => {
  const benefits = [
    { text: "Thương hiệu & Khách hàng có sẵn", icon: <Award className="text-brand-600" /> },
    { text: "Hỗ trợ tư vấn giấy phép kinh doanh", icon: <FileSignature className="text-brand-600" /> },
    { text: "Nguyên vật liệu chuẩn ISO", icon: <Package className="text-brand-600" /> },
    { text: "Chiết khấu thấp trên App (ShopeeFood...)", icon: <Percent className="text-brand-600" /> },
    { text: "Đào tạo quản lý & vận hành", icon: <Store className="text-brand-600" /> },
  ];

  const steps = [
    { title: "1. Tìm hiểu & Trải nghiệm", icon: <Search size={24} /> },
    { title: "2. Thẩm định & Ký kết", icon: <FileSignature size={24} /> },
    { title: "3. Đào tạo & Thi công", icon: <Hammer size={24} /> },
    { title: "4. Khai trương & Vận hành", icon: <Store size={24} /> },
  ];

  return (
    <section id="process" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quyền lợi đối tác độc quyền
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors border border-gray-700">
                <div className="mb-4 flex justify-center bg-gray-900 w-12 h-12 rounded-full items-center mx-auto">
                  {item.icon}
                </div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quy trình 4 Giai đoạn
          </h2>
          <div className="relative">
            {/* Line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl text-center border border-gray-600 shadow-lg">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg shadow-brand-600/20">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;