# Design System - Quick Reference

## Color Palette
- **Background**: `#F7F6F3` (off-white)
- **Surface**: `#FFFFFF` (white)
- **Text Primary**: `#111111` (near black)
- **Text Secondary**: `#666666` (gray)
- **Accent**: `#8B0000` (deep red)
- **Success**: `#4A7C59` (muted green)
- **Warning**: `#B8860B` (muted amber)
- **Border**: `#E5E5E5` (light gray)

## Typography
- **Headings**: Georgia, serif (32px, 24px, 20px)
- **Body**: System sans-serif (16px base)
- **Line-height**: 1.6-1.8

## Spacing Scale
Only use these values:
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 40px
- `--space-5`: 64px

## Components

### Layout
- TopBar
- ContextHeader
- PrimaryWorkspace (70%)
- SecondaryPanel (30%)
- ProofFooter

### UI Elements
- Button (primary, secondary)
- Card (small, medium, large padding)
- Input (with error states)
- Badge (default, accent, success, warning)
- ProgressIndicator
- Checklist

## Design Principles
✓ Calm, intentional, coherent, confident
✓ Not flashy, not playful, not hackathon-style
✗ No gradients
✗ No glassmorphism
✗ No neon colors
✗ No animation noise
✗ No decorative fonts
✗ No random spacing values

## Component Structure
Every page follows:
```
[Top Bar]
[Context Header]
[Primary Workspace (70%)] + [Secondary Panel (30%)]
[Proof Footer]
```

## Transitions
- Duration: 150-200ms
- Easing: ease-in-out
- No bounce, no parallax
