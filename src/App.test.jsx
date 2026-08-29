import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRoutes } from './App.jsx';

const renderRoute = (path) => renderToStaticMarkup(
  <MemoryRouter initialEntries={[path]}>
    <AppRoutes />
  </MemoryRouter>,
);

const styles = readFileSync(new URL('./styles.css', import.meta.url), 'utf8');

describe('application routes', () => {
  it.each([
    ['/', 'Ý tưởng gặp đúng người.'],
    ['/terms', 'Điều khoản sử dụng'],
    ['/privacy-policy', 'Chính sách quyền riêng tư'],
    ['/contact', 'Bắt đầu một cuộc trò chuyện.'],
    ['/khong-ton-tai', 'Không tìm thấy trang'],
  ])('renders %s', (path, heading) => {
    expect(renderRoute(path)).toContain(heading);
  });

  it('renders numbered social-network privacy subsections', () => {
    const markup = renderRoute('/privacy-policy');
    expect(markup).toContain('Tiểu mục 5.1');
    expect(markup).toContain('Dữ liệu TikTok');
  });

  it('renders the redesigned editorial home experience', () => {
    const markup = renderRoute('/');

    expect(markup).toContain('home-hero');
    expect(markup).toContain('media-grid');
    expect(markup).toContain('process-story');
    expect(markup).toContain('home-final-cta');
    expect(markup).toContain('images.pexels.com');
  });

  it('does not render legacy fake product UI or decorative icon glyphs', () => {
    const markup = renderRoute('/');

    expect(markup).not.toContain('product-stage');
    expect(markup).not.toContain('app-window');
    expect(markup).not.toContain('feature-icon');
    expect(markup).not.toContain('status-dot');
  });

  it('defines responsive contracts without gradients', () => {
    expect(styles).not.toMatch(/gradient/i);
    expect(styles).toContain('overflow-x: clip');
    expect(styles).toContain('grid-auto-flow: dense');
    expect(styles).toContain('(min-width: 1800px)');
    expect(styles).toContain('(max-width: 1180px)');
    expect(styles).toContain('(max-width: 960px)');
    expect(styles).toContain('(max-width: 760px)');
    expect(styles).toContain('(max-width: 480px)');
    expect(styles).toContain('(orientation: landscape)');
    expect(styles).toContain('(prefers-reduced-motion: reduce)');
  });
});
