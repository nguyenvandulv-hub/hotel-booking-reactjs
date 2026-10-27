export const HOTELS_DATA = [
  {
    id: 1,
    name: "Vinpearl Luxury Nha Trang",
    city: "Nha Trang",
    location: "Đảo Hòn Tre, Vĩnh Nguyên, Nha Trang",
    price: 3250000,
    originalPrice: 4200000,
    rating: 4.9,
    reviewsCount: 382,
    stars: 5,
    tag: "Bán chạy nhất",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description: "Khu nghỉ dưỡng biệt lập đẳng cấp quốc tế tọa lạc bên vịnh biển Nha Trang thơ mộng, mang đến trải nghiệm nghỉ dưỡng xa hoa, yên bình cùng hồ bơi vô cực và bãi biển riêng tư.",
    amenities: ["Hồ bơi vô cực", "Bãi biển riêng", "Bữa sáng miễn phí", "Spa & Wellness", "Đưa đón sân bay", "Wifi tốc độ cao", "Phòng gym"],
    roomTypes: [
      { name: "Premier Ocean View", size: "48m²", bed: "1 Giường King hoặc 2 Giường đơn", price: 3250000 },
      { name: "Executive Suite Ocean", size: "75m²", bed: "1 Giường King siêu lớn", price: 4850000 },
      { name: "Villa Hồ Bơi Riêng", size: "120m²", bed: "2 Giường King, Biệt thự biển", price: 7900000 }
    ]
  },
  {
    id: 2,
    name: "InterContinental Danang Sun Peninsula",
    city: "Đà Nẵng",
    location: "Bán đảo Sơn Trà, Đà Nẵng",
    price: 5900000,
    originalPrice: 7500000,
    rating: 5.0,
    reviewsCount: 520,
    stars: 5,
    tag: "Sang trọng bậc nhất",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description: "Được mệnh danh là kiệt tác kiến trúc của Bill Bensley, khu nghỉ dưỡng ẩn mình giữa thiên nhiên hoang sơ của bán đảo Sơn Trà nhìn thẳng ra biển xanh ngọc bích.",
    amenities: ["Bãi biển riêng", "Ẩm thực Michelin", "Cáp treo nội khu", "Spa HARNN", "Hồ bơi chân mây", "Miễn phí đón tiễn sân bay"],
    roomTypes: [
      { name: "Resort Classic Oceanview", size: "70m²", bed: "1 Giường King", price: 5900000 },
      { name: "Club InterContinental Terrace Suite", size: "84m²", bed: "1 Giường King", price: 8900000 },
      { name: "Heavenly Penthouse", size: "170m²", bed: "Hồ bơi riêng view toàn cảnh", price: 15500000 }
    ]
  },
  {
    id: 3,
    name: "JW Marriott Phu Quoc Emerald Bay",
    city: "Phú Quốc",
    location: "Bãi Khem, An Thới, TP. Phú Quốc",
    price: 4600000,
    originalPrice: 5800000,
    rating: 4.8,
    reviewsCount: 410,
    stars: 5,
    tag: "Ưu đãi 25%",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    description: "Khám phá câu chuyện kỳ thú về ngôi trường đại học tưởng tượng của Lamarck bên bờ cát trắng mịn Bãi Khem. Trải nghiệm dịch vụ 5 sao đẳng cấp quốc tế.",
    amenities: ["Bể bơi hình vỏ sò độc đáo", "Bãi biển riêng Bãi Khem", "Chèo thuyền kayak", "Spa Chanterelle", "Quầy bar sát biển"],
    roomTypes: [
      { name: "Emerald Bay View", size: "53m²", bed: "1 King hoặc 2 Twin", price: 4600000 },
      { name: "Rue De Lamarck Suite", size: "61m²", bed: "1 King, ban công biển", price: 6200000 },
      { name: "Turquoise Suite sát biển", size: "90m²", bed: "View biển trực diện", price: 9800000 }
    ]
  },
  {
    id: 4,
    name: "Hôtel de la Coupole - MGallery Sa Pa",
    city: "Sa Pa",
    location: "Số 1 Hoàng Liên, Sa Pa, Lào Cai",
    price: 2650000,
    originalPrice: 3400000,
    rating: 4.7,
    reviewsCount: 295,
    stars: 5,
    tag: "Độc đáo & Nghệ thuật",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    description: "Sự kết hợp quyến rũ giữa nét lãng mạn phong cách Pháp những năm 1920-1930 cùng hoa văn thổ cẩm rực rỡ sắc màu của các dân tộc thiểu số Sa Pa.",
    amenities: ["Bể bơi nước nóng trong nhà", "Trực tiếp kết nối ga tàu Mường Hoa", "Rooftop Bar ngắm mây", "Buffet sáng kiểu Âu", "Spa & Sauna"],
    roomTypes: [
      { name: "Classic Double Room", size: "33m²", bed: "1 Giường đôi lớn", price: 2650000 },
      { name: "Superior Room with Balcony", size: "38m²", bed: "1 Giường King, view núi", price: 3300000 },
      { name: "Deluxe Suite Valley View", size: "75m²", bed: "1 Giường King, ngắm trọn thung lũng", price: 5400000 }
    ]
  },
  {
    id: 5,
    name: "Ana Mandara Villas Dalat Resort & Spa",
    city: "Đà Lạt",
    location: "Đường Lê Lai, Phường 5, TP. Đà Lạt",
    price: 2150000,
    originalPrice: 2800000,
    rating: 4.8,
    reviewsCount: 312,
    stars: 5,
    tag: "Nghỉ dưỡng cổ điển",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    description: "Khu biệt thự Pháp cổ nằm ẩn mình giữa rừng thông xanh ngát của xứ sở ngàn hoa Đà Lạt, mang lại không gian hoài niệm, ấm cúng và vô cùng thanh bình.",
    amenities: ["Bể bơi nước ấm ngoài trời", "Lò sưởi củi trong phòng", "Vườn hoa & Rừng thông riêng", "Dịch vụ trà chiều", "Nhà hàng món Âu - Việt"],
    roomTypes: [
      { name: "Villa Room phong cách Pháp", size: "28m²", bed: "1 Giường Queen", price: 2150000 },
      { name: "Villa Studio với lò sưởi", size: "40m²", bed: "1 Giường King", price: 2950000 },
      { name: "Villa Suite Ban công vườn thông", size: "52m²", bed: "1 Giường King", price: 3950000 }
    ]
  },
  {
    id: 6,
    name: "Sofitel Legend Metropole Hanoi",
    city: "Hà Nội",
    location: "15 Phố Ngô Quyền, Hoàn Kiếm, Hà Nội",
    price: 4950000,
    originalPrice: 6200000,
    rating: 4.9,
    reviewsCount: 640,
    stars: 5,
    tag: "Di sản lịch sử",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    description: "Khách sạn 5 sao cổ kính bậc nhất thủ đô từ năm 1901, mang phong cách kiến trúc Pháp cổ điển ngay tại trung tâm phố cổ, chỉ vài bước chân tới Hồ Gươm.",
    amenities: ["Hồ bơi ngoài trời", "Hầm trú ẩn lịch sử", "Nhà hàng Pháp Le Beaulieu", "Phục vụ 24/7", "Spa Le Club"],
    roomTypes: [
      { name: "Premium Room Opera Wing", size: "32m²", bed: "1 Giường King", price: 4950000 },
      { name: "Grand Luxury Historical Wing", size: "40m²", bed: "1 Giường King cổ điển", price: 6800000 },
      { name: "Prestige Suite sang trọng", size: "64m²", bed: "Phòng khách riêng biệt", price: 11200000 }
    ]
  }
];

export const DESTINATIONS = [
  { name: "Đà Nẵng", hotelsCount: "320+ khách sạn", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80" },
  { name: "Phú Quốc", hotelsCount: "250+ khu nghỉ dưỡng", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" },
  { name: "Đà Lạt", hotelsCount: "410+ homestay & villa", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" },
  { name: "Nha Trang", hotelsCount: "290+ khách sạn ven biển", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { name: "Sa Pa", hotelsCount: "180+ khách sạn view núi", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" }
];

export const REVIEWS = [
  {
    id: 1,
    author: "Nguyễn Minh Tuấn",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    role: "Khách hàng thân thiết",
    hotel: "Vinpearl Luxury Nha Trang",
    rating: 5,
    comment: "Kỳ nghỉ của gia đình mình tuyệt vời ngoài mong đợi! Quy trình đặt phòng qua LumiStay cực kỳ nhanh, giá tốt hơn các nền tảng khác và được nâng hạng phòng miễn phí."
  },
  {
    id: 2,
    author: "Trần Mai Phương",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    role: "Doanh nhân",
    hotel: "InterContinental Danang",
    rating: 5,
    comment: "Giao diện website dễ sử dụng, thông tin phòng rõ ràng, đội ngũ hỗ trợ giải quyết thắc mắc chỉ trong vòng 3 phút qua hotline. 10/10 cho trải nghiệm!"
  },
  {
    id: 3,
    author: "Lê Hoàng Nam",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    role: "Nhiếp ảnh gia du lịch",
    hotel: "Hôtel de la Coupole Sa Pa",
    rating: 5,
    comment: "Đã book qua LumiStay 5 chuyến đi trong năm nay. Không bao giờ phát sinh phụ phí ẩn, xác nhận tức thì và hỗ trợ hủy/đổi phòng cực kỳ minh bạch."
  }
];
