# LumiStay - Hệ Thống Đặt Phòng Khách Sạn & Resort Trực Tuyến

> **Bài tập thực hành môn Phát triển Ứng dụng Web**  
> Đề tài: Website Booking Khách Sạn & Resort (LumiStay)

---

## 🌟 1. Giới thiệu Dự án

**LumiStay** là ứng dụng web cho phép người dùng tìm kiếm, xem chi tiết và đặt phòng tại các khách sạn, resort nghỉ dưỡng cao cấp khắp các tỉnh thành Việt Nam (Đà Nẵng, Phú Quốc, Nha Trang, Đà Lạt, Sa Pa, Hà Nội,...).

Dự án được xây dựng chuẩn theo các yêu cầu thực hành:
1. **Framework**: ReactJS kết hợp Vite cho hiệu năng cao và tải trang tức thì.
2. **HTML / JSX**: Giao diện trực quan, ngữ nghĩa, tối ưu SEO.
3. **CSS**: Thiết kế bằng **Vanilla CSS** hiện đại (`index.css`), phong cách Glassmorphism, Responsive hoàn toàn trên Mobile, Tablet và Desktop.
4. **React Router**: Tích hợp `react-router-dom` định tuyến trang thông minh, chuyển trang mượt mà không reload, hỗ trợ truy cập trực tiếp qua URI.

---

## 🧭 2. Cấu trúc các trang & Routes

| Tuyến đường (URI) | Tên trang | Chức năng chính |
| :--- | :--- | :--- |
| `http://localhost:3000/` | **Trang chủ (Home)** | Hero banner tìm kiếm phòng theo điểm đến/ngày/khách, top khách sạn hot, điểm đến du lịch, đánh giá thực tế. |
| `http://localhost:3000/about-us` | **Giới thiệu (About Us)** | Câu chuyện thương hiệu LumiStay, sứ mệnh, số liệu thống kê (50k+ khách), đội ngũ sáng lập. *(Khớp ví dụ đề bài)* |
| `http://localhost:3000/hotels` | **Khách sạn (Hotels)** | Bộ lọc linh hoạt theo Thành phố, Xếp hạng sao, Tìm kiếm từ khóa, Sắp xếp theo giá tăng/giảm/đánh giá. |
| `http://localhost:3000/hotels/:id` | **Chi tiết (Hotel Detail)** | Bộ sưu tập ảnh phòng, tiện nghi 5 sao, lựa chọn hạng phòng và form đặt phòng trực tuyến tính tổng tiền tự động. |
| `http://localhost:3000/contact` | **Liên hệ (Contact)** | Form gửi yêu cầu tư vấn đặt phòng/hủy phòng, thông tin hotline 24/7 và văn phòng. |
| `*` | **404 Not Found** | Trang báo lỗi điều hướng khi nhập sai đường dẫn. |

---

## 📂 3. Cấu trúc Thư mục Dự án

```text
hotel-booking/
├── public/                 # Static assets
├── src/
│   ├── components/         # Các thành phần tái sử dụng
│   │   ├── Navbar.jsx      # Thanh điều hướng với NavLink
│   │   └── Footer.jsx      # Chân trang & liên kết hỗ trợ
│   ├── data/
│   │   └── hotels.js       # Dữ liệu mẫu khách sạn, điểm đến, đánh giá
│   ├── pages/              # Các trang chính của ứng dụng
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx   # Trang /about-us theo đề bài
│   │   ├── HotelsPage.jsx
│   │   ├── HotelDetailPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx             # Cấu hình Route của React Router & ScrollToTop
│   ├── index.css           # Vanilla CSS toàn diện & biến màu sắc
│   └── main.jsx            # Entry point bọc BrowserRouter
├── index.html              # HTML template với Google Font Plus Jakarta Sans
├── package.json            # Scripts & dependencies
└── vite.config.js          # Cấu hình server port 3000
```

---

## 🚀 4. Hướng dẫn Cài đặt & Chạy Dự án

### Bước 1: Mở thư mục dự án trong Terminal
```bash
cd "hotel-booking"
```

### Bước 2: Cài đặt các thư viện phụ thuộc (nếu tải từ github về)
```bash
npm install
```

### Bước 3: Khởi chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```

Sau khi chạy lệnh, truy cập trình duyệt tại địa chỉ:
👉 **`http://localhost:3000`**

---

## 🐙 5. Hướng dẫn Đưa Dự án lên GitHub (Theo yêu cầu mục 4)

1. Đăng ký/Đăng nhập tài khoản tại: https://github.com/
2. Nhấn nút **New repository** (hoặc dấu `+` ở góc trên bên phải):
   - Đặt tên Repository: `hotel-booking-reactjs` (hoặc tên tùy chọn)
   - Chọn chế độ: **Public**
   - Không cần tích "Add a README file" (vì dự án đã có sẵn file README.md này).
   - Nhấn **Create repository**.
3. Mở terminal tại thư mục `hotel-booking` và chạy lần lượt các lệnh sau:

```bash
git init
git add .
git commit -m "Khoi tao du an Booking Khach San bang ReactJS, Vite va React Router"
git branch -M main
git remote add origin https://github.com/<tai-khoan-github-cua-ban>/<ten-repository>.git
git push -u origin main
```
4. Copy link repository trên GitHub (ví dụ: `https://github.com/your-username/hotel-booking-reactjs`) và nộp vào phần trả lời của bài tập.
