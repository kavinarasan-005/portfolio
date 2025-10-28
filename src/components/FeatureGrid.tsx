/**
 * FeatureGrid Component
 * 
 * 3-column grid of feature cards with:
 * - 3D tilt effect on hover
 * - Scroll reveal animation
 * - Glass card styling
 * - Icon + heading + description layout
 */

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon, Zap, Shield, Sparkles, Users, Layers, TrendingUp } from 'lucide-react';
import { staggerGridVariants } from '../animations/variants';
import { useScrollReveal } from '../animations/scrollReveal';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'blue' | 'pink' | 'purple';
}

// [PLACEHOLDER] Replace with your features
const features: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance that scales with your needs.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with industry standards.',
    color: 'pink',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Smart automation that learns from your workflow patterns.',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time sync and seamless sharing across your entire team.',
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Flexible Integration',
    description: 'Connect with 100+ tools you already use every day.',
    color: 'pink',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Deep insights into your productivity and progress metrics.',
    color: 'purple',
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = feature.icon;
  const colorClasses = {
    blue: 'text-accent-blue',
    pink: 'text-accent-pink',
    purple: 'text-accent-purple',
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-8 group cursor-pointer relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Icon */}
      <div className={`mb-4 ${colorClasses[feature.color]}`}>
        <Icon size={32} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed">
        {feature.description}
      </p>

      {/* Hover glow */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl bg-gradient-to-br from-${feature.color}/20 to-transparent`} />
    </motion.div>
  );
};

export const FeatureGrid = () => {
  const sectionRef = useRef(null);
  const isInView = useScrollReveal(sectionRef, 0.15);

  return (
    <section ref={sectionRef} className="section-container" id="features">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          className="text-display-sm md:text-display-md font-bold text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Everything you need to{' '}
          <span className="gradient-text">succeed</span>
        </motion.h2>
        <motion.p
          className="text-lg text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Powerful features designed to transform the way you work
        </motion.p>
      </div>

      {/* Feature Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerGridVariants.container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={staggerGridVariants.item}>
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

