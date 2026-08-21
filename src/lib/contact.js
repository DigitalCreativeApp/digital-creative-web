const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Vui lòng nhập họ và tên.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Vui lòng nhập email hợp lệ.';
  if (!values.topic.trim()) errors.topic = 'Vui lòng chọn chủ đề.';
  if (!values.message.trim()) errors.message = 'Vui lòng nhập nội dung cần trao đổi.';

  return errors;
}

export function buildContactMailto(values) {
  const subject = encodeURIComponent(`[Digital Creative] ${values.topic.trim()}`);
  const body = encodeURIComponent(
    `Họ và tên: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`,
  );

  return `mailto:hello@digitalcreative.vn?subject=${subject}&body=${body}`;
}
