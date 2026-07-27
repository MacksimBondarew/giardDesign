import { CtaLink, SectionHeader } from '@/components';
import { instagramCta } from '@/lib';

export function InstagramCtaSection() {
  return (
    <section className='py-6 sm:py-10 lg:py-[60px]'>
      <div className='container'>
        <div className='bg-green rounded-2xl lg:rounded-none px-6 py-10 sm:px-10 sm:py-12 lg:px-[110px] lg:py-[140px] flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-6 lg:gap-8 text-center lg:text-left'>
          <div className='text-white font-normal'>
            <SectionHeader
              title={
                <>
                  {instagramCta.titleLine1}
                  <br className='hidden sm:block' />{' '}
                  {instagramCta.titleLine2Prefix}{' '}
                  <em className='italic font-main font-medium'>
                    {instagramCta.titleLine2Emphasis}
                  </em>
                  .
                </>
              }
              className='text-xl sm:text-2xl lg:text-3xl'
            />
          </div>

          <div className='flex flex-col items-center lg:items-end max-w-full sm:max-w-[280px] lg:max-w-[159px]'>
            <p className='text-white mb-4 lg:mb-6 text-sm sm:text-base text-center lg:text-right'>
              {instagramCta.followText}
            </p>
            <CtaLink
              href={instagramCta.cta.href}
              variant='white'
              label={instagramCta.cta.label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
