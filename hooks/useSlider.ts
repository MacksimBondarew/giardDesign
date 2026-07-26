'use client';

import { useState } from 'react';

export function useSlider(length: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  const goToNext = () =>
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));

  return { activeIndex, goToPrev, goToNext };
}
