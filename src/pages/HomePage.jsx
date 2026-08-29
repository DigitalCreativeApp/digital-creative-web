import { Link } from 'react-router-dom';
import { HomeMotion } from '../components/HomeMotion.jsx';
import { PageMeta } from '../components/PageMeta.jsx';

const imageUrl = (id, width) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
const imageSet = (id) => [640, 960, 1400, 1800].map((width) => `${imageUrl(id, width)} ${width}w`).join(', ');

function SourcedImage({ alt, eager = false, height = 933, id, sizes, width = 1400 }) {
  return (
    <img
      src={imageUrl(id, width)}
      srcSet={imageSet(id)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
    />
  );
}

const process = [
  ['Khám phá đúng người', 'Xem hồ sơ, chuyên môn và portfolio trước khi mở một cuộc trao đổi.'],
  ['Thống nhất công việc', 'Chốt phạm vi, sản phẩm bàn giao, ngân sách và thời hạn trong cùng một luồng.'],
  ['Cộng tác rõ ràng', 'Theo dõi tiến độ, phản hồi và tệp bàn giao mà không làm mất ngữ cảnh.'],
  ['Hoàn tất an tâm', 'Xác nhận thành phẩm và giải ngân theo những gì hai bên đã thống nhất.'],
];

export function HomePage() {
  return (
    <HomeMotion>
      <PageMeta
        title="Digital Creative | Kết nối để sáng tạo"
        description="Digital Creative kết nối khách hàng với Creative, giúp quản lý dự án và thanh toán minh bạch trong một nền tảng."
      />

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow" data-hero-reveal>Nền tảng cộng tác sáng tạo</p>
            <h1 id="hero-title" data-hero-reveal>
              Ý tưởng gặp đúng người. <span>Dự án đi đến cùng.</span>
            </h1>
            <p className="home-hero__lead" data-hero-reveal>
              Tìm Creative phù hợp, thống nhất công việc và bảo vệ thanh toán trong một hành trình rõ ràng.
            </p>
            <div className="home-hero__actions" data-hero-reveal>
              <a className="button button-primary" href="#features">Khám phá nền tảng</a>
              <Link className="button button-secondary" to="/contact">Bắt đầu dự án</Link>
            </div>
          </div>

          <figure className="home-hero__media" data-hero-reveal>
            <SourcedImage
              id="34520939"
              sizes="(max-width: 960px) 100vw, (max-width: 1800px) 42vw, 620px"
              alt="Một nhóm sáng tạo đang cùng thảo luận ý tưởng trong studio"
              width="1800"
              height="1200"
              eager
            />
          </figure>
        </div>
      </section>

      <section className="audience-band" aria-label="Digital Creative dành cho ai">
        <div className="container audience-band__inner" data-reveal>
          <p>Dành cho những người muốn công việc sáng tạo vận hành tốt hơn.</p>
          <ul>
            <li>Creative tự do</li>
            <li>Studio độc lập</li>
            <li>Thương hiệu</li>
            <li>Đội marketing</li>
          </ul>
        </div>
      </section>

      <section className="home-intro section" aria-labelledby="intro-title">
        <div className="container home-intro__layout" data-reveal>
          <h2 id="intro-title">Không chỉ tìm thấy nhau. Cùng nhau hoàn thành công việc.</h2>
          <p>Hồ sơ, đề xuất, trao đổi, bàn giao và dòng tiền được kết nối thành một trải nghiệm nhất quán.</p>
        </div>
      </section>

      <section className="section home-features" id="features" aria-labelledby="features-title">
        <div className="container">
          <header className="section-title" data-reveal>
            <h2 id="features-title">Một nơi cho toàn bộ dự án.</h2>
            <p>Ba lớp trải nghiệm được thiết kế để hai bên tiến về cùng một hướng.</p>
          </header>

          <div className="media-grid">
            <article className="media-feature media-feature--primary" data-reveal>
              <div className="media-feature__image" data-media-reveal>
                <SourcedImage
                  id="36765627"
                  sizes="(max-width: 760px) 100vw, 58vw"
                  alt="Hai nhà thiết kế đang chọn ảnh và bảng màu cho dự án"
                />
              </div>
              <div className="media-feature__content">
                <h3>Chọn bằng năng lực thật</h3>
                <p>Portfolio, chuyên môn và lịch sử cộng tác giúp quyết định dựa trên công việc, không dựa trên phỏng đoán.</p>
              </div>
            </article>

            <article className="media-feature media-feature--text" data-reveal>
              <div className="media-feature__content">
                <h3>Brief rõ từ đầu</h3>
                <p>Phạm vi, chi phí và sản phẩm bàn giao được đặt cạnh cuộc trao đổi để mọi quyết định luôn có ngữ cảnh.</p>
              </div>
            </article>

            <article className="media-feature media-feature--accent" data-reveal>
              <div className="media-feature__content">
                <h3>Thanh toán có điểm tựa</h3>
                <p>Ký quỹ theo tiến độ tạo một quy trình công bằng hơn cho cả khách hàng và Creative.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section process-story" id="how-it-works" aria-labelledby="process-title">
        <div className="container process-story__layout">
          <div className="process-story__intro" data-reveal>
            <p className="eyebrow">Từ brief đến bàn giao</p>
            <h2 id="process-title">Một nhịp làm việc dễ hiểu.</h2>
            <p>Mỗi bước trả lời rõ điều gì đang diễn ra và ai cần hành động tiếp theo.</p>
          </div>

          <ol className="process-story__steps">
            {process.map(([title, copy]) => (
              <li className="process-step" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section confidence" aria-labelledby="confidence-title">
        <div className="container confidence__grid">
          <figure className="confidence__media" data-media-reveal>
            <SourcedImage
              id="6322358"
              sizes="(max-width: 960px) 100vw, 58vw"
              alt="Hai chuyên gia thiết kế đang xem bản vẽ trong không gian làm việc"
            />
          </figure>
          <div className="confidence__copy" data-reveal>
            <h2 id="confidence-title">Minh bạch để tập trung sáng tạo.</h2>
            <p>Trạng thái dự án, lịch sử trao đổi và giao dịch luôn ở đúng nơi khi bạn cần kiểm tra.</p>
            <ul>
              <li>Phạm vi công việc được xác nhận</li>
              <li>Tiến độ và bàn giao có lịch sử</li>
              <li>Dòng tiền bám sát từng mốc dự án</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section home-final-cta" aria-labelledby="cta-title">
        <div className="container home-final-cta__panel" data-reveal>
          <h2 id="cta-title">Dự án tiếp theo có thể bắt đầu rõ ràng hơn.</h2>
          <p>Kết nối với cộng đồng Creative và xây dựng một quy trình làm việc đáng tin cậy.</p>
          <Link className="button button-light" to="/contact">Trao đổi với Digital Creative</Link>
        </div>
      </section>
    </HomeMotion>
  );
}
