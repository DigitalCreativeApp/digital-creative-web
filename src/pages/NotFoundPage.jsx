import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';

export function NotFoundPage() {
  return (
    <section className="state-page section">
      <PageMeta title="Không tìm thấy trang — Digital Creative" description="Trang bạn tìm kiếm không tồn tại." />
      <div className="container state-card">
        <p className="eyebrow">Lỗi 404</p>
        <h1>Không tìm thấy trang</h1>
        <p>Đường dẫn có thể đã thay đổi hoặc không còn tồn tại.</p>
        <Link className="button button-primary" to="/">Quay về trang chủ</Link>
      </div>
    </section>
  );
}
