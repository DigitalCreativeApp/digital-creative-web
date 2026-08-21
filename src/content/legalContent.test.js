import { describe, expect, it } from 'vitest';
import { legalContent } from './legalContent.js';

describe('legal content sourced from the approved documents', () => {
  it('contains all 21 terms sections from version 1.0', () => {
    expect(legalContent.terms.version).toBe('1.0');
    expect(legalContent.terms.sections).toHaveLength(21);
    expect(legalContent.terms.sections[11].title).toContain('TikTok');
    expect(legalContent.terms.sections[19].title).toBe('Luật áp dụng và giải quyết tranh chấp');
  });

  it('contains all 22 privacy sections and social-network subsections', () => {
    expect(legalContent.privacy.version).toBe('1.0');
    expect(legalContent.privacy.sections).toHaveLength(22);
    expect(legalContent.privacy.sections[4].subsections.map((item) => item.title)).toEqual([
      'Dữ liệu TikTok',
      'Dữ liệu Facebook / Meta',
      'Dữ liệu Google / YouTube',
    ]);
  });

  it('preserves the publication placeholders required by both documents', () => {
    expect(legalContent.terms.contactDetails.every((item) => item.value.startsWith('[BỔ SUNG'))).toBe(true);
    expect(legalContent.privacy.contactDetails.every((item) => item.value.startsWith('[BỔ SUNG'))).toBe(true);
  });

  it('preserves paragraphs that follow bullet lists in the source documents', () => {
    expect(legalContent.terms.sections[1].afterBullets[0]).toContain('Người dùng chịu trách nhiệm');
    expect(legalContent.terms.sections[9].afterBullets[0]).toContain('Digital Creative có thể ẩn');
    expect(legalContent.privacy.sections[4].subsections[0].afterBullets[0]).toContain('không thu thập dữ liệu TikTok');
  });
});
