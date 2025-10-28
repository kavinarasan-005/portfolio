/**
 * MediaFrame Component
 * 
 * Dark device mockup frame with inner carousel/video preview.
 * Features:
 * - Device-style border with shadow
 * - Hover interactions (subtle scale + glow)
 * - Placeholder for screenshot carousel or video
 * - Optional play button overlay
 */

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface MediaFrameProps {
  type?: 'image' | 'video' | 'carousel';
  src?: string;
  alt?: string;
}

export const MediaFrame = ({
  type = 'image',
  src = '/assets/placeholders/hero-preview.png',
  alt = 'Product preview',
}: MediaFrameProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(type === 'video');

  return (
    <motion.div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-3xl -z-10"
        animate={{
          opacity: isHovered ? 0.6 : 0.3,
          scale: isHovered ? 1.05 : 1,
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Device Frame */}
      <div className="glass-card p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl">
        {/* Inner Content Area */}
        <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-bg-secondary">
          {/* Image/Video/Carousel Content */}
          {type === 'image' && (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          )}

          {type === 'video' && (
            <video
              src={src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          {type === 'carousel' && (
            <div className="w-full h-full flex items-center justify-center">
              {/* Placeholder for carousel - implement CarouselPreview component */}
              <div className="text-text-muted">Carousel Preview</div>
            </div>
          )}

          {/* Play Button Overlay (for video type) */}
          {showPlayButton && (
            <motion.button
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm group"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              onClick={() => setShowPlayButton(false)}
              aria-label="Play video"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={32} className="text-white ml-1" fill="white" />
              </motion.div>
            </motion.button>
          )}

          {/* Shine Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          {/* Inner Glow */}
          <div className="absolute inset-0 shadow-inner-glow pointer-events-none" />
        </div>

        {/* Browser-style Dots (Optional decorative element) */}
        <div className="absolute top-5 left-5 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>

      {/* Floating Elements (decorative) */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent-purple/20 blur-2xl"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent-blue/20 blur-2xl"
        animate={{
          y: [0, 10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </motion.div>
  );
};

