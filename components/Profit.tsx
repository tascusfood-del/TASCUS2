import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Profit: React.FC = () => {
  const data = [
    {
      name: 'Mức 1',
      DoanhThu: 180,
      LoiNhuan: 37.7,
      TyLe: '20.9%',
    },
    {
      name: 'Mức 2',
      DoanhThu: 250,
      LoiNhuan: 59.6,
      TyLe: '23.8%',
    },
    {
      name: 'Mức 3',
      DoanhThu: 350,
      LoiNhuan: 85.3,
      TyLe: '24.4%',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bài toán lợi nhuận thực tế
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Số liệu dựa trên bảng P&L mẫu tại các cửa hàng đang hoạt động ổn định.
            </p>

            <ul className="space-y-6">
              {data.map((item, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-800">Doanh thu: {item.DoanhThu} Triệu/tháng</span>
                  </div>
                  <div className="flex justify-between items-center text-brand-700">
                     <span className="font-semibold">➔ Lợi nhuận: ~{item.LoiNhuan} Triệu</span>
                     <span className="bg-brand-100 px-2 py-1 rounded text-xs font-bold">{item.TyLe}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-bold text-green-800 flex items-center gap-2">
                ★ Cam kết: Tỷ suất lợi nhuận ròng ổn định 20% - 25%
              </p>
            </div>
          </div>

          <div className="h-[400px] w-full bg-white shadow-lg p-4 rounded-xl border border-gray-100">
            <h3 className="text-center font-bold text-gray-700 mb-4">Biểu đồ Doanh thu & Lợi nhuận (Triệu VNĐ)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <Legend />
                <Bar name="Doanh thu" dataKey="DoanhThu" fill="#d1d5db" radius={[4, 4, 0, 0]} />
                <Bar name="Lợi nhuận" dataKey="LoiNhuan" fill="#ea580c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;