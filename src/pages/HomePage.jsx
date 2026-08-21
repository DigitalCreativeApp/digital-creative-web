import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import logoUrl from '../../assets/images/brand-mark.svg';

const features = [
  {
    number: '01', icon: '⌁', title: 'Tìm đúng Creative', className: 'feature-large',
    copy: 'Khám phá hồ sơ, portfolio, chuyên môn và đánh giá để chọn người phù hợp với thẩm mỹ lẫn mục tiêu dự án.',
    visual: <PortfolioVisual />,
  },
  {
    number: '02', icon: '◎', title: 'Dự án có cấu trúc',
    copy: 'Đăng yêu cầu, nhận đề xuất, chốt phạm vi và theo dõi từng mốc công việc trong một không gian chung.',
    visual: <div className="progress-demo" aria-hidden="true"><span /><span /><span /><span /></div>,
  },
  {
    number: '03', icon: '◇', title: 'Thanh toán được bảo vệ',
    copy: 'Ký quỹ giúp đôi bên an tâm. Khoản tiền được theo dõi minh bạch và giải ngân theo tiến độ đã thống nhất.',
    visual: <div className="wallet-demo" aria-hidden="true"><small>ĐANG ĐƯỢC BẢO VỆ</small><strong>24.500.000 ₫</strong><span><i /> Ký quỹ hoạt động</span></div>,
  },
];

const workflow = [
  ['Khám phá & kết nối', 'Tìm Creative, dịch vụ hoặc đăng dự án để nhận đề xuất phù hợp.'],
  ['Thống nhất phạm vi', 'Trao đổi trực tiếp, chốt sản phẩm bàn giao, chi phí và thời hạn.'],
  ['Cộng tác minh bạch', 'Theo dõi tiến độ, chia sẻ tệp và phản hồi ngay trong không gian dự án.'],
  ['Bàn giao & thanh toán', 'Xác nhận thành phẩm, hoàn tất dự án và giải ngân an toàn.'],
];

function PortfolioVisual() {
  return (
    <div className="portfolio-stack" aria-hidden="true">
      <div className="portfolio-item item-one"><span>BRAND</span><strong>Form & Feeling</strong></div>
      <div className="portfolio-item item-two"><span>EDITORIAL</span><strong>New Perspectives</strong></div>
      <div className="portfolio-item item-three"><span>DIGITAL</span><strong>Quiet Motion</strong></div>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="product-stage" role="img" aria-label="Minh họa giao diện ứng dụng Digital Creative">
      <div className="stage-orbit orbit-one" aria-hidden="true" /><div className="stage-orbit orbit-two" aria-hidden="true" />
      <div className="app-window">
        <div className="app-topbar"><div className="app-brand"><img src={logoUrl} alt="" width="28" height="28" /><span>digital creative</span></div><span className="avatar">LT</span></div>
        <div className="app-body">
          <aside className="app-sidebar" aria-hidden="true"><span className="side-dot active" /><span className="side-dot" /><span className="side-dot" /><span className="side-dot" /></aside>
          <div className="app-content">
            <p className="app-kicker">DÀNH CHO BẠN</p><h2>Cơ hội mới hôm nay</h2>
            <div className="project-card">
              <div className="project-head"><span className="live-label"><i /> ĐANG TUYỂN CREATIVE</span><span className="count">06</span></div>
              <h3>Nhận diện thương hiệu cho sản phẩm công nghệ mới</h3><p>Branding · Thiết kế đồ họa</p>
              <div className="project-foot"><strong>12–18 triệu</strong><span>Xem dự án →</span></div>
            </div>
            <div className="mini-grid"><div><span className="mini-icon">✦</span><strong>Dịch vụ</strong><small>Chọn gói phù hợp</small></div><div><span className="mini-icon mint">✓</span><strong>Ký quỹ</strong><small>Thanh toán an toàn</small></div></div>
          </div>
        </div>
      </div>
      <div className="floating-card floating-profile" aria-hidden="true"><span className="profile-pic">AN</span><span><strong>An Nguyễn</strong><small>Brand Designer · 4.9 ★</small></span></div>
      <div className="floating-card floating-payment" aria-hidden="true"><span className="check-icon">✓</span><span><small>Đã bảo vệ thanh toán</small><strong>15.000.000 ₫</strong></span></div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <PageMeta title="Digital Creative — Kết nối để sáng tạo" description="Digital Creative kết nối Creative với khách hàng, giúp tìm dịch vụ, quản lý dự án và thanh toán an toàn trong một nền tảng." />
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />Nền tảng cộng tác sáng tạo</p>
            <h1 id="hero-title">Ý tưởng gặp đúng người.<br /><span>Dự án đi đến cùng.</span></h1>
            <p className="hero-lead">Digital Creative kết nối khách hàng với cộng đồng Creative chất lượng — từ khám phá tài năng, thống nhất công việc đến bàn giao và thanh toán.</p>
            <div className="hero-actions"><a className="button button-primary" href="#features">Khám phá nền tảng <span aria-hidden="true">↗</span></a><Link className="button button-ghost" to="/contact">Trao đổi cùng chúng tôi</Link></div>
            <dl className="hero-stats"><div><dt>Một nền tảng</dt><dd>Cho toàn bộ quy trình</dd></div><div><dt>Minh bạch</dt><dd>Tiến độ và thanh toán</dd></div><div><dt>Linh hoạt</dt><dd>Dự án hoặc dịch vụ</dd></div></dl>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="audience-strip" aria-label="Đối tượng sử dụng"><div className="container audience-inner"><p>Được xây dựng cho</p><ul><li>Creative tự do</li><li>Studio</li><li>Thương hiệu</li><li>Đội ngũ marketing</li><li>Doanh nghiệp</li></ul></div></section>

      <section className="section intro-section" aria-labelledby="intro-title"><div className="container intro-grid"><div className="section-heading"><p className="eyebrow">Tập trung vào điều quan trọng</p><h2 id="intro-title">Không chỉ là nơi tìm người.<br />Đây là nơi công việc được hoàn thành.</h2></div><div className="intro-copy"><p>Một dự án sáng tạo tốt cần nhiều hơn một cuộc kết nối. Digital Creative gom hồ sơ, đề xuất, trao đổi, tệp bàn giao và dòng tiền vào cùng một hành trình rõ ràng.</p><a className="text-link" href="#how-it-works">Xem quy trình hoạt động <span aria-hidden="true">→</span></a></div></div></section>

      <section className="section features-section" id="features" aria-labelledby="features-title"><div className="container">
        <div className="section-heading compact"><p className="eyebrow">Một hệ sinh thái liền mạch</p><h2 id="features-title">Mọi công cụ cho một dự án sáng tạo tốt hơn.</h2><p>Từ cảm hứng đầu tiên đến lần bàn giao cuối cùng.</p></div>
        <div className="feature-grid">
          {features.map((feature) => <article className={`feature-card ${feature.className ?? ''}`} key={feature.number}><div className="feature-number">{feature.number}</div><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.copy}</p>{feature.visual}</article>)}
          <article className="feature-card feature-wide"><div><div className="feature-number">04</div><div className="feature-icon">✦</div><h3>Nguồn cảm hứng mỗi ngày</h3><p>Lưu lại tác phẩm nổi bật, theo dõi người sáng tạo yêu thích và khám phá góc nhìn mới từ cộng đồng.</p></div><div className="inspiration-demo" aria-hidden="true"><span>CURATED<br />CREATIVITY</span><i>Khám phá</i></div></article>
        </div>
      </div></section>

      <section className="section workflow-section" id="how-it-works" aria-labelledby="workflow-title"><div className="container"><div className="workflow-head"><div><p className="eyebrow">Đơn giản từ đầu đến cuối</p><h2 id="workflow-title">Từ brief đến thành phẩm<br />trong bốn nhịp rõ ràng.</h2></div><p>Mỗi bên đều biết việc gì đang diễn ra, điều gì cần làm tiếp theo và khi nào dự án được hoàn tất.</p></div><ol className="workflow-list">{workflow.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>

      <section className="section trust-section" aria-labelledby="trust-title"><div className="container trust-grid"><div className="trust-visual" aria-hidden="true"><div className="shield-ring"><span>✓</span></div><div className="trust-line line-one" /><div className="trust-line line-two" /><span className="trust-tag tag-one">Dữ liệu riêng tư</span><span className="trust-tag tag-two">Thanh toán rõ ràng</span></div><div className="trust-copy"><p className="eyebrow">An tâm để sáng tạo</p><h2 id="trust-title">Minh bạch là một phần của trải nghiệm.</h2><p>Digital Creative giảm những khoảng mờ thường gặp khi làm việc tự do — từ danh tính, phạm vi công việc đến giao dịch.</p><ul className="check-list"><li>Hồ sơ và lịch sử cộng tác rõ ràng</li><li>Dòng tiền được theo dõi theo từng giao dịch</li><li>Cơ chế hỗ trợ khi phát sinh bất đồng</li></ul></div></div></section>

      <section className="section cta-section"><div className="container cta-panel"><div><p className="eyebrow">Sẵn sàng bắt đầu?</p><h2>Biến ý tưởng tiếp theo<br />thành dự án đáng tự hào.</h2></div><div><p>Tham gia Digital Creative và mở ra cách cộng tác sáng tạo rõ ràng, công bằng hơn.</p><Link className="button button-light" to="/contact">Liên hệ Digital Creative <span aria-hidden="true">→</span></Link></div></div></section>
    </>
  );
}
