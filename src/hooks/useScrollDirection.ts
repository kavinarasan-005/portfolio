/**
 * useScrollDirection Hook
 * 
 * Detects scroll direction (up/down) for hide-on-scroll navigation behavior.
 * Returns 'up', 'down', or null for initial state.
 * 
 * @param threshold - Minimum scroll distance before direction change registers (default: 10px)
 * 
 * @example
 * const scrollDirection = useScrollDirection();
 * 
 * <nav className={scrollDirection === 'down' ? 'hidden' : 'visible'}>
 */

import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

export const useScrollDirection = (threshold: number = 10): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Only update if scrolled past threshold
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(scrollY > 0 ? scrollY : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY, threshold]);

  return scrollDirection;
};

