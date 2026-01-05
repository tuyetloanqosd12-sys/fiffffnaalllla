# FOMO Strategy - NFT Auction & Buyback Platform

![FOMO Platform](https://img.shields.io/badge/Status-Active-emerald) ![React](https://img.shields.io/badge/React-18.x-blue) ![FastAPI](https://img.shields.io/badge/FastAPI-Python-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

A sophisticated NFT auction platform integrated with an automated buyback & burn strategy. Users can participate in blind auctions for unique NFTs that are designed to appreciate in value over time through the perpetual buyback mechanism.

## 🎯 Overview

FOMO Strategy combines two powerful mechanisms:
1. **NFT Auction** - Blind bidding system for 4,444 unique NFTs with gamification
2. **Buyback & Burn Strategy** - Automated treasury management that continuously buys back and burns NFTs, creating perpetual price growth

## ✨ Features

### Auction Page
- **Live Auction Interface** - Real-time bidding with countdown timer
- **Place Bid Panel** - Minimalist design with bid bonuses (Higher Bid, Early Bidder)
- **Gamification Mechanics** - XP rewards, rarity tiers, leaderboards
- **Strategy Value Section** - Educational block explaining NFT value growth
- **NFT Box Collection** - Pre-mint box showcase with horizontal scroll
- **Live Activity Feed** - Real-time bid notifications and stats

### Strategy Page (Enter App)
- **Treasury Dashboard** - Live treasury balance and metrics
- **Buyback Mechanism** - Visual explanation of the buyback flow
- **Token Swap Interface** - Integrated swap functionality
- **Performance Charts** - Historical data visualization

### Home Page (About)
- **FOMO Strategy Explanation** - Detailed breakdown of how the system works
- **How It Works** - Step-by-step guide
- **FAQ Section** - Common questions answered
- **Trust Indicators** - Security and verification badges

## 🏗️ Project Structure

```
/app
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── auction/         # Auction page components
│   │   │   │   ├── PlaceBidPanel.js        # Main bid interface
│   │   │   │   ├── StrategyValueSection.js # NEW: Strategy explanation
│   │   │   │   ├── AuctionHeroSection.js   # Hero with timer
│   │   │   │   ├── AuctionChart.js         # Price/activity chart
│   │   │   │   ├── GamificationMechanics.js
│   │   │   │   ├── TopBidders.js
│   │   │   │   ├── LiveActivity.js
│   │   │   │   ├── RecentActivity.js
│   │   │   │   ├── HowAuctionWorks.js
│   │   │   │   ├── RaritySection.js
│   │   │   │   ├── NFTBoxCollectionSection.js
│   │   │   │   ├── NFTUtilitySection.js
│   │   │   │   ├── UserEvolutionSection.js
│   │   │   │   ├── FOMOUniverseSection.js
│   │   │   │   ├── LastChanceSection.js
│   │   │   │   ├── AuctionCTASection.js
│   │   │   │   ├── BidModal.js
│   │   │   │   ├── ActivityHintToast.js
│   │   │   │   └── index.js
│   │   │   ├── home/            # Home/About page components
│   │   │   │   ├── HeroSection.js
│   │   │   │   ├── WhatIsStrategySection.js
│   │   │   │   ├── HowItWorksSection.js
│   │   │   │   ├── WhatItDeliversSection.js
│   │   │   │   ├── ScenariosSection.js
│   │   │   │   ├── FAQSection.js
│   │   │   │   ├── CTASection.js
│   │   │   │   └── index.js
│   │   │   ├── strategy/        # Strategy page components
│   │   │   │   ├── DonutChart.js
│   │   │   │   ├── StrategyPressure.js
│   │   │   │   ├── FlowSteps.js
│   │   │   │   └── index.js
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Tooltip.js
│   │   │   ├── CookieConsent.js
│   │   │   ├── FloatingShapes.js
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Auction.js       # Main auction page
│   │   │   ├── Strategy.js      # Strategy dashboard
│   │   │   └── Home.js          # About/Info page
│   │   ├── context/
│   │   │   └── Web3Context.js   # Web3 wallet integration
│   │   ├── App.js               # Main app with routing
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/                     # FastAPI Backend
│   ├── server.py                # Main API server
│   ├── requirements.txt
│   └── .env
│
├── README.md
├── QUICKSTART.md
└── CHANGELOG.md
```

## 🚀 Recent Updates (v2.0)

### PlaceBidPanel Redesign
- Minimalist gray color palette with single emerald accent
- Two-column bonus layout (Higher Bid ⭐ / Early Bidder ⏱)
- Integrated minimum bid hint in button
- Stats section below button (Total Bids / Participants)

### New: Strategy Value Section
- Educational block explaining NFT value appreciation
- 4-step animated flow with custom SVG icons:
  1. You Buy NFT → 2. Strategy Works → 3. Buyback & Burn → 4. Floor Rises
- Dark stats block (Perpetual Buyback / Decreasing Supply / Rising Floor)
- Navigation link to About page

### Navigation System
- Global navigation via custom events
- Smooth scroll on page transitions
- Cross-component communication

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TailwindCSS, Framer Motion |
| Backend | FastAPI (Python) |
| Database | MongoDB |
| UI Components | Shadcn/ui |
| Animations | Framer Motion |
| Icons | Custom SVG, Heroicons |

## 📱 Mobile Responsive

All pages are optimized for mobile with:
- Horizontal scroll for card sections
- Adaptive grid layouts
- Touch-friendly interactions
- Scroll snap for carousels

## 🎨 Design System

### Colors
- **Primary**: Gray scale (gray-50 to gray-900)
- **Accent**: Emerald (emerald-400 to emerald-600)
- **Text**: gray-900 (headings), gray-500 (body)

### Typography
- **Headings**: Bold, text-3xl to text-4xl
- **Body**: Regular, text-sm to text-base
- **Labels**: Semibold, text-xs uppercase

### Components
- Rounded corners: rounded-xl to rounded-2xl
- Shadows: shadow-sm to shadow-lg
- Borders: border-gray-100 to border-gray-200

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

Built with ❤️ by FOMO Team
