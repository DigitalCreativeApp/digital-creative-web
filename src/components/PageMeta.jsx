import { useEffect } from 'react';

export function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);
  }, [description, title]);

  return null;
}
