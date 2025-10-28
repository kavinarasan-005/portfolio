# 📸 Asset Placeholders

Replace these placeholder references with your actual assets.

## Required Images

### 1. Hero Preview
**File**: `hero-preview.png`  
**Dimensions**: 1200 x 675px (16:9 aspect ratio)  
**Format**: PNG or WebP  
**Purpose**: Main product/portfolio preview in hero section  
**Tips**: Use a high-quality screenshot or mockup. Compress for web.

---

### 2. Trust Logos (6 total)
**Files**: `logo-1.png` through `logo-6.png`  
**Dimensions**: Any width, height ~100px recommended  
**Format**: PNG with transparency or SVG  
**Purpose**: Client/partner logos in marquee  
**Tips**: Keep logos monochrome or grayscale. Will auto-scale.

---

### 3. Open Graph Image
**File**: `og-image.png`  
**Dimensions**: 1200 x 630px (required for social media)  
**Format**: PNG or JPG  
**Purpose**: Social sharing preview (Twitter, LinkedIn, Facebook)  
**Tips**: Include your brand name and tagline. High contrast.

---

## Optional Images

### 4. Favicon
**File**: `/public/favicon.ico`  
**Dimensions**: 32x32px, 16x16px (multi-size ICO)  
**Format**: ICO or PNG  
**Purpose**: Browser tab icon

### 5. Apple Touch Icon
**File**: `/public/apple-touch-icon.png`  
**Dimensions**: 180 x 180px  
**Format**: PNG  
**Purpose**: iOS home screen icon

### 6. Additional Screenshots
Create subfolders as needed:
- `/public/assets/screenshots/` - Product screenshots
- `/public/assets/illustrations/` - Custom illustrations
- `/public/assets/icons/` - Custom icons

---

## Image Optimization Tips

1. **Compress images**: Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. **Use WebP**: Modern format with better compression
3. **Add alt text**: Describe every image for accessibility
4. **Lazy load**: Images below fold should load lazily
5. **Responsive images**: Provide multiple sizes for different devices

---

## Quick Reference

```
public/
├── assets/
│   ├── placeholders/
│   │   ├── hero-preview.png      ← Main product preview
│   │   ├── logo-1.png             ← Trust logo 1
│   │   ├── logo-2.png             ← Trust logo 2
│   │   ├── logo-3.png             ← Trust logo 3
│   │   ├── logo-4.png             ← Trust logo 4
│   │   ├── logo-5.png             ← Trust logo 5
│   │   └── logo-6.png             ← Trust logo 6
│   └── og-image.png               ← Social sharing image
├── favicon.ico                    ← Browser tab icon
└── apple-touch-icon.png           ← iOS home screen icon
```

---

## Usage in Code

Images in `/public/` are referenced from root:

```tsx
// ✅ Correct
<img src="/assets/placeholders/hero-preview.png" alt="Product preview" />

// ❌ Wrong
<img src="assets/placeholders/hero-preview.png" alt="Product preview" />
```

---

## Placeholder Services (For Testing)

If you need temporary placeholder images:

- **Unsplash**: https://unsplash.com/ (free high-quality photos)
- **Placeholder.com**: https://placeholder.com/ (simple colored placeholders)
- **Lorem Picsum**: https://picsum.photos/ (random photos)

Example:
```tsx
<img src="https://picsum.photos/1200/675" alt="Temporary placeholder" />
```

---

**Remember**: Replace all placeholders before deploying to production!

