# Route Skeleton Documentation

## Overview
Complete route skeleton with shared navigation shell for the Job Notification App.

## Routes Created

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main landing page |
| `/saved` | Saved | Saved jobs section |
| `/digest` | Digest | Email digest settings |
| `/settings` | Settings | User settings |
| `/proof` | Proof | Proof section |
| `*` | NotFound | 404 page for unknown routes |

## Navigation Features

### Top Navigation Bar
- **Links**: Dashboard | Saved | Digest | Settings | Proof
- **Active State**: Deep red underline (#8B0000)
- **Hover**: Subtle color change (no flashy effects)
- **No page reloads**: Client-side routing only

### Responsive Behavior
- **Desktop**: Horizontal navigation links
- **Mobile (< 768px)**: Hamburger menu with clean dropdown panel
- **Same design rules**: No gradients, no neon, minimal animation

## Design System Compliance

✅ Off-white background (#F7F6F3)
✅ Deep red accent (#8B0000) for active state
✅ Serif headings (Georgia)
✅ Sans-serif body text (system fonts)
✅ Maximum 720px text width on placeholder pages
✅ Calm, high-whitespace layout
✅ No heavy shadows or flashy effects
✅ Transitions: 200ms ease-in-out

## Placeholder Pages
Each route renders:
- Large serif heading showing page name
- Muted subtext: "This section will be built in the next step."
- Centered layout with generous whitespace
- No additional content, data, or business logic

## 404 Page
- Shown for unknown routes
- Title: "Page Not Found"
- Subtext: "The page you are looking for does not exist."
- Never shows blank screen

## File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── TopNavigation.jsx + .css
│   └── pages/
│       ├── Dashboard.jsx
│       ├── Saved.jsx
│       ├── Digest.jsx
│       ├── Settings.jsx
│       ├── Proof.jsx
│       ├── NotFound.jsx
│       └── PlaceholderPage.jsx + .css
├── App.jsx (Router setup)
└── main.jsx
```

## Navigation Behavior Notes
- Clicking active link does NOT reload or flicker
- React Router NavLink handles active state automatically
- Mobile menu closes automatically on link click
- No full page reloads between routes
