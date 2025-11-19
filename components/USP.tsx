import React from 'react';
import { Settings, Factory, Wallet, Users, TrendingUp, LifeBuoy } from 'lucide-react';

const USP: React.FC = () => {
  const reasons = [
    {
      icon: <Settings size={32} />,
      title: "Quy trình chuẩn hóa",
      desc: "Vận hành chặt chẽ từ A-Z, dễ dàng chuyển giao cho người mới bắt đầu."
    },
    {
      icon: <Factory size={32} />,
      title: "Sản xuất khép kín",
      desc: "Nhà xưởng 1.500m2 đạt chuẩn ISO, đảm bảo nguồn nguyên liệu ổn định và an toàn."
    },
    {
      icon: <Wallet size={32} />,
      title: "Đa dạng nguồn thu",
      desc: "Tại chỗ (80%), Online qua App (17%), và Đơn tiệc/trường học (3%)."
    },
    {
      icon: <Users size={32} />,
      title: "Khách hàng lớn",
      desc: "Tập trung vào Gen Z, học sinh, sinh viên và gia đình trẻ yêu thích sự tiện lợi."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Chi phí tối ưu",
      desc: "Giá vốn hàng hóa (COGS) được kiểm soát ở mức 45%, đảm bảo biên lợi nhuận."
    },
    {
      icon: <LifeBuoy size={32} />,
      title: "Hỗ trợ toàn diện",
      desc: "Marketing, đào tạo nhân sự, setup cửa hàng và xử lý khủng hoảng."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            6 Lý do nhà đầu tư nên chọn Tascus Food
          </h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-brand-500 group">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;