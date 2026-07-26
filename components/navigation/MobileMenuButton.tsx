'use client';

import { Icon } from '@/components/ui';
import { useMobileMenu } from '@/hooks';

export function MobileMenuButton() {
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu } = useMobileMenu();
  return (
    <button
      onClick={toggleMobileMenu}
      className='lg:hidden z-50 shrink-0 group animation cursor-pointer'
      aria-label='Menu'
    >
      <Icon
        name={mobileMenuOpen ? 'close' : 'mobileBurger'}
        className='w-6 h-6  group-hover:text-gray-500 animation'
      />
    </button>
  );
}
