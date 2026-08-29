import { useState } from 'react';
import { PageMeta } from '../components/PageMeta.jsx';
import { buildContactMailto, validateContact } from '../lib/contact.js';

const initialValues = { name: '', email: '', topic: '', message: '' };

export function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) window.location.href = buildContactMailto(values);
  };

  return (
    <>
      <PageMeta title="Liên hệ - Digital Creative" description="Liên hệ Digital Creative để được hỗ trợ, trao đổi hợp tác hoặc đóng góp ý kiến cho nền tảng." />
      <section className="contact-hero section"><div className="container contact-intro"><p className="eyebrow">Liên hệ Digital Creative</p><h1>Bắt đầu một cuộc trò chuyện.</h1><p>Bạn có câu hỏi, một ý tưởng hợp tác hay cần hỗ trợ? Hãy gửi lời nhắn. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p></div></section>
      <section className="contact-section"><div className="container contact-grid">
        <div className="contact-details">
          <div><span className="contact-label">Kênh liên hệ</span><h2>Email</h2><a href="mailto:hello@digitalcreative.vn">hello@digitalcreative.vn</a><p>Phù hợp cho câu hỏi chung và đề xuất hợp tác.</p></div>
          <div><span className="contact-label">Chăm sóc người dùng</span><h2>Hỗ trợ</h2><a href="mailto:support@digitalcreative.vn">support@digitalcreative.vn</a><p>Hỗ trợ tài khoản, dự án và giao dịch trên nền tảng.</p></div>
          <div><span className="contact-label">Thời gian làm việc</span><h2>Thời gian phản hồi</h2><strong>Trong vòng 1-2 ngày làm việc</strong><p>Thứ Hai đến Thứ Sáu, 09:00-18:00 (GMT+7).</p></div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-heading"><span>GỬI LỜI NHẮN</span><h2>Chúng tôi có thể giúp gì cho bạn?</h2></div>
          <div className="form-row"><Field label="Họ và tên" name="name" value={values.name} error={errors.name} onChange={updateField} placeholder="Nguyễn Minh Anh" /><Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={updateField} placeholder="minhanh@email.com" /></div>
          <label className="field"><span>Chủ đề</span><select name="topic" value={values.topic} onChange={updateField} aria-invalid={Boolean(errors.topic)} aria-describedby={errors.topic ? 'topic-error' : undefined}><option value="">Chọn nội dung cần trao đổi</option><option>Hỗ trợ tài khoản</option><option>Dự án và giao dịch</option><option>Hợp tác</option><option>Góp ý sản phẩm</option><option>Khác</option></select>{errors.topic && <small id="topic-error" role="alert">{errors.topic}</small>}</label>
          <label className="field"><span>Nội dung</span><textarea name="message" rows="6" value={values.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} placeholder="Chia sẻ thêm thông tin để chúng tôi có thể hỗ trợ bạn tốt hơn…" />{errors.message && <small id="message-error" role="alert">{errors.message}</small>}</label>
          <button className="button button-primary submit-button" type="submit">Gửi lời nhắn</button>
          <p className="form-note">Biểu mẫu sẽ mở ứng dụng email mặc định của bạn. Digital Creative chưa lưu dữ liệu từ biểu mẫu này.</p>
        </form>
      </div></section>
    </>
  );
}

function Field({ error, label, name, onChange, placeholder, type = 'text', value }) {
  const errorId = `${name}-error`;
  return <label className="field"><span>{label}</span><input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />{error && <small id={errorId} role="alert">{error}</small>}</label>;
}
