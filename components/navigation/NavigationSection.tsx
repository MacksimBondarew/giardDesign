import Link from 'next/link';
import { Icon } from '@/components/ui';
import { DesktopNav } from './DesktopNav';
import { SearchInput } from '@/components';
import { MobileMenuButton } from '@/components';
import { MobileMenu } from './MobileMenu';
export function NavigationSection() {
  return (
    <header className='bg-white border-gray-100 relative z-50'>
      <div className='container'>
        <div className='flex items-center justify-between h-20 gap-4'>
          <Link
            href='/'
            className=' shrink-0 z-50 nav-item-padding hover:text-green animation'
          >
            <Icon name='logo' className='h-5 w-[114px]' />
          </Link>

          <div className={'flex gap-10'}>
            <DesktopNav />
            <SearchInput />
          </div>
          <MobileMenuButton />
        </div>
      </div>

      <MobileMenu />
    </header>
  );
}
