import React from 'react';

function RewardInfo() {
  return (
    <div className="bg-[var(--card-color)] rounded-lg p-4">
      <h3 className="text-white font-medium mb-2">How to earn more points?</h3>
      <ul className="text-[var(--text-color)] text-sm space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          Complete daily tasks and login rewards
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          Participate in trading competitions
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          Refer friends to join SafeX platform
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          Follow and engage with SafeX on social media
        </li>
      </ul>
    </div>
  );
}

export default RewardInfo;