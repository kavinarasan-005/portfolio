# 🏗️ Component Hierarchy & Data Flow

Visual guide to how components are organized and connected.

---

## 📊 Application Structure

```
┌─────────────────────────────────────────────────────────┐
│                      index.html                         │
│  • HTML template                                        │
│  • Meta tags for SEO                                    │
│  • Viewport configuration                               │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                     src/main.tsx                        │
│  • React entry point                                    │
│  • ReactDOM.createRoot()                                │
│  • Imports globals.css                                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                      src/App.tsx                        │
│  • Main application component                           │
│  • Renders all page sections                            │
│  • Manages overall layout                               │
└────────────────────┬────────────────────────────────────┘
                     │
       ┌─────────────┼─────────────┐
       │             │             │
       ▼             ▼             ▼
  ┌────────┐   ┌─────────┐   ┌─────────┐
  │ Header │   │  Main   │   │ Footer  │
  └────────┘   └────┬────┘   └─────────┘
                    │
        ┌───────────┼───────────┬───────────┐
        │           │           │           │
        ▼           ▼           ▼           ▼
    ┌──────┐  ┌───────────┐ ┌──────┐  ┌──────────┐
    │ Hero │  │  Trust    │ │Feat- │  │ Content  │
    │      │  │  Marquee  │ │ures  │  │ Sections │
    └──┬───┘  └───────────┘ └──────┘  └──────────┘
       │
       │
       ▼
  ┌──────────┐
  │  Media   │
  │  Frame   │
  └──────────┘
```

---

## 🎯 Component Details

### 1. **Header Component** 🔝

```
Header
├── Logo/Brand
├── Desktop Navigation
│   ├── Features Link
│   ├── Templates Link
│   ├── Testimonials Link
│   └── Pricing Link
├── CTA Buttons
│   ├── Sign In
│   └── Get Started
└── Mobile Menu
    ├── Hamburger Button
    └── Drawer (animated)
        ├── Nav Links
        └── CTA Buttons

USES:
• useScrollDirection() hook
• useReducedMotion() hook
• Framer Motion (AnimatePresence, motion)
```

---

### 2. **Hero Component** 🎨

```
Hero
├── Background Layer
│   ├── Parallax Gradients
│   └── Vignette Overlay
├── Content Container
│   ├── Badge/Tagline
│   ├── Main Heading (animated)
│   ├── Subheading (animated)
│   ├── CTA Buttons (animated)
│   │   ├── Primary CTA
│   │   └── Secondary CTA
│   ├── MediaFrame Component
│   └── Social Proof Stats
└── Scroll Indicator

USES:
• useParallax() hook
• useReducedMotion() hook
• heroVariants (stagger animations)
• MediaFrame component
```

---

### 3. **MediaFrame Component** 🖼️

```
MediaFrame
├── Glow Effect (hover)
├── Glass Card Container
│   ├── Browser Dots (decorative)
│   ├── Content Area
│   │   ├── Image/Video/Carousel
│   │   └── Play Button Overlay
│   └── Shine Effect (hover)
└── Floating Elements (animated)

PROPS:
• type: 'image' | 'video' | 'carousel'
• src: string
• alt: string

USES:
• Framer Motion (motion, whileHover)
• useState for hover tracking
```

---

### 4. **TrustMarquee Component** 🏢

```
TrustMarquee
├── Section Label
└── Marquee Container
    ├── Fade Gradients (left/right)
    └── Scrolling Logos
        ├── Logo 1-6 (original)
        └── Logo 1-6 (duplicated)

DATA:
• trustLogos[] array
  - name: string
  - src: string

USES:
• Framer Motion (animate, whileHover)
• Infinite loop animation
```

---

### 5. **FeatureGrid Component** ⚡

```
FeatureGrid
├── Section Header
│   ├── Title (scroll reveal)
│   └── Description (scroll reveal)
└── Grid Container (3 columns)
    └── FeatureCard × 6
        ├── Icon (colored)
        ├── Title
        ├── Description
        └── Hover Glow

FeatureCard (sub-component)
├── 3D Tilt Effect
│   ├── rotateX
│   └── rotateY
└── Mouse Tracking

DATA:
• features[] array
  - icon: LucideIcon
  - title: string
  - description: string
  - color: 'blue' | 'pink' | 'purple'

USES:
• useScrollReveal() hook
• staggerGridVariants
• Framer Motion (3D transforms)
```

---

### 6. **Footer Component** 🎬

```
Footer
├── Background Wordmark (parallax)
├── Content Grid
│   ├── Brand Column
│   │   ├── Logo
│   │   ├── Tagline
│   │   └── Social Links × 4
│   └── Link Columns × 4
│       ├── Product
│       ├── Company
│       ├── Resources
│       └── Legal
├── Newsletter Signup
│   ├── Email Input
│   └── Submit Button
└── Bottom Bar
    ├── Copyright
    └── Legal Links

DATA:
• footerLinks{} object
• socialLinks[] array

USES:
• useParallax() hook
• Framer Motion (parallax effect)
```

---

## 🔄 Data Flow

### Static Data (constants)
```
components/TrustMarquee.tsx
  → trustLogos[] array

components/FeatureGrid.tsx
  → features[] array

components/Footer.tsx
  → footerLinks{} object
  → socialLinks[] array
```

### Dynamic State
```
Header
  → [mobileMenuOpen, setMobileMenuOpen]
  → [scrolled, setScrolled]

MediaFrame
  → [isHovered, setIsHovered]
  → [showPlayButton, setShowPlayButton]

FeatureCard
  → mouseX, mouseY (motion values)
```

### Context Flow
```
None - All components are independent
(Can add Context for theme, user data, etc.)
```

---

## 🪝 Custom Hooks Usage

### useScrollDirection()
```
Used by: Header
Purpose: Hide nav on scroll down, show on scroll up
Returns: 'up' | 'down' | null
```

### useScrollReveal()
```
Used by: FeatureGrid
Purpose: Trigger animations when in viewport
Returns: boolean (isInView)
```

### useParallax()
```
Used by: Hero, Footer
Purpose: Mouse/scroll parallax effects
Returns: { x, y } motion values
```

### useReducedMotion()
```
Used by: Header, Hero, all animated components
Purpose: Respect user's motion preferences
Returns: boolean (shouldReduceMotion)
```

---

## 🎨 Animation Variants Usage

### heroVariants
```
Used by: Hero component
Effects:
  • container.staggerChildren (0.15s delay)
  • item.fadeInUp (y: 20 → 0, opacity: 0 → 1)
```

### navVariants
```
Used by: Header component
Effects:
  • slideDown from top
  • fadeIn opacity
```

### staggerGridVariants
```
Used by: FeatureGrid component
Effects:
  • container.staggerChildren (0.1s delay)
  • item.fadeInUp with scale
```

### mobileMenuVariants
```
Used by: Header mobile drawer
Effects:
  • slideInRight from off-screen
  • smooth open/close
```

---

## 🎯 Component Communication

```
App.tsx (Parent)
  │
  ├─► Header (no props)
  │     │
  │     └─► Internal state only
  │
  ├─► Hero (no props)
  │     │
  │     └─► MediaFrame ({ type, src, alt })
  │
  ├─► TrustMarquee (no props)
  │     │
  │     └─► Uses local trustLogos data
  │
  ├─► FeatureGrid (no props)
  │     │
  │     └─► Uses local features data
  │           │
  │           └─► FeatureCard ({ feature })
  │
  └─► Footer (no props)
        │
        └─► Uses local links data
```

**All components are self-contained** with their own data and state.

---

## 📦 Import Dependencies

```
External:
  • react
  • react-dom
  • framer-motion
  • lucide-react

Internal:
  • hooks/useScrollDirection
  • hooks/useScrollReveal
  • hooks/useParallax
  • hooks/useReducedMotion
  • animations/variants
  • animations/scrollReveal
  • styles/globals.css
```

---

## 🔄 Rendering Order

1. **index.html** loads
2. **main.tsx** executes
   - Imports globals.css
   - Creates React root
3. **App.tsx** renders
4. **Header** mounts
   - Starts scroll listeners
5. **Hero** mounts
   - Starts parallax
   - Triggers stagger animations
6. **TrustMarquee** mounts
   - Starts infinite scroll
7. **FeatureGrid** mounts
   - Waits for scroll reveal
8. **Footer** mounts
   - Starts parallax

---

## 🎯 Key Takeaways

✅ **Flat Structure** - No deep nesting, easy to understand  
✅ **Self-Contained** - Each component manages its own data  
✅ **Reusable Hooks** - Animation logic extracted to hooks  
✅ **Performance** - Lazy animations, GPU-accelerated  
✅ **Accessibility** - Semantic HTML, ARIA labels  
✅ **Maintainable** - Clear separation of concerns  

---

**This hierarchy makes it easy to:**
- Add new sections
- Modify existing components
- Extract data to external sources
- Add state management (Context/Redux)
- Test components independently

---

*Visual guide to understanding the Chronicle Portfolio architecture*

