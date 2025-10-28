/**
 * Hero Component
 * 
 * Large centered hero section with:
 * - Staggered reveal animations
 * - Mouse parallax effect on background
 * - Two CTA buttons
 * - Large media preview frame
 * 
 * Animation sequence: h1 → p → buttons → media frame
 */

import { motion, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { heroVariants } from '../animations/variants';
import { MediaFrame } from './MediaFrame';

export const Hero = () => {
  const { x, y } = useParallax({ strength: 0.03, type: 'mouse' });
  const shouldReduceMotion = useReducedMotion();
  
  // Transform parallax values for secondary gradient
  const xReverse = useTransform(x, (value) => value * -0.5);
  const yReverse = useTransform(y, (value) => value * -0.5);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients with Parallax */}
      <div className="absolute inset-0 -z-10">
        {/* Main radial gradient */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-radial-blue opacity-40"
          style={
            shouldReduceMotion
              ? {}
              : {
                  x,
                  y,
                }
          }
        />
        
        {/* Secondary gradient */}
        <motion.div
          className="absolute top-1/4 right-0 w-[1000px] h-[1000px] bg-radial-purple opacity-30"
          style={
            shouldReduceMotion
              ? {}
              : {
                  x: xReverse,
                  y: yReverse,
                }
          }
        />

        {/* Vignette overlay */}
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 text-center"
        variants={heroVariants.container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge / Tagline */}
        <motion.div
          variants={heroVariants.item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-glow-pulse" />
          <span className="text-sm text-text-secondary">
            {/* [PLACEHOLDER] Update with your tagline */}
            Next-generation workflow platform
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={heroVariants.item}
          className="text-display-md md:text-display-lg lg:text-display-xl font-bold text-text-primary mb-6 max-w-5xl mx-auto"
        >
          {/* [PLACEHOLDER] Replace with your main headline */}
          Transform Your{' '}
          <span className="gradient-text">Workflow</span>
          <br />
          Into Something Beautiful
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={heroVariants.item}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12"
        >
          {/* [PLACEHOLDER] Replace with your value proposition */}
          The all-in-one platform for creative professionals. Capture ideas,
          organize projects, and bring your vision to life with tools that
          feel natural.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroVariants.item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary CTA */}
          <a
            href="#signup"
            className="group px-8 py-4 rounded-xl bg-gradient-chronicle text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            Get Started Free
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          {/* Secondary CTA */}
          <a
            href="#demo"
            className="group px-8 py-4 rounded-xl glass-card hover:border-glass-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Play size={20} className="text-accent-blue" />
            <span className="font-semibold">Watch Demo</span>
          </a>
        </motion.div>

        {/* Hero Media Frame */}
        <motion.div variants={heroVariants.item}>
          <MediaFrame />
        </motion.div>

        {/* Social Proof / Stats (Optional) */}
        <motion.div
          variants={heroVariants.item}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-text-muted"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary gradient-text">
              50K+
            </div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary gradient-text">
              4.9/5
            </div>
            <div className="text-sm">User Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary gradient-text">
              99.9%
            </div>
            <div className="text-sm">Uptime</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-glass-border flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

