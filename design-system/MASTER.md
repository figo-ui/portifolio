# Design System: Deep Dark Portfolio

## 1. Core Principles
- **Product Type:** Portfolio / Personal Showcase
- **Primary Style:** Motion-Driven + Minimalism
- **Aesthetic:** Deep Dark Glassmorphism
- **UX Goal:** Immersive, high-performance, and accessible.

## 2. Color Palette (Dark Mode)
- **Primary Background:** `#09090B` (Zinc-950)
- **Secondary Background (Cards):** `#18181B` (Zinc-900) with 40-60% opacity for glass effect.
- **Primary Text:** `#FAFAFA` (Zinc-50) (Ensures >4.5:1 contrast)
- **Secondary Text:** `#A1A1AA` (Zinc-400) (Ensures >3:1 contrast)
- **Brand/Accent:** `#3B82F6` (Blue-500)
- **Border/Divider:** `#27272A` (Zinc-800) with 50% opacity.

## 3. Typography
- **Primary Font:** Inter or equivalent modern sans-serif.
- **Display Headings:** Tracking-tight, bold (700-800 weight).
- **Body Text:** 16px minimum on mobile, line-height 1.6 for readability.
- **Font Pairing:** Use single variable font family to reduce loading layout shifts.

## 4. Interaction & Touch (CRITICAL)
- **Touch Targets:** Minimum 44x44px for all buttons and interactive icons.
- **Hover States:** Smooth opacity/scale transition (`scale-105`, `opacity-80`). DO NOT rely on hover alone; ensure focus states exist.
- **Focus Rings:** Visible focus rings for keyboard navigation (`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950`).

## 5. Animation (Motion-Driven)
- **Timing:** 150-300ms for micro-interactions (hover, active).
- **Easing:** Ease-out for entering elements, ease-in for exiting.
- **Accessibility:** Respect `prefers-reduced-motion` to disable non-essential decorative animations.
- **Performance:** Animate ONLY `transform` and `opacity`. Do NOT animate width/height or layout properties.

## 6. Glassmorphism Specifics
- **Backdrop Blur:** Use `backdrop-blur-md` or `backdrop-blur-lg`.
- **Background Opacity:** Keep it between `bg-white/5` and `bg-white/10` for dark themes.
- **Borders:** Add a subtle 1px border `border-white/10` to define the glass edge.
- **Shadows:** Avoid heavy drop shadows. Use subtle glow or inner shadows to emphasize depth.

## 7. Anti-Patterns to Avoid
- `no-emoji-icons`: Use SVG (Lucide/Heroicons) instead of emojis for UI structure.
- `contrast-failure`: Do not use grey text that falls below 3:1 contrast ratio.
- `instant-state-changes`: Do not switch states instantly (0ms) without transition.
- `layout-thrashing`: Do not trigger layout shifts during interactions.
