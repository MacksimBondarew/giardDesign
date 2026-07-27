'use client';

import { useEffect, useRef, useState } from 'react';

interface MasonryInstance {
  layout?: () => void;
  destroy?: () => void;
  on?: (event: string, callback: () => void) => void;
}

export function useMasonry<T>(deps: T[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const masonryInstance = useRef<MasonryInstance | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsReady(false);

    async function init() {
      if (!containerRef.current) return;

      const [{ default: Masonry }, { default: imagesLoaded }] =
        await Promise.all([import('masonry-layout'), import('imagesloaded')]);

      if (cancelled || !containerRef.current) return;

      const instance = new Masonry(containerRef.current, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        gutter: 42,
      }) as MasonryInstance;

      masonryInstance.current = instance;

      const imgLoadInstance = imagesLoaded(containerRef.current);

      imgLoadInstance.on('progress', () => {
        masonryInstance.current?.layout?.();
      });

      imgLoadInstance.on('always', () => {
        masonryInstance.current?.layout?.();
        if (!cancelled) setIsReady(true);
      });
    }

    init();

    return () => {
      cancelled = true;
      masonryInstance.current?.destroy?.();
      masonryInstance.current = null;
    };
  }, [deps.length]);

  return { containerRef, isReady };
}
