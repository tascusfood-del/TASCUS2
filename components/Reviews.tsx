import React from 'react';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Đình Nguyễn",
      comment: "Một trải nghiệm tuyệt vời tại Tascus Food! Đồ ăn ngon và không gian ấn tượng.",
      rating: 5
    },
    {
      name: "Nguyễn Thành Nam",
      comment: "Phục vụ nhiệt tình, chất lượng đồ ăn tuyệt vời so với tầm giá.",
      rating: 5
    },
    {
      name: "Naomi Selina",
      comment: "Quán xinh lắm, burger to oành mà có 35k.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hàng trăm đánh giá 5 sao
          </h2>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600">Trên Google Maps & Apps giao hàng (Rating 4.6 - 4.9)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-gray-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;