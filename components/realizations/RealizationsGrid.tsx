'use client';

import Image from 'next/image';
import { useMasonry } from '@/hooks';
import type { RealizationImage } from '@/lib';

type RealizationsGridProps = {
  images: RealizationImage[];
  onImageClick: (index: number) => void;
};

export function RealizationsGrid({
  images,
  onImageClick,
}: RealizationsGridProps) {
  const { containerRef, isReady } = useMasonry(images);

  return (
    <div
      ref={containerRef}
      className={`relative animation duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='masonry-sizer w-full sm:w-[calc(50%-21px)] lg:w-[calc(33.333%-28px)]' />
      {images.map((image, index) => (
        <button
          key={image.src}
          onClick={() => onImageClick(index)}
          className='masonry-item w-full sm:w-[calc(50%-21px)] lg:w-[calc(33.333%-28px)] mb-[42px] [&:nth-last-child(-n+1)]:mb-0 sm:[&:nth-last-child(-n+2)]:mb-0 lg:[&:nth-last-child(-n+3)]:mb-0 relative overflow-hidden cursor-pointer group block'
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={451}
            height={601}
            className='w-full h-auto object-cover animation group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 animation' />
        </button>
      ))}
    </div>
  );
}
