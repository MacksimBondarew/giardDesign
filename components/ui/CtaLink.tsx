import Link from 'next/link';
import { Icon } from '@/components/ui';
import { IconName } from '@/components/ui/icon/icons-data';

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'outlineLight' | 'white';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
};

const variantStyles = {
  primary: 'bg-green text-white px-6.5 rounded-full hover:opacity-90',
  secondary:
    'flex items-center gap-2 border px-[22px] border-green text-green hover:bg-green hover:text-white',
  outlineLight:
    'border px-[22px] border-white w-fit text-white hover:bg-white hover:text-green',
  white: 'bg-white text-green  hover:opacity-90 px-[22px]',
};

export function CtaLink({
  href,
  label,
  variant = 'primary',
  icon,
  iconPosition = 'right',
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={`rounded-full pt-3 pb-3.5 animation flex items-center gap-2 ${variantStyles[variant]}`}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className='w-4 h-4' />
      )}
      {label}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className='w-4 h-4' />
      )}
    </Link>
  );
}
