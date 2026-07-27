import { CtaLink, SectionHeader } from '@/components';
import { aboutSection } from '@/lib';

export function AboutContent() {
  return (
    <div className='flex items-center justify-end w-full lg:pr-[max(32px,calc((100vw-1324px)/2+32px))]'>
      <div className='w-full sm:w-fit py-12 sm:py-16 lg:py-[134.5px] px-8 xl:px-0'>
        <SectionHeader
          about={true}
          eyebrow={aboutSection.eyebrow}
          title={
            <>
              {aboutSection.titlePrefix}{' '}
              <em className='italic font-main'>{aboutSection.titleEmphasis}</em>
            </>
          }
          description={aboutSection.description}
          className='mb-8 lg:mb-[72px] max-w-[500px] text-gray'
        />
        <CtaLink
          href={aboutSection.cta.href}
          label={aboutSection.cta.label}
          variant='outlineLight'
          icon='arrowRight'
        />
      </div>
    </div>
  );
}
