/**
 * Scroll Reveal Utilities
 * 
 * IntersectionObserver-based utilities for reveal-on-scroll animations.
 * More performant than scroll event listeners.
 */

/**
 * Creates an IntersectionObserver for scroll-triggered animations
 * 
 * @param threshold - Percentage of element visible before triggering (0-1)
 * @param rootMargin - Margin around viewport (e.g., "-100px" triggers 100px before entering)
 * @param callback - Function to call when element enters/exits viewport
 * 
 * @example
 * const observer = createScrollObserver({
 *   threshold: 0.2,
 *   callback: (entry) => {
 *     if (entry.isIntersecting) {
 *       entry.target.classList.add('revealed');
 *     }
 *   }
 * });
 * 
 * observer.observe(document.querySelector('.animate-section'));
 */
export const createScrollObserver = ({
  threshold = 0.2,
  rootMargin = '0px',
  callback,
}: {
  threshold?: number;
  rootMargin?: string;
  callback: (entry: IntersectionObserverEntry) => void;
}): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      threshold,
      rootMargin,
    }
  );
};

/**
 * Hook for scroll-triggered animations with IntersectionObserver
 * 
 * @param ref - React ref to the element to observe
 * @param threshold - Percentage visible before triggering
 * @param triggerOnce - Only trigger animation once (default: true)
 * 
 * @returns isInView - Boolean indicating if element is in viewport
 * 
 * @example
 * const ref = useRef(null);
 * const isInView = useScrollReveal(ref, 0.2);
 * 
 * <motion.div
 *   ref={ref}
 *   animate={isInView ? 'visible' : 'hidden'}
 *   variants={variants}
 * />
 */
import { useEffect, useState, RefObject } from 'react';

export const useScrollReveal = (
  ref: RefObject<Element>,
  threshold: number = 0.2,
  triggerOnce: boolean = true
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already revealed and triggerOnce is true
    if (isInView && triggerOnce) return;

    const observer = createScrollObserver({
      threshold,
      callback: (entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          
          // Stop observing if triggerOnce is true
          if (triggerOnce) {
            observer?.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
    });

    if (observer) {
      observer.observe(element);
    }

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce, isInView]);

  return isInView;
};

/**
 * Utility to batch reveal multiple elements with stagger
 * 
 * @param selector - CSS selector for elements to reveal
 * @param staggerDelay - Delay between each element (ms)
 * @param threshold - IntersectionObserver threshold
 * 
 * @example
 * useEffect(() => {
 *   revealStaggered('.card', 100, 0.2);
 * }, []);
 */
export const revealStaggered = (
  selector: string,
  staggerDelay: number = 100,
  threshold: number = 0.2
): void => {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    const observer = createScrollObserver({
      threshold,
      callback: (entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * staggerDelay);
          
          observer?.unobserve(entry.target);
        }
      },
    });

    if (observer) {
      observer.observe(element);
    }
  });
};

/**
 * Progress indicator based on scroll position
 * Returns 0-100 representing scroll progress through element
 * 
 * @param ref - Element to track scroll progress
 * @returns progress - Number from 0-100
 */
export const useScrollProgress = (ref: RefObject<HTMLElement>): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element has scrolled past the top of viewport
      const scrolled = windowHeight - rect.top;
      const total = elementHeight + windowHeight;
      const percent = Math.max(0, Math.min(100, (scrolled / total) * 100));
      
      setProgress(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};

