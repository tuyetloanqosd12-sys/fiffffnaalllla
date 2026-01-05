import React from 'react';

const StrategyCTASection = () => {
  const scrollToSwap = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Strategy Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-emerald-700">Active Strategy</span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join the Strategy?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Start swapping tokens and benefit from automated buybacks, burns, and ecosystem growth. Your participation fuels the strategy.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button 
            onClick={scrollToSwap}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Swap Tokens Now →
          </button>
          <a
            href="https://www.fomo.cx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold text-base hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-8 text-gray-400 text-sm mb-10">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>Instant Swaps</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span>10% Fee → Ecosystem</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <span>Auto Burns</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 transition-all duration-300 hover:scale-125"
            title="X (Twitter)"
          >
            <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-5 rounded-full scale-0 group-hover:scale-150 transition-all duration-300"></span>
          </a>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 transition-all duration-300 hover:scale-125"
            title="Discord"
          >
            <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-5 rounded-full scale-0 group-hover:scale-150 transition-all duration-300"></span>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 transition-all duration-300 hover:scale-125"
            title="Telegram"
          >
            <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-5 rounded-full scale-0 group-hover:scale-150 transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrategyCTASection;
