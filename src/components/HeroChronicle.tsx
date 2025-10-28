/**
 * Hero Component - Chronicle Exact Match
 * 
 * Features:
 * - GSAP word-by-word reveal animation
 * - Exact typography matching ChronicleHQ.com
 * - Staggered button animations
 * - Template pills horizontal scroll
 * - Keyboard accessible
 * - prefers-reduced-motion support
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const templateTypes = [
  'Product showcase',
  'Pitch deck',
  'Portfolio',
  'Business update',
  'Project plan',
  'Research report',
  'Marketing campaign',
  'Sales proposal',
];

export const HeroChronicle = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Show all content immediately
      if (headingRef.current && subheadingRef.current && buttonsRef.current) {
        gsap.set([headingRef.current.children, subheadingRef.current.children, buttonsRef.current.children], {
          opacity: 1,
          y: 0,
        });
      }
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      // Hero word-by-word reveal
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        tl.from(words, {
          opacity: 0,
          y: 20,
          rotateX: -90,
          transformOrigin: '50% 100%',
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.2)',
        }, 0.2);
      }

      // Subheading word reveal
      if (subheadingRef.current) {
        const subWords = subheadingRef.current.querySelectorAll('.word');
        tl.from(subWords, {
          opacity: 0,
          y: 10,
          stagger: 0.02,
          duration: 0.6,
        }, 0.6);
      }

      // Buttons
      if (buttonsRef.current) {
        tl.from(buttonsRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
        }, 1.2);
      }

      // Template pills
      if (pillsRef.current) {
        tl.from(pillsRef.current.children, {
          opacity: 0,
          scale: 0.8,
          stagger: 0.05,
          duration: 0.5,
        }, 1.4);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Background gradient - subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black -z-10" />

      <div className="max-w-7xl w-full mx-auto text-center">
        {/* Main Heading - Word by Word */}
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]"
          style={{ perspective: '1000px' }}
        >
          <span className="block mb-2">
            <span className="word inline-block mx-1 opacity-0">Every</span>
            <span className="word inline-block mx-1 opacity-0">great</span>
            <span className="word inline-block mx-1 opacity-0">presentation</span>
          </span>
          <span className="block">
            <span className="word inline-block mx-1 opacity-0">starts</span>
            <span className="word inline-block mx-1 opacity-0">with</span>
            <span className="word inline-block mx-1 opacity-0">a</span>
            <span className="word inline-block mx-1 opacity-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Chronicle
            </span>
          </span>
        </h1>

        {/* Subheading - Word by Word */}
        <p
          ref={subheadingRef}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          <span className="word inline-block mx-0.5 opacity-0">Create</span>
          <span className="word inline-block mx-0.5 opacity-0">stunning</span>
          <span className="word inline-block mx-0.5 opacity-0">presentations.</span>
          <span className="word inline-block mx-0.5 opacity-0">No</span>
          <span className="word inline-block mx-0.5 opacity-0">design</span>
          <span className="word inline-block mx-0.5 opacity-0">skills</span>
          <span className="word inline-block mx-0.5 opacity-0">required.</span>
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#signup"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Try for free</span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
          
          <a
            href="#demo"
            className="group flex items-center gap-2 px-8 py-4 border border-gray-700 text-white font-semibold rounded-xl hover:border-gray-500 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            <span>Watch video</span>
          </a>
        </div>

        {/* Template Pills - Horizontal Scroll */}
        <div className="relative">
          <p className="text-sm text-gray-500 mb-4">Choose your story type</p>
          <div
            ref={pillsRef}
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center flex-wrap"
            role="list"
            aria-label="Template types"
          >
            {templateTypes.map((template, index) => (
              <button
                key={template}
                className="flex-shrink-0 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                tabIndex={0}
                style={{ opacity: 0 }}
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <p className="text-sm text-gray-600 mt-16">
          Used by 5000+ teams who value storytelling
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 -z-10 pointer-events-none" />
    </section>
  );
};

