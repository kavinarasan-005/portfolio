/**
 * Framer Motion animation variants for Chronicle-inspired portfolio
 * 
 * All animations respect prefers-reduced-motion and use smooth easing curves.
 * Timings are calibrated to match Chronicle's feel: fast enough to feel responsive,
 * slow enough to feel premium.
 */

// Custom easing curves matching Chronicle's animation feel
export const easings = {
  smooth: [0.22, 1, 0.36, 1], // ease-out-expo-like
  bounce: [0.68, -0.55, 0.265, 1.55], // slight overshoot
  spring: { type: "spring", stiffness: 100, damping: 15 },
};

/**
 * Hero section animations
 * Staggered reveal: heading → subheading → buttons → media
 */
export const heroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: easings.smooth,
      },
    },
  },
};

/**
 * Scroll reveal animations
 * Used for sections that animate in when scrolled into view
 */
export const scrollRevealVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

/**
 * Staggered grid animations
 * For feature cards, testimonials, etc.
 */
export const staggerGridVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
  },
};

/**
 * Card hover animation
 * Subtle lift and shadow increase
 */
export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
};

/**
 * Modal/drawer animations
 * Slide in from bottom with backdrop fade
 */
export const modalVariants = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2, delay: 0.1 },
    },
  },
  modal: {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
    exit: { 
      opacity: 0,
      y: 100,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: easings.smooth,
      },
    },
  },
};

/**
 * Navigation animations
 * Slide down/up with fade
 */
export const navVariants = {
  hidden: { 
    y: -100,
    opacity: 0,
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  exit: { 
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easings.smooth,
    },
  },
};

/**
 * Mobile menu drawer
 * Slide in from right
 */
export const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
};

/**
 * Carousel slide animations
 * Smooth slide with spring physics
 */
export const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

/**
 * Fade in/out utility
 */
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

/**
 * Scale in/out utility
 */
export const scaleVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
};

/**
 * Text reveal animation
 * Character-by-character or word-by-word reveal
 */
export const textRevealVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  },
  char: {
    hidden: { 
      opacity: 0,
      y: 10,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
};

/**
 * Button press animation
 * Quick scale down on press
 */
export const buttonPressVariants = {
  rest: { scale: 1 },
  pressed: { 
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

/**
 * Glow pulse animation
 * For attention-grabbing elements
 */
export const glowPulseVariants = {
  initial: { 
    boxShadow: "0 0 0px rgba(0, 217, 255, 0)",
  },
  animate: {
    boxShadow: [
      "0 0 0px rgba(0, 217, 255, 0)",
      "0 0 40px rgba(0, 217, 255, 0.6)",
      "0 0 0px rgba(0, 217, 255, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Utility: Get variants with reduced motion support
 * Returns simplified variants if user prefers reduced motion
 */
export const getVariantsWithReducedMotion = (
  variants: any,
  shouldReduce: boolean
) => {
  if (!shouldReduce) return variants;

  // Return instant transitions
  return Object.keys(variants).reduce((acc, key) => {
    acc[key] = {
      ...variants[key],
      transition: { duration: 0.01 },
    };
    return acc;
  }, {} as any);
};

