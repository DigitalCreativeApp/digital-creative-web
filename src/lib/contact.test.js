import { describe, expect, it } from 'vitest';
import { buildContactMailto, validateContact } from './contact.js';

describe('validateContact', () => {
  it('requires a name, valid email, topic, and message', () => {
    expect(validateContact({ name: '', email: 'sai', topic: '', message: '' })).toEqual({
      name: 'Vui lòng nhập họ và tên.',
      email: 'Vui lòng nhập email hợp lệ.',
      topic: 'Vui lòng chọn chủ đề.',
      message: 'Vui lòng nhập nội dung cần trao đổi.',
    });
  });

  it('accepts a complete contact request', () => {
    expect(validateContact({ name: 'Minh Anh', email: 'minh@example.com', topic: 'Hợp tác', message: 'Tôi muốn trao đổi về dự án.' })).toEqual({});
  });
});

describe('buildContactMailto', () => {
  it('encodes contact details in the email URL', () => {
    const result = buildContactMailto({ name: 'Minh Anh', email: 'minh@example.com', topic: 'Hợp tác', message: 'Xin chào!' });
    expect(result).toContain('mailto:hello@digitalcreative.vn');
    expect(result).toContain(encodeURIComponent('[Digital Creative] Hợp tác'));
    expect(result).toContain(encodeURIComponent('Minh Anh'));
  });
});
