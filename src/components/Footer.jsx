import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div>
            <div className="footer-logo">
              <div className="brand-icon" style={{ width: 34, height: 34 }}>
                <Hotel size={18} />
              </div>
              <span>LumiStay</span>
            </div>
            <p className="footer-desc">
              LumiStay là nền tảng đặt phòng khách sạn và resort cao cấp hàng đầu Việt Nam. Chúng tôi cam kết mang lại kỳ nghỉ trọn vẹn với giá tốt nhất và dịch vụ chăm sóc tận tâm.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Giấy phép KD: 010892348 do Sở KH&ĐT cấp</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Khám phá</h4>
            <ul className="footer-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/hotels">Tất cả khách sạn</Link></li>
              <li><Link to="/about-us">Về chúng tôi</Link></li>
              <li><Link to="/contact">Liên hệ hỗ trợ</Link></li>
              <li><a href="#destinations">Điểm đến nổi bật</a></li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div>
            <h4 className="footer-col-title">Điểm đến yêu thích</h4>
            <ul className="footer-links">
              <li><Link to="/hotels?city=Đà Nẵng">Khách sạn Đà Nẵng</Link></li>
              <li><Link to="/hotels?city=Phú Quốc">Resort Phú Quốc</Link></li>
              <li><Link to="/hotels?city=Đà Lạt">Villa Đà Lạt</Link></li>
              <li><Link to="/hotels?city=Nha Trang">Khách sạn Nha Trang</Link></li>
              <li><Link to="/hotels?city=Sa Pa">Khách sạn Sa Pa</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="footer-col-title">Thông tin liên hệ</h4>
            <ul className="footer-links" style={{ gap: 14 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 3 }} />
                <span>Tầng 8, Tòa nhà Keangnam Landmark 72, Nam Từ Liêm, Hà Nội</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>Hotline: 1900 6868 (24/7)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>booking@lumistay.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LumiStay Booking System. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            Thiết kế với <Heart size={14} color="#ef4444" fill="#ef4444" /> cho bài tập môn Phát triển Ứng dụng Web
          </p>
        </div>
      </div>
    </footer>
  );
}
