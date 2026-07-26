'use client';

import { useSlider } from '@/hooks';
import type { Slide } from '@/lib';
import { HeroContent } from '@/components/hero/HeroContent';
import { HeroImage } from '@/components/hero/HeroImage';
import { HeroNavigation } from '@/components/hero/HeroNavigation';

type HeroSliderProps = {
  slides: Slide[];
};

export function HeroSlider({ slides }: HeroSliderProps) {
  const { activeIndex, goToPrev, goToNext } = useSlider(slides.length);

  return (
    <div className='grid sm:grid-cols-[52.2%_47.8%]'>
      <HeroContent slides={slides} activeIndex={activeIndex} />

      <div className='relative min-h-[380px] sm:min-h-[calc(100vh-80px)]'>
        <HeroImage slides={slides} activeIndex={activeIndex} />
        <HeroNavigation onPrev={goToPrev} onNext={goToNext} />
      </div>
    </div>
  );
}
