import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRoutes } from './App.jsx';

const renderRoute = (path) => renderToStaticMarkup(
  <MemoryRouter initialEntries={[path]}>
    <AppRoutes />
  </MemoryRouter>,
);

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
});
