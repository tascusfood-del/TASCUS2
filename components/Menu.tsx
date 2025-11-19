import React from 'react';

const Menu: React.FC = () => {
  const menuItems = [
    {
      category: "Burger",
      desc: "Burger Bò, Burger Gà",
      price: "35k - 65k",
      img: "https://picsum.photos/400/300?random=1"
    },
    {
      category: "Bánh mì",
      desc: "Chảo Steak style, Sốt tiêu đen",
      price: "35k - 49k",
      img: "https://picsum.photos/400/300?random=2"
    },
    {
      category: "Crepe & Sandwich",
      desc: "Món ăn nhẹ yêu thích",
      price: "25k - 30k",
      img: "https://picsum.photos/400/300?random=3"
    },
    {
      category: "Đồ uống",
      desc: "Trà & Nước giải khát",
      price: "15k - 35k",
      img: "https://picsum.photos/400/300?random=4"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider">Sản Phẩm Nổi Bật</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Menu "bắt trend" - Chìa khóa giữ chân khách
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={item.img} 
                alt={item.category} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{item.category}</h3>
                <p className="text-gray-200 text-sm mb-2">{item.desc}</p>
                <span className="inline-block bg-brand-600 text-xs font-bold px-3 py-1 rounded-full w-fit">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;