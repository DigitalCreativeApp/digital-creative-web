# Implementation Plan: Professional Web Redesign

## Overview

Redesign website marketing theo `/taste`, dùng ảnh Pexels đã chọn, layout editorial bất đối xứng, GSAP có chủ đích và responsive cho toàn bộ route. Route, logo, nội dung pháp lý và hành vi form được bảo toàn.

## Architecture Decisions

- Giữ React/Vite hiện tại; không đưa thêm UI framework.
- Thêm GSAP trong một motion component độc lập để tránh trộn animation với markup nội dung.
- Dùng CSS semantic tokens và container/query-friendly sizing; breakpoint theo hành vi layout thay vì tên thiết bị.
- Giữ dark theme và accent tím thương hiệu, nhưng xóa mọi gradient/glow.
- Dùng URL CDN của Pexels với kích thước ảnh cố định để giảm CLS.

## Task List

### Phase 1: Contracts and Foundation

#### Task 1: Add redesign contract tests

**Description:** Viết test thất bại trước cho cấu trúc landing page mới và các dấu hiệu thiết kế cần loại bỏ.

**Acceptance criteria:**

- Test yêu cầu hero mới, media grid, process section và CTA mới.
- Test xác nhận fake product preview và icon ký tự cũ không còn trong trang chủ.
- Test route hiện có tiếp tục render.

**Verification:** `npm test`

**Dependencies:** None

**Files likely touched:**

- `src/App.test.jsx`

**Estimated scope:** S

#### Task 2: Establish motion and global design foundation

**Description:** Thêm GSAP, tạo motion layer có cleanup/reduced-motion và thiết lập design tokens nền.

**Acceptance criteria:**

- Dependency được khai báo trong package manifest và lockfile.
- Motion layer không dùng scroll listener thủ công.
- CSS không chứa gradient.

**Verification:** `npm run lint` và test motion contract.

**Dependencies:** Task 1

**Files likely touched:**

- `package.json`
- `package-lock.json`
- `src/components/HomeMotion.jsx`
- `src/styles.css`

**Estimated scope:** M

### Checkpoint: Foundation

- Test contract ở trạng thái green sau khi foundation hoàn thành.
- Không phát sinh lỗi lint.

### Phase 2: Landing Page and Shared Shell

#### Task 3: Recompose the home page

**Description:** Thay hero giả lập và card grid bằng ảnh thật, editorial media grid, sticky process và CTA phẳng.

**Acceptance criteria:**

- Hero tối đa hai dòng desktop, CTA thấy trong viewport đầu.
- Ba ảnh Pexels được dùng với alt text và kích thước khai báo.
- Không còn icon Unicode, fake dashboard, section numbering hoặc decorative status dot.

**Verification:** `npm test` và `npm run build`

**Dependencies:** Task 2

**Files likely touched:**

- `src/pages/HomePage.jsx`
- `src/styles.css`
- `src/App.test.jsx`

**Estimated scope:** M

#### Task 4: Polish shared navigation, contact, legal and state pages

**Description:** Đồng bộ shell và các route phụ với hệ thống mới, đồng thời bỏ icon ký tự trang trí.

**Acceptance criteria:**

- Header một dòng trên desktop và menu mobile keyboard-accessible.
- Form, mục lục pháp lý, footer và trang 404 responsive, không tràn ngang.
- Nội dung pháp lý, form fields và routes không thay đổi về nghĩa hoặc hành vi.

**Verification:** route tests, keyboard check và build.

**Dependencies:** Task 3

**Files likely touched:**

- `src/components/SiteLayout.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/LegalPage.jsx`
- `src/pages/NotFoundPage.jsx`
- `src/styles.css`

**Estimated scope:** M

### Checkpoint: Core Experience

- Tất cả route render.
- Không có gradient hoặc overflow ngang trong source/runtime.
- Motion giảm đúng theo user preference.

### Phase 3: Responsive Verification and Polish

#### Task 5: Verify viewport matrix and final pre-flight

**Description:** Chạy kiểm thử tự động và kiểm tra trực quan trên ma trận viewport đã duyệt.

**Acceptance criteria:**

- Không horizontal overflow tại 13 viewport mục tiêu.
- Console sạch; focus order và accessible names hợp lệ.
- Layout hero, form, legal navigation và footer ổn định ở portrait, landscape và ultrawide.

**Verification:**

- `npm run lint`
- `npm test`
- `npm run build`
- Browser screenshots và console inspection

**Dependencies:** Task 4

**Files likely touched:**

- Chỉ các file UI liên quan nếu runtime verification phát hiện lỗi.

**Estimated scope:** M

### Checkpoint: Complete

- Toàn bộ success criteria trong spec được đáp ứng.
- `/taste` pre-flight không còn mục thất bại thuộc phạm vi website.
- Diff chỉ chứa thay đổi redesign và tài liệu liên quan.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Ảnh CDN chậm hoặc thay đổi | Medium | Khai báo width/height, `fetchpriority` cho hero, lazy-load ảnh dưới fold |
| GSAP gây jank trên thiết bị yếu | Medium | Chỉ animate transform/opacity, scope context, cleanup và reduced-motion fallback |
| Legal content dài phá layout | High | `minmax(0, 1fr)`, overflow wrapping và mục lục scroll ngang trên viewport hẹp |
| Laptop có chiều cao thấp làm hero tràn | High | Dùng `min-height` có cap, font `clamp()` theo cả width và height |
| CSS overhaul ảnh hưởng route phụ | Medium | Route smoke tests và kiểm tra từng layout family trước build cuối |

## Open Questions

- None. Người dùng đã duyệt hướng thiết kế và yêu cầu triển khai responsive toàn bộ website.
