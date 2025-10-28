/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ChronicleHQ-inspired dark glass palette
        // Backgrounds
        'bg-primary': '#000000',
        'bg-secondary': '#050505',
        'bg-tertiary': '#0a0a0a',
        'bg-card': 'rgba(10, 10, 10, 0.7)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-glow': 'rgba(255, 255, 255, 0.03)',
        
        // Text
        'text-primary': '#ffffff',
        'text-secondary': '#9ca3af',
        'text-muted': '#6b7280',
        
        // Accent colors matching ChronicleHQ
        'accent-blue': '#06b6d4',
        'accent-cyan': '#22d3ee',
        'accent-purple': '#a78bfa',
        
        // Gradient stops
        'gradient-from': '#06b6d4',
        'gradient-via': '#a78bfa',
        'gradient-to': '#ec4899',
        
        // Glow effects
        'glow-blue': 'rgba(6, 182, 212, 0.4)',
        'glow-cyan': 'rgba(34, 211, 238, 0.4)',
        'glow-purple': 'rgba(167, 139, 250, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Display sizes
        'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 16px 48px 0 rgba(0, 0, 0, 0.5)',
        'glow-blue': '0 0 40px rgba(0, 217, 255, 0.3)',
        'glow-pink': '0 0 40px rgba(255, 0, 110, 0.3)',
        'glow-purple': '0 0 40px rgba(187, 0, 255, 0.3)',
        'inner-glow': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'radial-blue': 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        'radial-purple': 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
        'gradient-chronicle': 'linear-gradient(135deg, #06b6d4 0%, #a78bfa 50%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}

