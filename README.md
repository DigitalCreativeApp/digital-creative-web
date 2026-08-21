# Digital Creative Web

Website React giới thiệu **Digital Creative** — nền tảng kết nối Creative với khách hàng, hỗ trợ tìm dịch vụ, cộng tác theo dự án và thanh toán an toàn.

## Đặc tả

- **Mục tiêu:** giới thiệu giá trị ứng dụng và cung cấp các trang thông tin cần thiết cho người dùng.
- **Đối tượng:** Creative tự do, studio, khách hàng cá nhân và doanh nghiệp cần dịch vụ sáng tạo.
- **Công nghệ:** React 19, React Router 7 và Vite 7.
- **Route:** `/`, `/terms`, `/privacy-policy`, `/contact` và trang 404.
- **Giao diện:** tiếng Việt, dark theme đồng nhất với ứng dụng, responsive 320–1440px, hỗ trợ bàn phím và `prefers-reduced-motion`.
- **Nguồn pháp lý:** nội dung `/terms` và `/privacy-policy` bám sát hai tài liệu DOCX phiên bản 1.0 ngày 21/08/2026; không tự diễn giải thêm nghĩa vụ pháp lý.
- **Design system:** dùng đúng palette và token cốt lõi của app (`#080A0F`, `#161920`, `#22242B`, `#9C38EE`, `#60D2AC`) cùng bán kính và trạng thái tương tác tương ứng.
- **Biểu mẫu liên hệ:** validation phía trình duyệt; hiện tạo email qua `mailto:` vì chưa có API nhận form.

## Tiêu chí hoàn thành

- Điều hướng client-side hoạt động và tải trực tiếp các route khi hosting có SPA fallback.
- Trang chủ mô tả rõ đối tượng, tính năng, quy trình và cơ chế tạo niềm tin của Digital Creative.
- Mỗi route có một `h1`, title/description riêng, skip link và trạng thái focus rõ ràng.
- Trang Điều khoản có đủ 21 mục; trang Chính sách quyền riêng tư có đủ 22 mục và các tiểu mục mạng xã hội theo tài liệu nguồn.
- Không có lỗi lint, test, build hoặc lỗi console khi kiểm tra runtime.

## Chạy dự án

```bash
npm install
npm run dev
```

Kiểm tra trước khi phát hành:

```bash
npm run lint
npm test
npm run build
```

## Cấu trúc

```text
digital-creative-web/
├── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── assets/images/
├── package.json
├── vite.config.js
└── README.md
```

## Ghi chú phạm vi

- Không có tracking, cookie hoặc yêu cầu mạng bên thứ ba.
- Nội dung điều khoản/chính sách là mẫu sản phẩm, cần được đơn vị vận hành rà soát pháp lý trước khi phát hành chính thức.
