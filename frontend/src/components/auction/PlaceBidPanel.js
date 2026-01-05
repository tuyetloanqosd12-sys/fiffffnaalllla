import React from 'react';

const PlaceBidPanel = ({ currentBid, totalBids, participants, onPlaceBid }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Place Your Bid</h3>
        <div className="flex items-center gap-2 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-200">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-emerald-600">LIVE</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {/* Current Bid - Clean and prominent */}
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-600 mb-1 font-medium">Current Highest Bid</p>
          <p className="text-3xl font-bold text-gray-900">{currentBid} <span className="text-lg text-gray-600">USDC</span></p>
        </div>
        
        {/* Bid Incentives - Clean cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-bold text-gray-900">Higher Bid</span>
            </div>
            <p className="text-xs text-gray-600">More XP & Rewards</p>
          </div>
          
          <div className="p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-bold text-gray-900">Early Bidder</span>
            </div>
            <p className="text-xs text-gray-600">Time Bonus Boost</p>
          </div>
        </div>
        
        {/* Minimum Bid - Compact */}
        <div className="flex items-center justify-between px-3 py-2 bg-emerald-50 rounded-xl border border-emerald-200">
          <span className="text-xs text-gray-700 font-medium">Minimum Bid</span>
          <span className="text-sm font-bold text-emerald-600">100 USDC</span>
        </div>
        
        {/* Place Bid Button - Clean and bold */}
        <button 
          onClick={onPlaceBid}
          className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base hover:bg-black transition-all shadow-lg hover:shadow-xl"
          data-testid="place-bid-btn"
        >
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default PlaceBidPanel;
