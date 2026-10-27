import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Award, ShieldCheck, Heart, 
  Globe, Clock, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { num: "50,000+", label: "Du khách đã phục vụ" },
    { num: "1,200+", label: "Khách sạn & Resort đối tác" },
    { num: "63", label: "Tỉnh thành toàn quốc" },
    { num: "99.2%", label: "Khách hàng hài lòng" }
  ];

  const team = [
    {
      name: "Nguyễn Văn An",
      role: "CEO & Đồng sáng lập",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      desc: "Hơn 12 năm kinh nghiệm trong ngành du lịch khách sạn và chuyển đổi số."
    },
    {
      name: "Trần Thị Minh Châu",
      role: "Giám đốc Vận hành (COO)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      desc: "Chuyên gia quản lý chuỗi cung ứng dịch vụ lưu trú và chăm sóc khách hàng VIP."
    },
    {
      name: "Lê Hoàng Đức",
      role: "Giám đốc Công nghệ (CTO)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      desc: "Kiến trúc sư hệ thống nền tảng đặt phòng trực tuyến tốc độ cao và bảo mật."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <span className="section-tag">Về LumiStay</span>
          <h1 className="hero-title" style={{ fontSize: '2.8rem' }}>
            Kết Nối Triệu Du Khách Đến Những <span className="highlight">Kỳ Nghỉ Đáng Nhớ</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: 750, margin: '16px auto 0' }}>
            Thành lập với sứ mệnh định hình lại trải nghiệm đặt phòng trực tuyến tại Việt Nam — tiện lợi hơn, minh bạch hơn và luôn lấy sự hài lòng của khách hàng làm trọng tâm.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Câu chuyện thương hiệu</span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '18px' }}>
                Hành Trình Kiến Tạo Giá Trị Cho Ngành Du Lịch
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.7 }}>
                LumiStay ra đời từ mong muốn giải quyết những khó khăn thực tế mà du khách Việt Nam thường gặp phải: giá phòng thiếu minh bạch, hình ảnh không đúng thực tế và quy trình đổi trả phức tạp.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
                Chúng tôi thẩm định trực tiếp từng khu nghỉ dưỡng và khách sạn đối tác, áp dụng công nghệ đặt phòng tức thì và bảo đảm chính sách hoàn tiền rõ ràng nhất trên thị trường.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span style={{ fontWeight: 600 }}>100% hình ảnh và tiện nghi được kiểm duyệt thực tế</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span style={{ fontWeight: 600 }}>Chính sách giá tốt nhất — hoàn tiền nếu tìm thấy nơi rẻ hơn</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span style={{ fontWeight: 600 }}>Tư vấn viên hỗ trợ 24/7 trước, trong và sau chuyến đi</span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" 
                alt="LumiStay Luxury Experience" 
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: -20,
                left: -20,
                background: '#fff',
                padding: '20px 28px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: 16
              }}>
                <div style={{ background: 'var(--primary-light)', padding: 12, borderRadius: 50, color: 'var(--primary)' }}>
                  <Award size={28} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>Top 1 Nền Tảng</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Bình chọn du lịch 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="about-stats">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div style={{ marginTop: '80px' }}>
            <div className="section-header">
              <span className="section-tag">Giá trị cốt lõi</span>
              <h2 className="section-title">Điều Chúng Tôi Luôn Giữ Gìn</h2>
            </div>

            <div className="features-grid">
              <div className="feature-item" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <div className="feature-icon-wrap"><Heart size={28} /></div>
                <h3 className="feature-title">Tận Tâm Phục Vụ</h3>
                <p className="feature-desc">Mọi khách hàng đều là người thân đồng hành trong mỗi chuyến đi.</p>
              </div>

              <div className="feature-item" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <div className="feature-icon-wrap"><ShieldCheck size={28} /></div>
                <h3 className="feature-title">Minh Bạch Tuyệt Đối</h3>
                <p className="feature-desc">Không chi phí ẩn, chính sách đặt và hủy phòng công khai rõ ràng.</p>
              </div>

              <div className="feature-item" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <div className="feature-icon-wrap"><Sparkles size={28} /></div>
                <h3 className="feature-title">Chất Lượng Vượt Trội</h3>
                <p className="feature-desc">Chỉ liên kết với đối tác khách sạn uy tín đạt tiêu chuẩn khắt khe.</p>
              </div>

              <div className="feature-item" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <div className="feature-icon-wrap"><Clock size={28} /></div>
                <h3 className="feature-title">Tốc Độ & Tiện Lợi</h3>
                <p className="feature-desc">Thao tác đặt phòng chỉ trong 60 giây trên máy tính và điện thoại.</p>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div style={{ marginTop: '80px' }}>
            <div className="section-header">
              <span className="section-tag">Đội ngũ lãnh đạo</span>
              <h2 className="section-title">Những Người Đứng Sau LumiStay</h2>
              <p className="section-subtitle">Tập thể chuyên gia giàu đam mê du lịch và công nghệ</p>
            </div>

            <div className="team-grid">
              {team.map((member, idx) => (
                <div key={idx} className="team-card">
                  <img src={member.image} alt={member.name} />
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 10 }}>{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA back to booking */}
          <div style={{ textAlign: 'center', marginTop: '70px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 16 }}>Sẵn sàng trải nghiệm dịch vụ của LumiStay?</h3>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
              <Link to="/hotels" className="btn btn-primary btn-lg">Xem danh sách khách sạn</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Liên hệ tư vấn</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
