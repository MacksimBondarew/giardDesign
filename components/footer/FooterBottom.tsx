import { footerData } from '@/lib';
import { Icon } from '@/components';

export function FooterBottom() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between text-white gap-4 sm:gap-2'>
      <p className='text-sm'>{footerData.copyright}</p>
      <div className='flex items-center gap-3 sm:gap-12'>
        <span className='text-sm'>made by</span>
        <Icon
          name='adRespect'
          className='h-[18px] sm:h-[23px] w-[88px] sm:w-[113px]'
        />
      </div>
    </div>
  );
}
