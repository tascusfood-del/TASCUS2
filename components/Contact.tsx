import React, { useState } from 'react';
import { Phone, MapPin, Facebook, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.');
    // Here you would typically send data to an API
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Đăng ký tư vấn nhượng quyền <span className="text-brand-600">Tascus Food</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Để lại thông tin để nhận bảng phân tích tài chính chi tiết và ưu đãi nhượng quyền mới nhất.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hotline</h4>
                  <p className="text-brand-600 font-bold text-xl">1900 998 879</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Văn phòng</h4>
                  <p className="text-gray-600">122 Thái Thịnh, Đống Đa, Hà Nội</p>
                  <p className="text-gray-600">340 Mỹ Đình, Nam Từ Liêm, Hà Nội</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                 <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                 </button>
                 <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors">
                    <Globe size={20} />
                 </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Nhập họ tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Khu vực dự định mở quán</label>
                <input
                  type="text"
                  name="area"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ví dụ: Quận Cầu Giấy, Hà Nội"
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ngân sách dự kiến</label>
                <select
                  name="budget"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                  value={formData.budget}
                  onChange={handleChange}
                >
                   <option value="">Chọn ngân sách</option>
                   <option value="200-300">200 - 300 Triệu</option>
                   <option value="300-500">300 - 500 Triệu</option>
                   <option value="500+">Trên 500 Triệu</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg text-lg shadow-lg transition-all hover:-translate-y-1"
              >
                GỬI THÔNG TIN NGAY
              </button>
              <p className="text-xs text-center text-gray-500 mt-2">
                Chúng tôi cam kết bảo mật thông tin của bạn.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;