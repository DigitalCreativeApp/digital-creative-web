import { Link } from 'react-router-dom';
import logoUrl from '../../assets/images/brand-mark.svg';

export function Brand({ compact = false }) {
  return (
    <Link className="brand" to="/" aria-label="Digital Creative - Trang chủ">
      <img src={logoUrl} alt="" width={compact ? 36 : 40} height={compact ? 36 : 40} />
      <span>Digital Creative</span>
    </Link>
  );
}
