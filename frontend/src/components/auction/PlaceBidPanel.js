import React from 'react';

const PlaceBidPanel = ({ currentBid, totalBids, participants, onPlaceBid }) => {
  return (
    <div className="card relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 opacity-40"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Place Your Bid</h3>
          <div className="flex items-center gap-2 px-2 py-1 bg-red-50 rounded-full border border-red-200">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-red-600">LIVE</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {/* Current Bid - More prominent */}
          <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <p className="text-xs text-gray-400 mb-1 font-medium">Current Highest Bid</p>
              <p className="text-3xl font-bold text-white">{currentBid} <span className="text-lg text-gray-400">USDC</span></p>
            </div>
          </div>
          
          {/* Bid Incentives - NEW */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              <div className="relative">
                <div className="flex items-center gap-1 mb-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold">Higher Bid</span>
                </div>
                <p className="text-xs opacity-90">More XP & Rewards</p>
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
              <div className="relative">
                <div className="flex items-center gap-1 mb-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold">Early Bidder</span>
                </div>
                <p className="text-xs opacity-90">Time Bonus Boost</p>
              </div>
            </div>
          </div>
          
          {/* Minimum Bid Info */}
          <div className="flex items-center justify-between p-3 bg-white border-2 border-emerald-200 rounded-xl">
            <span className="text-sm text-gray-700 font-medium">Minimum Bid</span>
            <span className="text-sm font-bold text-emerald-600">100 USDC</span>
          </div>
          
          {/* Place Bid Button - More prominent */}
          <button 
            onClick={onPlaceBid}
            className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 text-white py-4 rounded-xl font-bold text-base hover:from-emerald-600 hover:via-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] relative overflow-hidden group"
            data-testid="place-bid-btn"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Place Bid Now
            </span>
          </button>
          
          {/* Quick Info */}
          <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-xs text-blue-700 leading-relaxed">
              Bid early & bid higher to maximize your XP multiplier and unlock exclusive rewards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceBidPanel;
