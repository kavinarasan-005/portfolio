/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark glass aesthetic color palette
        'bg-primary': '#000000',
        'bg-secondary': '#0a0a0a',
        'bg-tertiary': '#0f0f0f',
        'bg-card': 'rgba(15, 15, 15, 0.8)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-glow': 'rgba(255, 255, 255, 0.05)',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        'accent-blue': '#00d9ff',
        'accent-pink': '#ff006e',
        'accent-purple': '#bb00ff',
        'glow-blue': 'rgba(0, 217, 255, 0.3)',
        'glow-pink': 'rgba(255, 0, 110, 0.3)',
        'glow-purple': 'rgba(187, 0, 255, 0.3)',
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
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}

