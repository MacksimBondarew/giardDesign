'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui';
import type { RealizationImage } from '@/lib';

type RealizationsLightboxProps = {
  images: RealizationImage[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function RealizationsLightbox({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: RealizationsLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const image = images[activeIndex];

  return (
    <div
      className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center'
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label='Zamknij'
        className='absolute top-6 right-6 text-white cursor-pointer hover:opacity-70 animation'
      >
        <Icon name='close' className='w-8 h-8' />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label='Poprzednie zdjęcie'
        className='absolute left-4 sm:left-8 text-white cursor-pointer hover:opacity-70 animation'
      >
        <Icon name='arrowLeft' className='w-8 h-8' />
      </button>

      <div
        className='relative w-full max-w-4xl h-[70vh] mx-16'
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className='object-contain'
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label='Następne zdjęcie'
        className='absolute right-4 sm:right-8 text-white cursor-pointer hover:opacity-70 animation'
      >
        <Icon name='arrowRight' className='w-8 h-8' />
      </button>
    </div>
  );
}
