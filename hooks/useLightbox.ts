'use client';

import { useState } from 'react';

export function useLightbox(length: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % length));
  const prev = () =>
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + length) % length,
    );

  return { activeIndex, open, close, next, prev };
}
