import type { Slide } from '@/lib';
import { CtaLink } from '@/components';

type HeroContentProps = {
  slides: Slide[];
  activeIndex: number;
};

export function HeroContent({ slides, activeIndex }: HeroContentProps) {
  return (
    <div className='flex items-center h-full'>
      <div className='w-full sm:w-fit p-8 xl:pr-0 sm:pr-5 sm:pl-[max(32px,calc((100vw-1324px)/2+32px))]'>
        <div className='grid'>
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`col-start-1 row-start-1 transition-all duration-700 ease-out ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none select-none'
              }`}
              aria-hidden={index !== activeIndex}
            >
              <h1 className='text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-[110%] lg:leading-[70px] mb-6 sm:mb-6 md:mb-8 lg:mb-11 max-w-full sm:max-w-[320px] md:max-w-[420px] lg:max-w-[495px]'>
                {slide.title}
              </h1>
              <p className='mb-8 sm:mb-8 md:mb-10 lg:mb-[72px] max-w-full sm:max-w-[320px] md:max-w-[420px] lg:max-w-[480px]'>
                {slide.description}
              </p>
              <div className='flex flex-wrap gap-4 lg:gap-9 max-w-full sm:max-w-[320px] md:max-w-[420px] lg:max-w-[493px]'>
                <CtaLink
                  href={slide.primaryCta.href}
                  label={slide.primaryCta.label}
                  variant='primary'
                />
                <CtaLink
                  href={slide.secondaryCta.href}
                  label={slide.secondaryCta.label}
                  variant='secondary'
                  icon='arrowDown'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
