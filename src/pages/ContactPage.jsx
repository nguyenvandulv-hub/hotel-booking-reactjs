import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Tư vấn đặt phòng',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'Tư vấn đặt phòng', message: '' });
  };

  return (
    <div style={{ padding: '60px 0 90px' }}>
      <div className="container">
        {/* Header Title */}
        <div className="section-header" style={{ marginBottom: 40 }}>
          <span className="section-tag">Hỗ trợ khách hàng</span>
          <h1 className="section-title">Liên Hệ Với Đội Ngũ LumiStay</h1>
          <p className="section-subtitle">
            Chúng tôi luôn lắng nghe và sẵn sàng giải đáp mọi câu hỏi 24/7 của bạn
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left: Info Card */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 16 }}>Thông tin liên hệ</h3>
            <p style={{ opacity: 0.85, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 36 }}>
              Bạn cần giải đáp thắc mắc về đơn đặt phòng hoặc muốn hợp tác khách sạn? Hãy liên hệ qua các kênh dưới đây.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: 12, borderRadius: 'var(--radius-md)', color: '#60a5fa' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Tổng đài hỗ trợ (24/7)</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginTop: 2 }}>1900 6868 - (024) 7300 8888</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: 12, borderRadius: 'var(--radius-md)', color: '#60a5fa' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Email chăm sóc khách hàng</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: 2 }}>hotro@lumistay.vn</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: 12, borderRadius: 'var(--radius-md)', color: '#60a5fa' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Văn phòng chính</div>
                  <div style={{ fontSize: '0.95rem', color: '#e2e8f0', marginTop: 2, lineHeight: 1.5 }}>
                    Tầng 8, Tòa nhà Keangnam Landmark 72, Đường Phạm Hùng, Nam Từ Liêm, Hà Nội
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: 12, borderRadius: 'var(--radius-md)', color: '#60a5fa' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Thời gian tiếp đón văn phòng</div>
                  <div style={{ fontSize: '0.95rem', color: '#e2e8f0', marginTop: 2 }}>
                    Thứ Hai - Thứ Bảy: 8:00 - 18:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>Gửi lời nhắn tới chúng tôi</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 24 }}>
              Điền các thông tin bên dưới và nhân viên phụ trách sẽ phản hồi qua email/điện thoại trong ít phút.
            </p>

            {submitted && (
              <div className="toast-success">
                <CheckCircle2 size={24} />
                <div>
                  <div style={{ fontWeight: 700 }}>Gửi tin nhắn thành công!</div>
                  <div style={{ fontSize: '0.85rem' }}>Cảm ơn bạn đã liên hệ. Đội ngũ LumiStay sẽ phản hồi bạn trong thời gian sớm nhất.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label htmlFor="contact-name">Họ và tên *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">Số điện thoại *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    className="form-input"
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Địa chỉ Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Vấn đề cần hỗ trợ</label>
                <select
                  id="contact-subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="Tư vấn đặt phòng">Tư vấn đặt phòng khách sạn</option>
                  <option value="Hủy hoặc đổi lịch trình">Hủy hoặc thay đổi ngày nhận phòng</option>
                  <option value="Hợp tác khách sạn / Resort">Liên hệ hợp tác đối tác lưu trú</option>
                  <option value="Góp ý dịch vụ">Đóng góp ý kiến & phản ánh dịch vụ</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Nội dung chi tiết *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="form-textarea"
                  placeholder="Hãy mô tả chi tiết yêu cầu hoặc câu hỏi của bạn..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send size={18} />
                <span>Gửi yêu cầu hỗ trợ</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
