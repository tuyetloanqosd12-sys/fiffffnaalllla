import React from 'react';

const UniverseCard = ({ title, items }) => (
  <div className="card">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
          <span className="text-emerald-500 mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FOMOUniverseSection = () => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">FOMO Universe</h2>
    
    {/* Desktop: First row - 3 columns */}
    <div className="hidden md:grid md:grid-cols-3 gap-6">
      <UniverseCard
        title="Pre-Mint BOX"
        items={['666 Total Boxes', '3 Rarity Levels', 'Used for Box Fusion']}
      />
      <UniverseCard
        title="Main Collection"
        items={['4,444 NFTs', '5 Rarity Tiers', 'XP Multipliers']}
      />
      <UniverseCard
        title="Box Fusion"
        items={['Burn 2 Boxes → 1 NFT', 'Rarity based on input', '~2% Hidden NFT chance']}
      />
    </div>

    {/* Mobile: First row - Horizontal scroll */}
    <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide mb-6">
      <div className="flex gap-4" style={{ width: 'max-content' }}>
        <div className="snap-center shrink-0" style={{ width: '280px' }}>
          <UniverseCard
            title="Pre-Mint BOX"
            items={['666 Total Boxes', '3 Rarity Levels', 'Used for Box Fusion']}
          />
        </div>
        <div className="snap-center shrink-0" style={{ width: '280px' }}>
          <UniverseCard
            title="Main Collection"
            items={['4,444 NFTs', '5 Rarity Tiers', 'XP Multipliers']}
          />
        </div>
        <div className="snap-center shrink-0" style={{ width: '280px' }}>
          <UniverseCard
            title="Box Fusion"
            items={['Burn 2 Boxes → 1 NFT', 'Rarity based on input', '~2% Hidden NFT chance']}
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
    
    {/* Desktop: Second row - 2 columns */}
    <div className="hidden md:grid md:grid-cols-2 gap-6 mt-6">
      <UniverseCard
        title="Hidden NFT"
        items={[
          'Secret layer (~2-5% of collection)',
          'x1.25 XP Multiplier',
          'Activation: Level 4 + 5 badges + 90 days'
        ]}
      />
      <UniverseCard
        title="Singularity NFT"
        items={[
          'Max 33 in existence',
          'x2.5 XP Boost',
          'Requires: Hidden NFT + Level 5 + All 7 badges',
          '90-day trading lock after transformation'
        ]}
      />
    </div>

    {/* Mobile: Second row - Horizontal scroll */}
    <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
      <div className="flex gap-4" style={{ width: 'max-content' }}>
        <div className="snap-center shrink-0" style={{ width: '280px' }}>
          <UniverseCard
            title="Hidden NFT"
            items={[
              'Secret layer (~2-5% of collection)',
              'x1.25 XP Multiplier',
              'Activation: Level 4 + 5 badges + 90 days'
            ]}
          />
        </div>
        <div className="snap-center shrink-0" style={{ width: '280px' }}>
          <UniverseCard
            title="Singularity NFT"
            items={[
              'Max 33 in existence',
              'x2.5 XP Boost',
              'Requires: Hidden NFT + Level 5 + All 7 badges',
              '90-day trading lock after transformation'
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  </div>
);

export default FOMOUniverseSection;
