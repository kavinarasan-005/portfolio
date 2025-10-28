/**
 * Content Section Component - Chronicle Exact Match
 * 
 * Two-column layout section matching Chronicle's content sections
 * Includes GSAP scroll-triggered animations
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContentSectionProps {
  heading: string;
  headingHighlight?: string;
  paragraph: string;
  bullets: string[];
  image?: string;
  reverse?: boolean;
}

export const ContentSection = ({
  heading,
  headingHighlight,
  paragraph,
  bullets,
  image,
  reverse = false,
}: ContentSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (contentRef.current && imageRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-container py-32"
      data-reverse={reverse}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div
          ref={contentRef}
          className={reverse ? 'lg:order-2' : ''}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heading.split(' ').map((word, i) => (
              <span key={i} className="mr-2">
                {word === headingHighlight ? (
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            {paragraph}
          </p>
          <ul className="space-y-4">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image/Visual */}
        <div
          ref={imageRef}
          className={`bg-white/5 rounded-2xl p-8 border border-white/10 ${reverse ? 'lg:order-1' : ''}`}
        >
          {image ? (
            <img src={image} alt="" className="w-full h-auto" loading="lazy" />
          ) : (
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

