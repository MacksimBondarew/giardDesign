import Link from 'next/link';
import { footerData } from '@/lib';

export function FooterNav() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4 mb-16 sm:mb-20 lg:mb-[120px]'>
      <nav className='flex flex-wrap gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-2'>
        {footerData.navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className='text-white text-sm'
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className='flex flex-wrap gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-2'>
        <Link href={`tel:${footerData.phone}`} className='text-white text-sm'>
          {footerData.phone}
        </Link>
        <Link
          href={`mailto:${footerData.email}`}
          className='text-white text-sm'
        >
          {footerData.email}
        </Link>
      </div>
    </div>
  );
}
