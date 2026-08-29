import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Brand } from './Brand.jsx';

const navItems = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/#features', label: 'Tính năng' },
  { to: '/#how-it-works', label: 'Cách hoạt động' },
  { to: '/contact', label: 'Liên hệ' },
];

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0 });
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span />
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="main-nav" aria-label="Điều hướng chính">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive && !item.to.includes('#') ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content"><Outlet /></main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><Brand compact /><p>Nơi tài năng sáng tạo và những ý tưởng lớn gặp nhau.</p></div>
          <div className="footer-links">
            <div><h2>Khám phá</h2><Link to="/#features">Tính năng</Link><Link to="/#how-it-works">Cách hoạt động</Link><Link to="/contact">Liên hệ</Link></div>
            <div><h2>Pháp lý</h2><Link to="/terms">Điều khoản sử dụng</Link><Link to="/privacy-policy">Chính sách quyền riêng tư</Link></div>
          </div>
        </div>
        <div className="container footer-bottom"><p>© {new Date().getFullYear()} Digital Creative. All rights reserved.</p><p>Được tạo nên cho cộng đồng sáng tạo Việt Nam.</p></div>
      </footer>
    </>
  );
}
