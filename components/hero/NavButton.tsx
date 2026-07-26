import { ReactNode } from 'react';
import { Icon } from '@/components/ui';
import { IconName } from '@/components/ui/icon/icons-data';

type NavButtonProps = {
  onClick: () => void;
  ariaLabel: string;
  icon?: IconName;
  children?: ReactNode;
};

export function NavButton({
  onClick,
  ariaLabel,
  icon,
  children,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className='size-16 sm:size-20 lg:size-24 flex justify-center items-center cursor-pointer'
    >
      {icon ? (
        <Icon name={icon} className='size-8 sm:size-10 lg:size-12 ' />
      ) : (
        children
      )}
    </button>
  );
}
