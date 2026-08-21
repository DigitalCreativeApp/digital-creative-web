import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { legalContent } from '../content/legalContent.js';

const slugify = (title) => title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/đ/g, 'd')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

function ContentBlock({ block, contactDetails, sectionNumber }) {
  return (
    <>
      {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {block.bullets.length > 0 && <ul>{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
      {block.afterBullets?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {block.subsections?.map((subsection, index) => (
        <section className="legal-subsection" key={subsection.title}>
          <p className="legal-subsection-label">Tiểu mục {sectionNumber}.{index + 1}</p>
          <h3>{subsection.title}</h3>
          <ContentBlock block={subsection} contactDetails={contactDetails} sectionNumber={`${sectionNumber}.${index + 1}`} />
        </section>
      ))}
      {block.contact && (
        <dl className="legal-contact-list">
          {contactDetails.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </dl>
      )}
    </>
  );
}

export function LegalPage({ type }) {
  const content = legalContent[type];

  return (
    <>
      <PageMeta title={`${content.title} — Digital Creative`} description={content.description} />
      <header className="legal-hero" id="legal-top">
        <div className="container legal-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Đường dẫn"><Link to="/">Trang chủ</Link><span aria-hidden="true">/</span><span>{content.title}</span></nav>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="legal-lead">{content.description}</p>
          </div>
          <dl className="legal-meta" aria-label="Thông tin phiên bản tài liệu">
            <div><dt>Phiên bản</dt><dd>{content.version}</dd></div>
            <div><dt>Cập nhật</dt><dd>{content.updated}</dd></div>
            <div><dt>Số mục</dt><dd>{String(content.sections.length).padStart(2, '0')}</dd></div>
          </dl>
        </div>
      </header>

      <section className="legal-section">
        <div className="container">
          <aside className="legal-notice" aria-label="Lưu ý trước khi công bố">
            <span aria-hidden="true">i</span><div><strong>Lưu ý từ tài liệu nguồn</strong><p>{content.notice}</p></div>
          </aside>
          <div className="legal-layout">
            <aside className="legal-nav">
              <p>Trong tài liệu này</p>
              <nav aria-label={`Mục lục ${content.title}`}>
                {content.sections.map((item, index) => (
                  <a href={`#${slugify(item.title)}`} key={item.title}><span>{String(index + 1).padStart(2, '0')}</span>{item.title}</a>
                ))}
              </nav>
            </aside>
            <article className="legal-article">
              {content.sections.map((item, index) => (
                <section id={slugify(item.title)} key={item.title}>
                  <div className="legal-section-number">{String(index + 1).padStart(2, '0')}</div>
                  <h2>{item.title}</h2>
                  <ContentBlock block={item} contactDetails={content.contactDetails} sectionNumber={index + 1} />
                </section>
              ))}
              <footer className="legal-end"><span>— HẾT —</span><a href="#legal-top">Về đầu trang ↑</a></footer>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
