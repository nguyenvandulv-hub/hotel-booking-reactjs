import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 80,
        height: 80,
        background: 'var(--primary-light)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary)',
        marginBottom: 24
      }}>
        <Compass size={40} />
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: 8 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>Trang này không tồn tại</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 460, margin: '0 auto 28px' }}>
        Đường dẫn bạn vừa truy cập có thể đã bị thay đổi hoặc không khả dụng. Hãy quay lại trang chủ để tiếp tục tìm kiếm khách sạn.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        <Home size={18} />
        <span>Về trang chủ LumiStay</span>
      </Link>
    </div>
  );
}
