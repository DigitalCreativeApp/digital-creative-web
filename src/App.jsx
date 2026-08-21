import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { LegalPage } from './pages/LegalPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="terms" element={<LegalPage type="terms" />} />
        <Route path="privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
