import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, Calendar, Users, MapPin, Star, ShieldCheck, 
  Headphones, CreditCard, Sparkles, ArrowRight, Award, CheckCircle2 
} from 'lucide-react';
import { HOTELS_DATA, DESTINATIONS, REVIEWS } from '../data/hotels';

export default function HomePage() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 người lớn, 1 phòng');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = destination ? `?city=${encodeURIComponent(destination)}` : '';
    navigate(`/hotels${query}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Nền tảng đặt phòng uy tín hàng đầu</span>
            </div>
            <h1 className="hero-title">
              Khám Phá Kỳ Nghỉ Mơ Ước Với <span className="highlight">LumiStay</span>
            </h1>
            <p className="hero-subtitle">
              Hơn 1.200+ khách sạn cao cấp & resort biển 5 sao trên khắp Việt Nam với mức giá ưu đãi độc quyền.
            </p>

            {/* Search Widget */}
            <form onSubmit={handleSearch} className="search-box-card">
              <div className="search-box-grid">
                {/* Field 1: Destination */}
                <div className="search-field">
                  <label htmlFor="destination-select">
                    <MapPin size={16} color="var(--primary)" />
                    Điểm đến
                  </label>
                  <select 
                    id="destination-select"
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="">Tất cả điểm đến</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Phú Quốc">Phú Quốc</option>
                    <option value="Nha Trang">Nha Trang</option>
                    <option value="Đà Lạt">Đà Lạt</option>
                    <option value="Sa Pa">Sa Pa</option>
                    <option value="Hà Nội">Hà Nội</option>
                  </select>
                </div>

                {/* Field 2: Check-in */}
                <div className="search-field">
                  <label htmlFor="check-in-date">
                    <Calendar size={16} color="var(--primary)" />
                    Ngày nhận phòng
                  </label>
                  <input 
                    id="check-in-date"
                    type="date" 
                    value={checkIn} 
                    onChange={(e) => setCheckIn(e.target.value)} 
                  />
                </div>

                {/* Field 3: Check-out */}
                <div className="search-field">
                  <label htmlFor="check-out-date">
                    <Calendar size={16} color="var(--primary)" />
                    Ngày trả phòng
                  </label>
                  <input 
                    id="check-out-date"
                    type="date" 
                    value={checkOut} 
                    onChange={(e) => setCheckOut(e.target.value)} 
                  />
                </div>

                {/* Field 4: Guests & Rooms */}
                <div className="search-field">
                  <label htmlFor="guests-select">
                    <Users size={16} color="var(--primary)" />
                    Số khách & Phòng
                  </label>
                  <select 
                    id="guests-select"
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1 người lớn, 1 phòng">1 khách, 1 phòng</option>
                    <option value="2 người lớn, 1 phòng">2 khách, 1 phòng</option>
                    <option value="Gia đình (2 lớn + 2 trẻ em)">Gia đình (2 lớn, 2 bé)</option>
                    <option value="Nhóm đông (> 4 người)">Nhóm đông người</option>
                  </select>
                </div>

                {/* Submit button */}
                <div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <Search size={20} />
                    <span>Tìm phòng</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrap">
                <CreditCard size={30} />
              </div>
              <h3 className="feature-title">Giá Luôn Tốt Nhất</h3>
              <p className="feature-desc">Cam kết mức giá ưu đãi và không phụ phí ẩn khi thanh toán.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="feature-title">Xác Nhận Tức Thì</h3>
              <p className="feature-desc">Nhận voucher và mã đặt phòng qua email/SMS ngay lập tức.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <ShieldCheck size={30} />
              </div>
              <h3 className="feature-title">Miễn Phí Hủy Phòng</h3>
              <p className="feature-desc">Linh hoạt thay đổi lịch trình hoặc hủy phòng hoàn tiền nhanh chóng.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrap">
                <Headphones size={30} />
              </div>
              <h3 className="feature-title">Hỗ Trợ 24/7</h3>
              <p className="feature-desc">Đội ngũ chăm sóc khách hàng nhiệt huyết luôn sẵn sàng tư vấn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Khách sạn & Resort đề xuất</span>
            <h2 className="section-title">Điểm Nghỉ Dưỡng Được Yêu Thích Nhất</h2>
            <p className="section-subtitle">
              Tuyển chọn các khách sạn, biệt thự nghỉ dưỡng có đánh giá cao nhất từ cộng đồng du lịch
            </p>
          </div>

          <div className="hotel-grid">
            {HOTELS_DATA.slice(0, 6).map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image-wrap">
                  <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                  <span className="hotel-tag-badge">{hotel.tag}</span>
                  <div className="hotel-rating-badge">
                    <Star size={15} fill="#f59e0b" color="#f59e0b" />
                    <span>{hotel.rating}</span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({hotel.reviewsCount})</span>
                  </div>
                </div>

                <div className="hotel-card-body">
                  <div className="hotel-city">
                    <MapPin size={14} />
                    <span>{hotel.city}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: '#f59e0b', fontSize: '0.8rem' }}>{'★'.repeat(hotel.stars)}</span>
                  </div>

                  <h3 className="hotel-name">
                    <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
                  </h3>

                  <p className="hotel-desc">{hotel.description}</p>

                  <div className="hotel-amenities-pills">
                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="amenity-pill">{amenity}</span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="amenity-pill">+{hotel.amenities.length - 3}</span>
                    )}
                  </div>

                  <div className="hotel-card-footer">
                    <div className="hotel-price-block">
                      <div className="label">Giá mỗi đêm từ</div>
                      <div>
                        <span className="price">{formatPrice(hotel.price)}</span>
                        {hotel.originalPrice && (
                          <span className="original">{formatPrice(hotel.originalPrice)}</span>
                        )}
                      </div>
                    </div>

                    <Link to={`/hotels/${hotel.id}`} className="btn btn-primary btn-sm">
                      Chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/hotels" className="btn btn-secondary btn-lg">
              <span>Xem tất cả {HOTELS_DATA.length}+ khách sạn</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" style={{ padding: '40px 0 80px', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Khám phá Việt Nam</span>
            <h2 className="section-title">Điểm Đến Hàng Đầu Cho Kỳ Nghỉ Của Bạn</h2>
            <p className="section-subtitle">
              Tìm cảm hứng cho hành trình tiếp theo từ biển đảo ngập nắng đến cao nguyên mộng mơ
            </p>
          </div>

          <div className="destinations-grid">
            {DESTINATIONS.map((dest, idx) => (
              <div 
                key={idx} 
                className="destination-card"
                onClick={() => navigate(`/hotels?city=${encodeURIComponent(dest.name)}`)}
              >
                <img src={dest.image} alt={dest.name} />
                <div className="destination-overlay">
                  <h3 className="destination-title">{dest.name}</h3>
                  <p className="destination-count">{dest.hotelsCount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Khách hàng chia sẻ</span>
            <h2 className="section-title">Trải Nghiệm Cùng LumiStay</h2>
            <p className="section-subtitle">Đã có hơn 50.000+ du khách đặt phòng và đánh giá dịch vụ của chúng tôi</p>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="review-card">
                <div className="review-stars">
                  {'★'.repeat(rev.rating)}
                </div>
                <p className="review-comment">"{rev.comment}"</p>
                <div className="review-author-wrap">
                  <img src={rev.avatar} alt={rev.author} className="review-avatar" />
                  <div>
                    <h4 className="review-author-name">{rev.author}</h4>
                    <p className="review-author-role">{rev.role} • {rev.hotel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional CTA Banner */}
      <div className="container">
        <div className="cta-banner">
          <div className="cta-text">
            <h3>Đăng ký thành viên - Nhận ngay voucher giảm 15%</h3>
            <p>Nhận các ưu đãi đặc quyền cho kỳ nghỉ tiếp theo cùng tích lũy điểm thưởng thành viên.</p>
          </div>
          <div>
            <Link to="/about-us" className="btn btn-accent btn-lg" style={{ whiteSpace: 'nowrap' }}>
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
