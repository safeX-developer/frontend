import React from 'react';

export default function Header({title, subtitle}) {
  return (
    <div className="p-4 sticky top-0 rounded-t-lg navbar-shadow bg-[#2b2a2a] z-10">
          <h2 className="text-[16px] text-center font-semibold text-white">title</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors absolute right-5 top-4 cursor-pointer"
          >
            <FaTimes />
          </button>
    </div>
  );
}
