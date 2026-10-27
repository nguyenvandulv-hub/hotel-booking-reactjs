import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { HOTELS_DATA } from '../data/hotels';
import { Search, MapPin, Star, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function HotelsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityParam = searchParams.get('city') || '';

  const [selectedCity, setSelectedCity] = useState(cityParam);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedStars, setSelectedStars] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    if (cityParam) {
      setSelectedCity(cityParam);
    }
  }, [cityParam]);

  const handleCityFilter = (city) => {
    setSelectedCity(city);
    if (city) {
      setSearchParams({ city });
    } else {
      setSearchParams({});
    }
  };

  const filteredHotels = HOTELS_DATA.filter((hotel) => {
    const matchesCity = selectedCity === '' || hotel.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesKeyword = searchKeyword === '' || 
      hotel.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesStars = selectedStars === 'all' || hotel.stars.toString() === selectedStars;

    return matchesCity && matchesKeyword && matchesStars;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // popular
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const cities = ['Tất cả', 'Đà Nẵng', 'Phú Quốc', 'Nha Trang', 'Đà Lạt', 'Sa Pa', 'Hà Nội'];

  return (
    <div style={{ padding: '40px 0 80px' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ marginBottom: 32 }}>
          <span className="section-tag">Khám phá lưu trú</span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--secondary)' }}>
            Danh Sách Khách Sạn & Resort
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Tìm kiếm nơi nghỉ ngơi hoàn hảo cho hành trình khám phá cảnh sắc Việt Nam.
          </p>
        </div>

        {/* Filters Toolbar */}
        <div style={{
          background: '#fff',
          padding: '20px 24px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border)',
          marginBottom: 36,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 12, top: 13, color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Tìm tên khách sạn, địa chỉ..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '0.92rem'
                }}
              />
            </div>

            {/* City Dropdown */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => handleCityFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '0.92rem'
                }}
              >
                <option value="">Tất cả thành phố</option>
                {cities.filter(c => c !== 'Tất cả').map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Star Rating Filter */}
            <div>
              <select
                value={selectedStars}
                onChange={(e) => setSelectedStars(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '0.92rem'
                }}
              >
                <option value="all">Tất cả xếp hạng sao</option>
                <option value="5">Khách sạn 5 sao</option>
                <option value="4">Khách sạn 4 sao</option>
              </select>
            </div>

            {/* Sorting */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '0.92rem'
                }}
              >
                <option value="popular">Phổ biến nhất</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>

          {/* Quick city tags */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', alignSelf: 'center' }}>Thành phố nhanh:</span>
            {cities.map((city) => {
              const val = city === 'Tất cả' ? '' : city;
              const isActive = selectedCity === val;
              return (
                <button
                  key={city}
                  onClick={() => handleCityFilter(val)}
                  style={{
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary)' : 'var(--border)',
                    background: isActive ? 'var(--primary-light)' : '#fff',
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            Hiển thị <strong>{filteredHotels.length}</strong> khách sạn phù hợp
          </p>
        </div>

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="hotel-grid">
            {filteredHotels.map((hotel) => (
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
                      Đặt ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>Không tìm thấy khách sạn phù hợp</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
              Hãy thử thay đổi từ khóa hoặc thiết lập bộ lọc thành phố khác.
            </p>
            <button 
              onClick={() => { setSelectedCity(''); setSearchKeyword(''); setSelectedStars('all'); }} 
              className="btn btn-primary"
            >
              Xóa tất cả bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
