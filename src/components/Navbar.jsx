import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Hotel, Phone, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <div className="brand-icon">
            <Hotel size={22} />
          </div>
          <span>Lumi<span style={{ color: 'var(--primary)' }}>Stay</span></span>
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotels" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Khách sạn & Resort
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Về chúng tôi
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <a href="tel:19006868" className="btn btn-secondary btn-sm" style={{ display: 'none', md: 'inline-flex' }}>
            <Phone size={15} color="#2563eb" />
            <span>1900 6868</span>
          </a>
          <Link to="/hotels" className="btn btn-primary btn-sm">
            <Sparkles size={15} />
            <span>Đặt phòng ngay</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
