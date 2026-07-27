import Image from 'next/image';
import type { Slide } from '@/lib';

type HeroImageProps = {
  slides: Slide[];
  activeIndex: number;
};

export function HeroImage({ slides, activeIndex }: HeroImageProps) {
  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 animation ${
            index === activeIndex
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes='(min-width: 640px) 48vw, 100vw'
            className='object-cover'
            priority={index === 0}
          />
        </div>
      ))}
    </>
  );
}
