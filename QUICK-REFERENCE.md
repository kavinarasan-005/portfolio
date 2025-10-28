# 🚀 Chronicle Portfolio - Quick Reference Card

**Print or bookmark this page for instant reference!**

---

## ⚡ 3-Step Launch

```bash
cd chronicle          # 1. Enter directory
npm install          # 2. Install dependencies (2-3 min)
npm run dev          # 3. Start dev server → localhost:5173
```

---

## 📝 Common Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm run dev` | Start dev server | During development |
| `npm run build` | Build for production | Before deploying |
| `npm run preview` | Preview build | Test production locally |
| `npm run type-check` | Check TypeScript | Find type errors |
| `npm run lint` | Check code quality | Before committing |

---

## 🎨 Design Tokens (Quick Reference)

### Colors
```css
/* Backgrounds */
--bg-primary: #000000
--bg-secondary: #050505
--bg-tertiary: #0a0a0a

/* Accents */
--accent-blue: #00d9ff
--accent-pink: #ff006e
--accent-purple: #bb00ff

/* Text */
--text-primary: #ffffff
--text-secondary: #a3a3a3
--text-muted: #737373
```

### Typography
```css
/* Display Sizes */
text-display-sm    /* 36px - Mobile hero */
text-display-md    /* 48px - Tablet hero */
text-display-lg    /* 60px - Desktop hero */
text-display-xl    /* 72px - Large hero */

/* Headings */
text-2xl    /* 24px - Section titles */
text-3xl    /* 30px - Card titles */
text-4xl    /* 36px - Page headings */
```

### Spacing
```css
/* Section Padding */
section-container  /* py-20 (80px vertical) */

/* Component Gaps */
gap-4   /* 16px - tight spacing */
gap-6   /* 24px - default spacing */
gap-8   /* 32px - loose spacing */
gap-12  /* 48px - section spacing */
```

---

## 🔧 File Locations (Cheat Sheet)

| What to Edit | File Path | Purpose |
|--------------|-----------|---------|
| **Hero headline** | `src/components/Hero.tsx` | Main H1 text |
| **Brand name** | `src/components/Header.tsx` | Logo/nav |
| **Colors** | `tailwind.config.js` | Color palette |
| **Meta tags** | `index.html` | SEO/social |
| **Features** | `src/components/FeatureGrid.tsx` | Feature cards |
| **Footer links** | `src/components/Footer.tsx` | Nav/social |
| **Trust logos** | `src/components/TrustMarquee.tsx` | Logo paths |

---

## 🖼️ Asset Checklist

- [ ] `public/assets/placeholders/hero-preview.png` (1200x675)
- [ ] `public/assets/placeholders/logo-1.png` → logo-6.png
- [ ] `public/og-image.png` (1200x630 for social)
- [ ] `public/favicon.ico` (32x32 icon)
- [ ] `public/apple-touch-icon.png` (180x180)

---

## 🔍 Find & Replace Guide

### 1. Brand Name
**Search:** `Chronicle`  
**Replace:** `YourBrand`  
**Files:** Header, Footer, index.html

### 2. Placeholder Text
**Search:** `[PLACEHOLDER]`  
**Find all:** 15 locations  
**Replace:** Your actual content

### 3. Email
**Search:** `hello@example.com`  
**Replace:** Your email  
**Files:** Footer.tsx

### 4. Social Links
**Search:** `href="#"`  
**Replace:** Your actual URLs  
**Files:** Footer.tsx

---

## 🎯 Customization Priority

### Phase 1: Content (15 min)
1. Replace hero headline & tagline
2. Update brand name in header/footer
3. Change feature descriptions
4. Add your email & social links

### Phase 2: Assets (10 min)
1. Add hero preview image
2. Add trust logos (6 images)
3. Add OG image for social sharing
4. Add favicon

### Phase 3: Styling (5 min)
1. Adjust accent colors in `tailwind.config.js`
2. Test on mobile/tablet/desktop

### Phase 4: Deploy (10 min)
1. Run `npm run build`
2. Test `npm run preview`
3. Deploy to Vercel/Netlify

**Total time: ~40 minutes** ⚡

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm install` fails | Check Node version (need 18+) |
| Port 5173 in use | Change in `vite.config.ts` or kill process |
| TypeScript errors | Run `npm run type-check` to see details |
| Styles not loading | Check `globals.css` imported in `main.tsx` |
| Build fails | Clear cache: `rm -rf node_modules && npm install` |
| Images not showing | Ensure images in `/public/` directory |

---

## 📱 Responsive Breakpoints

```css
/* Mobile first! */
<640px   /* Mobile */
640px    /* sm: Mobile landscape */
768px    /* md: Tablet */
1024px   /* lg: Desktop */
1280px   /* xl: Large desktop */
1536px   /* 2xl: Extra large */
```

**Test on:** iPhone SE (375px), iPad (768px), Desktop (1920px)

---

## ♿ Accessibility Quick Checks

- [ ] All images have `alt` text
- [ ] Keyboard tab through all links/buttons
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Check color contrast (use browser DevTools)
- [ ] Test with "Reduce Motion" enabled
- [ ] Run Lighthouse audit (aim for 95+)

---

## 🚀 Deployment Checklist

- [ ] Replace all `[PLACEHOLDER]` text
- [ ] Add all assets to `/public/`
- [ ] Update meta tags in `index.html`
- [ ] Update OG image
- [ ] Test on mobile/tablet/desktop
- [ ] Run `npm run build` successfully
- [ ] Test `npm run preview`
- [ ] Run Lighthouse audit
- [ ] Deploy to hosting

---

## 📊 Performance Targets

| Metric | Target | Priority |
|--------|--------|----------|
| **First Contentful Paint** | < 1.5s | High |
| **Largest Contentful Paint** | < 2.5s | Critical |
| **Total Blocking Time** | < 200ms | Medium |
| **Cumulative Layout Shift** | < 0.1 | High |
| **Time to Interactive** | < 3.5s | Medium |

---

## 🔗 Essential Links

- **Framer Motion**: https://framer.com/motion
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Vite Docs**: https://vitejs.dev
- **WCAG Guidelines**: https://w3.org/WAI/WCAG21

---

## 💡 Pro Tips

✨ **Use WebP images** - 30% smaller than PNG  
✨ **Compress images** - Use TinyPNG or Squoosh  
✨ **Test early** - Check mobile first  
✨ **Keep animations subtle** - Less is more  
✨ **Run Lighthouse often** - Catch issues early  
✨ **Get feedback** - Show to real users  

---

## 🎉 Ready to Ship?

✅ Content customized  
✅ Assets added  
✅ Colors adjusted  
✅ Tested on devices  
✅ Lighthouse score 90+  
✅ Build successful  

**You're ready to deploy! 🚀**

---

**Need help?** Check `SETUP-GUIDE.md` for detailed walkthrough.  
**Want details?** Read `COMPLETION-SUMMARY.md` for full features.  
**Lost?** See `FILE-STRUCTURE.md` for file locations.

---

*Built with React + TypeScript + Tailwind + Framer Motion*  
*Chronicle-inspired design | Production-ready | Fully accessible*

