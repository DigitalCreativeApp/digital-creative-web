# Spec: Professional Web Redesign

## Assumptions

1. Phạm vi chính là website marketing trong `digital-creative-web`, không phải admin hoặc ứng dụng Expo.
2. Đây là redesign theo hướng overhaul về hình ảnh, nhưng giữ nguyên logo, route, nội dung pháp lý và luồng liên hệ.
3. Dark theme hiện tại tiếp tục là theme duy nhất để đồng bộ với sản phẩm.
4. Ảnh sử dụng từ Pexels, được chọn qua tìm kiếm web và tải qua CDN của Pexels.
5. Có thể thêm `gsap` và `@gsap/react` để triển khai chuyển động cuộn có cleanup và reduced-motion fallback.

## Objective

Thiết kế lại website Digital Creative thành một landing page chuyên nghiệp, hiện đại và có cá tính editorial. Trang phải truyền đạt rõ ba giá trị: tìm đúng Creative, cộng tác có cấu trúc và thanh toán minh bạch. Toàn bộ route phải có responsive UI chủ động cho nhiều tỷ lệ màn hình, không chỉ co giãn theo hai breakpoint chung.

Đối tượng chính:

- Creative tự do và studio cần cơ hội phù hợp.
- Thương hiệu và đội marketing cần đối tác sáng tạo đáng tin cậy.

## Design Read

Reading this as: a marketplace landing page for Vietnamese creatives and clients, with a premium editorial language, leaning toward asymmetric native CSS and restrained GSAP scroll storytelling.

- `DESIGN_VARIANCE: 8`
- `MOTION_INTENSITY: 7`
- `VISUAL_DENSITY: 4`
- Theme: dark, khóa xuyên suốt trang.
- Accent: tím thương hiệu hiện tại, dùng như màu phẳng duy nhất.
- Shape rule: ảnh và panel dùng radius 16px; button dùng pill; input dùng radius 12px.
- Typography: giữ system sans để không thêm font từ bên thứ ba trong lượt redesign này.

## Design Plan

```text
python rng seed = len(user_prompt) % 97
hero = "Artistic Asymmetry"; font = "system sans"
components = ["Editorial Media Grid", "Horizontal Accordion", "Sticky Process"]; motion = ["Scroll Pinning", "Image Scale and Fade"]
```

### AIDA

- Navigation: header một dòng, CTA rõ ràng.
- Attention: hero bất đối xứng với ảnh thật, headline tối đa hai dòng và CTA nằm trong viewport đầu.
- Interest: media grid nêu ba giá trị cốt lõi, không có ô trống.
- Desire: quy trình sticky/pinned và ảnh chuyển tỷ lệ nhẹ theo scroll.
- Action: CTA phẳng tương phản cao và footer gọn.

### Layout Math

- Hero H1 dùng vùng rộng tối thiểu 7/12 cột, `max-width: 12ch`, cỡ chữ responsive để giữ tối đa hai dòng desktop.
- Feature grid có đúng ba nội dung trong lưới 12 cột: ô 7 cột + hai ô 5 cột xếp dọc, không có cell rỗng.
- Không dùng badge nổi, section numbering, icon ký tự, fake app screenshot hoặc status dot trang trí.

## Source Assets

- Hero/team collaboration: `https://www.pexels.com/photo/team-collaboration-in-a-creative-studio-setting-34520939/`
- Creative planning/moodboard: `https://www.pexels.com/photo/creative-team-planning-project-in-modern-office-36765627/`
- Designers at work: `https://www.pexels.com/photo/two-male-interior-designers-at-work-6322358/`

Ảnh dùng URL CDN `images.pexels.com`, khai báo kích thước, lazy-load ngoài hero và có alt text tiếng Việt. Không dùng icon pack, emoji, ảnh mockup hoặc tài nguyên hình ảnh cũ ngoài logo thương hiệu.

## Tech Stack

- React 19
- React Router 7
- Vite 7
- CSS thuần với semantic tokens
- GSAP + `@gsap/react` cho animation scroll có chủ đích

## Commands

```bash
npm install gsap @gsap/react
npm run dev
npm run lint
npm test
npm run build
```

## Project Structure

```text
src/pages/HomePage.jsx              Landing page mới
src/components/SiteLayout.jsx       Header, navigation, footer
src/components/HomeMotion.jsx       Client motion layer và cleanup
src/styles.css                      Design tokens và responsive layout
src/App.test.jsx                    Smoke/route assertions
docs/plans/                          Kế hoạch triển khai sau khi duyệt spec
```

## Code Style

```jsx
<section className="story" aria-labelledby="story-title">
  <div className="container story__layout">
    <h2 id="story-title">Một quy trình rõ ràng cho công việc sáng tạo.</h2>
  </div>
</section>
```

- Semantic HTML, một `h1`, heading không bỏ cấp.
- BEM-like class names cho block mới; không inline style nếu không cần cho dữ liệu động.
- Animation chỉ tác động `transform` và `opacity`.
- Mọi GSAP context phải cleanup; hỗ trợ `prefers-reduced-motion`.
- Không dùng em dash trong visible copy.

## Testing Strategy

- Unit/smoke test: route chính render, CTA và landmark tồn tại, không còn fake screenshot/icon ký tự.
- Static checks: lint, test, production build.
- Runtime: kiểm tra 320x568, 360x800, 390x844, 412x915, 568x320, 768x1024, 820x1180, 1024x768, 1280x720, 1366x768, 1440x900, 1920x1080 và 2560x1440; console sạch; focus order đúng; reduced motion hoạt động.
- Visual: chụp before/after và kiểm tra hero nằm gọn trong viewport desktop.
- Layout: không có horizontal overflow; nội dung không bị che ở mobile landscape; dòng chữ dài và mục lục pháp lý không phá vỡ cột.

## Boundaries

### Always

- Giữ route và anchor hiện tại khi có thể.
- Giữ logo và nội dung pháp lý.
- Không dùng gradient dưới bất kỳ dạng CSS nào.
- Dùng ảnh thật đã tìm trên web, với nguồn và alt text rõ ràng.
- Kiểm tra mobile, keyboard, reduced motion, lint, test và build.

### Ask first

- Thay đổi logo hoặc tên thương hiệu.
- Thay đổi route, nội dung pháp lý hoặc field của form liên hệ.
- Thêm tracking, cookie hoặc API mới.

### Never

- Dùng icon Unicode, emoji, fake dashboard, hand-drawn SVG trang trí hoặc stock card grid ba cột bằng nhau.
- Dùng gradient, glow, scroll listener thủ công hoặc animation gây reflow.
- Ghi đè thay đổi không liên quan của người dùng.

## Success Criteria

- Hero chuyên nghiệp, bất đối xứng, có ảnh thật và CTA trong viewport đầu.
- Không còn gradient, icon ký tự, fake product preview, section numbering hoặc decorative status dot.
- Ít nhất ba ảnh web thật được dùng có chủ đích.
- Animation GSAP mượt, có lý do rõ ràng và tắt đúng khi người dùng giảm chuyển động.
- Header một dòng trên desktop; mobile menu dùng được bằng bàn phím.
- Layout ổn định tại 320px, 768px, 1024px và 1440px.
- Layout thích nghi đúng với mobile portrait, mobile landscape, tablet portrait/landscape, laptop thấp, desktop rộng và ultrawide.
- Không có horizontal overflow tại các viewport trong ma trận kiểm thử.
- Console không có lỗi; lint, test và build đều pass.
- Route `/terms`, `/privacy-policy`, `/contact` vẫn hoạt động và giữ nội dung.

## Open Questions

- Chờ xác nhận spec trước khi lập kế hoạch và triển khai theo workflow của repository.
