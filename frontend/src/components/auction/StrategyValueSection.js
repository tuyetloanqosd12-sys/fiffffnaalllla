import React from 'react';
import { motion } from 'framer-motion';

const StrategyValueSection = () => {
  const steps = [
    {
      num: '01',
      title: 'You Buy NFT',
      desc: 'Participate in auction and get unique NFT at floor price',
      icon: '🎯'
    },
    {
      num: '02',
      title: 'Strategy Works',
      desc: 'Trading fees automatically flow into Treasury',
      icon: '⚙️'
    },
    {
      num: '03',
      title: 'Buyback & Burn',
      desc: 'Strategy buys NFTs from market and burns them',
      icon: '🔥'
    },
    {
      num: '04',
      title: 'Floor Rises',
      desc: 'Less supply + constant demand = price growth',
      icon: '📈'
    }
  ];

  return (
    <section className="my-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full mb-4">
          WHY BUY NOW?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your NFT Will Only <span className="text-emerald-500">Grow in Value</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          FOMO Strategy creates perpetual buying pressure. Every trade feeds the machine that pushes your NFT floor price higher.
        </p>
      </div>

      {/* Animated Flow */}
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-emerald-300 to-gray-200 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.num}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 mt-2">{step.icon}</div>
                
                {/* Content */}
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>

              {/* Arrow between cards (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-emerald-400 z-20">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Stats */}
      <div className="mt-12 bg-gray-900 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-white font-medium">Perpetual Buyback</div>
            <div className="text-gray-400 text-sm">Strategy never stops working</div>
          </div>
          <div className="text-center border-y md:border-y-0 md:border-x border-gray-700 py-6 md:py-0">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">↓</div>
            <div className="text-white font-medium">Decreasing Supply</div>
            <div className="text-gray-400 text-sm">NFTs burned permanently</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">↑</div>
            <div className="text-white font-medium">Rising Floor</div>
            <div className="text-gray-400 text-sm">Price can only go up</div>
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            💡 <span className="text-white font-medium">Early bidders get lowest prices.</span> As floor rises, auction prices follow.
          </p>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="text-center mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); document.querySelector('[data-page="strategy"]')?.click(); }}
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
        >
          Learn more about FOMO Strategy
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default StrategyValueSection;
