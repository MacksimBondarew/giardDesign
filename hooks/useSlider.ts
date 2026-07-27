'use client';

import { useEffect, useRef, useState } from 'react';

const AUTOPLAY_INTERVAL = 6000;

export function useSlider(length: number, paused = false) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  const goToNext = () =>
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(goToNext, AUTOPLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, paused]);

  return { activeIndex, goToPrev, goToNext };
}
