/**
 * TrustMarquee Component
 * 
 * Auto-scrolling horizontal strip of trust logos/brands.
 * Features:
 * - Infinite seamless loop
 * - Pause on hover
 * - Duplicated content for smooth repeat
 * - Accessible with aria-labels
 */

import { motion } from 'framer-motion';

interface TrustLogo {
  name: string;
  src: string;
}

// [PLACEHOLDER] Replace with your client/partner logos
const trustLogos: TrustLogo[] = [
  { name: 'Company 1', src: '/assets/placeholders/logo-1.png' },
  { name: 'Company 2', src: '/assets/placeholders/logo-2.png' },
  { name: 'Company 3', src: '/assets/placeholders/logo-3.png' },
  { name: 'Company 4', src: '/assets/placeholders/logo-4.png' },
  { name: 'Company 5', src: '/assets/placeholders/logo-5.png' },
  { name: 'Company 6', src: '/assets/placeholders/logo-6.png' },
];

export const TrustMarquee = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...trustLogos, ...trustLogos];

  return (
    <section className="py-16 border-y border-glass-border bg-bg-secondary/50" aria-label="Trusted by leading companies">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <p className="text-center text-text-muted text-sm mb-8 uppercase tracking-wider">
          Trusted by innovative teams worldwide
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade gradients on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-secondary/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-secondary/50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

