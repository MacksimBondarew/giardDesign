'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components';
import { RealizationsLightbox, RealizationsGrid } from '@/components';
import { useLightbox } from '@/hooks';
import { realizations, INITIAL_REALIZATIONS_COUNT } from '@/lib';

export function RealizationsSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded
    ? realizations
    : realizations.slice(0, INITIAL_REALIZATIONS_COUNT);

  const { activeIndex, open, close, next, prev } = useLightbox(
    visibleImages.length,
  );

  return (
    <section
      className='bg-beige pb-11 pt-16 sm:pt-20 lg:pt-[120px] relative'
      id={'realizations'}
    >
      <div className={'container'}>
        <SectionHeader
          eyebrow='Realizacje'
          title={
            <>
              Nasze <em className='italic font-main'>projekty</em>
            </>
          }
          className='mb-12 lg:mb-[96px]'
        />
      </div>

      <RealizationsGrid images={visibleImages} onImageClick={open} />

      {!expanded && (
        <div className='absolute animation h-[50%] bottom-0 left-0 right-0 h-64 bg-[linear-gradient(360deg,_#dcc1ab_0%,_rgba(214,183,158,0)_100%)] flex items-end justify-center'>
          <button
            onClick={() => setExpanded(true)}
            className='absolute bottom-28 animation left-50% flex items-center gap-2 border px-[22px] bg-transparent rounded-full pt-3 pb-3.5 hover:bg-black hover:text-white animation cursor-pointer'
          >
            Rozwiń
            <span aria-hidden>↓</span>
          </button>
        </div>
      )}

      {activeIndex !== null && (
        <RealizationsLightbox
          images={visibleImages}
          activeIndex={activeIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
