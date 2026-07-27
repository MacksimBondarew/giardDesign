'use client';

import { Icon } from '@/components/ui';

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className='lg:hidden z-50 shrink-0 group animation cursor-pointer'
      aria-label='Menu'
    >
      <Icon
        name={isOpen ? 'close' : 'mobileBurger'}
        className='w-6 h-6  group-hover:text-gray-500 animation'
      />
    </button>
  );
}
