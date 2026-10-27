import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HOTELS_DATA } from '../data/hotels';
import { 
  MapPin, Star, ShieldCheck, Check, Calendar, Users, 
  ArrowLeft, Bed, Sparkles, CheckCircle, Clock 
} from 'lucide-react';

export default function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = HOTELS_DATA.find((h) => h.id === parseInt(id));

  const [selectedRoom, setSelectedRoom] = useState(hotel ? hotel.roomTypes[0] : null);
  const [checkIn, setCheckIn] = useState('2026-11-15');
  const [checkOut, setCheckOut] = useState('2026-11-17');
  const [nights, setNights] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!hotel) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Không tìm thấy khách sạn</h2>
        <p style={{ margin: '16px 0', color: 'var(--text-secondary)' }}>Khách sạn này có thể không tồn tại hoặc đã ngừng phục vụ.</p>
        <Link to="/hotels" className="btn btn-primary">Quay lại danh sách khách sạn</Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const currentPrice = selectedRoom ? selectedRoom.price : hotel.price;
  const totalPrice = currentPrice * nights;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert('Vui lòng điền họ tên và số điện thoại liên hệ!');
      return;
    }
    setBookingSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '30px 0 80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 20 }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Trang chủ</Link>
          <span>/</span>
          <Link to="/hotels" style={{ color: 'var(--text-secondary)' }}>Khách sạn</Link>
          <span>/</span>
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{hotel.name}</span>
        </div>

        {/* Success Alert */}
        {bookingSuccess && (
          <div className="toast-success" style={{ padding: 24, marginBottom: 30 }}>
            <CheckCircle size={32} color="#059669" />
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 4, color: '#065f46' }}>Chúc mừng! Bạn đã đặt phòng thành công</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Mã xác nhận <strong>LMS-{Math.floor(100000 + Math.random() * 900000)}</strong> đã được gửi tới <strong>{guestPhone}</strong>. Nhân viên chăm sóc của LumiStay sẽ liên hệ bạn trong vòng 10 phút để hoàn tất thủ tục.
              </p>
            </div>
          </div>
        )}

        {/* Hotel Header Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ color: '#f59e0b', fontSize: '1rem' }}>{'★'.repeat(hotel.stars)}</span>
              <span className="amenity-pill" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                {hotel.tag}
              </span>
            </div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--secondary)' }}>{hotel.name}</h1>
            <p style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', marginTop: 6, fontSize: '0.95rem' }}>
              <MapPin size={18} color="var(--primary)" />
              <span>{hotel.location}</span>
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', marginBottom: 6 }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, color: 'var(--secondary)' }}>Tuyệt vời</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{hotel.reviewsCount} đánh giá xác thực</div>
              </div>
              <div style={{ background: 'var(--primary)', color: '#fff', padding: '8px 12px', borderRadius: 'var(--radius-sm)', fontWeight: 800, fontSize: '1.2rem' }}>
                {hotel.rating}
              </div>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Giá từ <strong style={{ fontSize: '1.3rem', color: 'var(--primary)' }}>{formatPrice(hotel.price)}</strong> / đêm</div>
          </div>
        </div>

        {/* Photo Showcase */}
        <div className="detail-gallery">
          <div>
            <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" 
              alt="Phòng ngủ sang trọng" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <img 
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80" 
              alt="Hồ bơi view biển" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="detail-layout">
          {/* Left Column: Description, Amenities & Room Types */}
          <div>
            {/* Description */}
            <div style={{ background: '#fff', padding: 30, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: 30 }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 14 }}>Giới thiệu về khách sạn</h2>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                {hotel.description}
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.98rem', marginTop: 12 }}>
                Tất cả phòng nghỉ tại đây đều được thiết kế rộng rãi, trang bị đầy đủ tiện nghi tiêu chuẩn 5 sao, cùng các dịch vụ spa thư giãn, nhà hàng ẩm thực quốc tế và hồ bơi ngoài trời thơ mộng.
              </p>
            </div>

            {/* Amenities */}
            <div style={{ background: '#fff', padding: 30, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: 30 }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Tiện nghi nổi bật nhất</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {hotel.amenities.map((amenity, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <Check size={14} />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Options */}
            <div style={{ background: '#fff', padding: 30, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>Chọn hạng phòng</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: '0.9rem' }}>
                Giá đã bao gồm bữa sáng tự chọn tiêu chuẩn và thuế phí dịch vụ.
              </p>

              <div>
                {hotel.roomTypes.map((room, idx) => {
                  const isSelected = selectedRoom?.name === room.name;
                  return (
                    <div 
                      key={idx} 
                      className="room-type-card"
                      style={{
                        borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                        background: isSelected ? 'var(--primary-light)' : '#fff',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)' }}>{room.name}</h4>
                        <div style={{ display: 'flex', gap: 16, marginTop: 6, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <span>📐 Diện tích: {room.size}</span>
                          <span>🛏️ {room.bed}</span>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                          {formatPrice(room.price)}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>/ 1 đêm</div>
                        <button 
                          className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-secondary'}`} 
                          style={{ marginTop: 8 }}
                        >
                          {isSelected ? 'Đang chọn' : 'Chọn phòng'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Box Sticky */}
          <div>
            <div className="booking-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 18 }}>Thông tin đặt phòng</h3>

              <div style={{ background: 'var(--bg-subtle)', padding: 14, borderRadius: 'var(--radius-sm)', marginBottom: 20 }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Hạng phòng đang chọn:</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--secondary)' }}>
                  {selectedRoom ? selectedRoom.name : 'Phòng tiêu chuẩn'}
                </div>
              </div>

              <form onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label htmlFor="detail-checkin">Ngày nhận phòng</label>
                  <input 
                    id="detail-checkin"
                    type="date" 
                    className="form-input"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="detail-checkout">Ngày trả phòng</label>
                  <input 
                    id="detail-checkout"
                    type="date" 
                    className="form-input"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="detail-nights">Số đêm nghỉ</label>
                  <select 
                    id="detail-nights"
                    className="form-select"
                    value={nights}
                    onChange={(e) => setNights(parseInt(e.target.value))}
                  >
                    <option value={1}>1 đêm</option>
                    <option value={2}>2 đêm</option>
                    <option value={3}>3 đêm</option>
                    <option value={5}>5 đêm</option>
                    <option value={7}>7 đêm (Kỳ nghỉ dài)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="detail-name">Họ và tên quý khách</label>
                  <input 
                    id="detail-name"
                    type="text" 
                    className="form-input" 
                    placeholder="Nguyễn Văn A" 
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="detail-phone">Số điện thoại</label>
                  <input 
                    id="detail-phone"
                    type="tel" 
                    className="form-input" 
                    placeholder="0912 345 678" 
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="detail-email">Email nhận xác nhận</label>
                  <input 
                    id="detail-email"
                    type="email" 
                    className="form-input" 
                    placeholder="email@example.com" 
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                  />
                </div>

                {/* Price Breakdown */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginTop: 16, marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: 8, color: 'var(--text-secondary)' }}>
                    <span>{formatPrice(currentPrice)} × {nights} đêm</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: 12, color: 'var(--text-secondary)' }}>
                    <span>Phí dịch vụ & Bữa sáng</span>
                    <span style={{ color: 'var(--success)', fontWeight: 600 }}>Miễn phí</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px dashed var(--border)' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Tổng thanh toán:</span>
                    <span style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary)' }}>
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Xác nhận đặt phòng ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
