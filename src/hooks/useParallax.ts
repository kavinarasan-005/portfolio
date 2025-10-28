/**
 * useParallax Hook
 * 
 * Creates smooth parallax effect based on mouse movement or scroll position.
 * Returns x, y transform values to apply to elements.
 * 
 * @param strength - Parallax intensity (0-1, default: 0.05)
 * @param type - 'mouse' for mouse parallax, 'scroll' for scroll parallax
 * 
 * @example
 * const { x, y } = useParallax({ strength: 0.05, type: 'mouse' });
 * 
 * <div style={{ transform: `translate(${x}px, ${y}px)` }}>
 */

import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface ParallaxOptions {
  strength?: number;
  type?: 'mouse' | 'scroll';
}

interface ParallaxReturn {
  x: ReturnType<typeof useMotionValue>;
  y: ReturnType<typeof useMotionValue>;
}

export const useParallax = ({
  strength = 0.05,
  type = 'mouse',
}: ParallaxOptions = {}): ParallaxReturn => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Disable parallax if user prefers reduced motion
    if (shouldReduceMotion || typeof window === 'undefined') {
      x.set(0);
      y.set(0);
      return;
    }

    if (type === 'mouse') {
      const handleMouseMove = (event: MouseEvent) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = (event.clientX - centerX) * strength;
        const deltaY = (event.clientY - centerY) * strength;

        x.set(deltaX);
        y.set(deltaY);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    } else if (type === 'scroll') {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrolled / maxScroll;

        x.set(0);
        y.set(scrollPercent * 100 * strength);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [strength, type, shouldReduceMotion, x, y]);

  return { x: springX, y: springY };
};

