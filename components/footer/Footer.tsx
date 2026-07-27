import { FooterTop } from './FooterTop';
import { FooterNav } from './FooterNav';
import { FooterBottom } from './FooterBottom';

export function Footer() {
  return (
    <footer className='bg-black py-10 sm:py-12 lg:py-[80px]'>
      <div className='container'>
        <FooterTop />
        <div className='h-px bg-white/20 mb-8 lg:mb-[62px]' />
        <FooterNav />
        <FooterBottom />
      </div>
    </footer>
  );
}
