import React from 'react';

const PlaceBidPanel = ({ currentBid, totalBids, participants, onPlaceBid }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-900">Place Your Bid</h3>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-900 rounded-full">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-white tracking-wide">LIVE</span>
        </div>
      </div>
      
      {/* Current Bid */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Current Highest Bid</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-900">{currentBid}</span>
          <span className="text-sm font-medium text-gray-400">USDC</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          <span className="text-xs text-gray-500"><span className="font-semibold text-gray-700">{totalBids}</span> bids</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          <span className="text-xs text-gray-500"><span className="font-semibold text-gray-700">{participants}</span> participants</span>
        </div>
      </div>

      {/* Bonus Section - Elegant and subtle */}
      <div className="space-y-2 mb-4">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Bid Bonuses</p>
        
        <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700">Hidden Bid</span>
          </div>
          <span className="text-[10px] font-semibold text-gray-500 bg-gray-200 px-2 py-0.5 rounded">+15% XP</span>
        </div>

        <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700">Early Bird</span>
          </div>
          <span className="text-[10px] font-semibold text-gray-500 bg-gray-200 px-2 py-0.5 rounded">+10% XP</span>
        </div>
      </div>

      {/* Minimum Bid */}
      <div className="flex items-center justify-between py-2.5 px-3 mb-4 bg-gray-900 rounded-lg">
        <span className="text-xs text-gray-400">Min. Bid</span>
        <span className="text-sm font-bold text-white">100 USDC</span>
      </div>
      
      {/* Place Bid Button */}
      <button 
        onClick={onPlaceBid}
        className="w-full bg-emerald-500 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        data-testid="place-bid-btn"
      >
        Place Bid
      </button>
    </div>
  );
};

export default PlaceBidPanel;
