import { useEffect, useState } from 'react';

const MENU_ID = 'mobile-menu';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const menuEl = document.getElementById(MENU_ID);
    if (!menuEl) return;

    if (isOpen) {
      menuEl.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      menuEl.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return { isOpen, toggle, close };
}
