# Changelog

All notable changes to FOMO Strategy platform.

## [2.0.0] - 2026-01-05

### Added

#### New Components
- **StrategyValueSection** (`/components/auction/StrategyValueSection.js`)
  - Educational section explaining NFT value growth through buyback mechanism
  - 4-step animated flow: Buy NFT → Strategy Works → Buyback & Burn → Floor Rises
  - Custom SVG icons in gray palette (target, clock, flame, chart)
  - Dark stats block with key metrics
  - Navigation link to About page

#### Navigation System
- Global navigation via `window.dispatchEvent` custom events
- `navigateTo` event listener in App.js
- Smooth scroll on page transitions

### Changed

#### PlaceBidPanel Redesign
- **Before**: Colorful "rainbow" design with multiple accent colors
- **After**: Minimalist gray palette with single emerald accent

**New Features:**
- Two-column bonus layout (Higher Bid / Early Bidder)
- Emoji icons (⭐ / ⏱) instead of colored SVGs
- Minimum bid integrated into button text: "Place Bid (min 100 USDC)"
- Stats section below button with large numbers:
  - Total Bids (left)
  - Participants (right)
  - Vertical divider between stats

#### File Changes
- `App.js` - Added useEffect for navigation events
- `auction/index.js` - Added StrategyValueSection export
- `Auction.js` - Integrated StrategyValueSection after LastChanceSection

### Design Guidelines Established

#### Color Palette
- Primary: Gray scale (gray-50 to gray-900)
- Accent: Emerald (emerald-400, emerald-500, emerald-600)
- Avoid: Multi-color designs, rainbow effects

#### Icons
- Use custom SVG icons
- Gray fill/stroke colors
- NO emoji in main UI (except small indicators)
- Rounded shapes preferred

#### Layout
- Rounded corners: rounded-xl, rounded-2xl
- Subtle shadows: shadow-sm
- Border: border-gray-100, border-gray-200

---

## [1.x.x] - Previous Versions

### Features Implemented
- Auction page with bidding system
- Strategy page with treasury dashboard
- Home/About page with explanations
- Mobile responsive design
- Tooltip system
- Cookie consent
- NFT Box Collection section
- Gamification mechanics
- Live activity feed
- Top bidders leaderboard
