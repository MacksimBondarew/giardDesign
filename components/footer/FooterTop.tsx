import Link from 'next/link';
import { CtaLink, Icon } from '@/components';
import { footerData } from '@/lib';

export function FooterTop() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 lg:mb-[62px]'>
      <Link href='/' className='text-white text-xl'>
        <Icon name='logo' className='h-4 sm:h-5 w-[92px] sm:w-[114px]' />
      </Link>

      <div className='flex flex-col items-start sm:flex-row sm:items-center gap-4 sm:gap-6'>
        <p className='text-white text-sm sm:text-base'>{footerData.ctaText}</p>
        <CtaLink
          href={footerData.cta.href}
          label={footerData.cta.label}
          variant='primary'
        />
      </div>
    </div>
  );
}
