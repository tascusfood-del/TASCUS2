import React from 'react';
import { Check } from 'lucide-react';

const Models: React.FC = () => {
  return (
    <section id="models" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lựa chọn mô hình đầu tư
          </h2>
          <p className="text-gray-600">Hai mô hình tối ưu hóa lợi nhuận và vận hành</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Model 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
            <div className="bg-gray-800 p-6 text-white text-center">
              <h3 className="text-2xl font-bold uppercase">Tascus Station</h3>
              <p className="opacity-80 text-sm mt-1">Mô hình tiêu chuẩn</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-brand-600">290 - 320</span>
                <span className="text-gray-500 font-medium ml-1">Triệu VNĐ</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Diện tích:</strong> 25m2 - 35m2 (Mặt tiền &gt; 6m)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Công năng:</strong> 12-16 ghế ngồi</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Vị trí:</strong> Khu dân cư, cổng trường học, văn phòng</span>
                </li>
              </ul>
              
              <a href="#contact" className="block w-full py-3 border-2 border-brand-600 text-brand-600 text-center rounded-lg font-bold hover:bg-brand-50 transition-colors">
                Chọn mô hình này
              </a>
            </div>
          </div>

          {/* Model 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-brand-500 relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              CAO CẤP
            </div>
            <div className="bg-brand-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold uppercase">Tascus House</h3>
              <p className="opacity-90 text-sm mt-1">Mô hình Nhà hàng lớn</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-brand-600">540</span>
                <span className="text-gray-500 font-medium ml-1">Triệu VNĐ</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="text-brand-600 shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Diện tích:</strong> 70m2 - 120m2 (Mặt tiền &gt; 10m)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-600 shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Công năng:</strong> Trải nghiệm Fast Food hiện đại, nhiều chỗ ngồi</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-600 shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Vị trí:</strong> Trung tâm thương mại, phố lớn</span>
                </li>
              </ul>
              
              <a href="#contact" className="block w-full py-3 bg-brand-600 text-white text-center rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg">
                Chọn mô hình này
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8 italic">* Chi phí chưa bao gồm phí nhượng quyền thương hiệu</p>
      </div>
    </section>
  );
};

export default Models;