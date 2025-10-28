/**
 * useReducedMotion Hook
 * 
 * Detects if user has enabled "prefers-reduced-motion" in their system settings
 * and returns a boolean. Use this to conditionally disable or simplify animations.
 * 
 * @example
 * const shouldReduceMotion = useReducedMotion();
 * 
 * <motion.div
 *   animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
 * />
 */

import { useEffect, useState } from 'react';

export const useReducedMotion = (): boolean => {
  // Default to false (animations enabled) for SSR/initial render
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if browser supports matchMedia
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    // Create media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setShouldReduceMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return shouldReduceMotion;
};

