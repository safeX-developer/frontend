import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="mb-8">
        <svg 
          className="w-32 h-32 mx-auto text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1" 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>
      
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
      
      <p className="text-[var(--text-color)] max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/"
          className="px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-200"
        >
          Go to Home
        </Link>
        <Link 
          to="/p2p/trades"
          className="px-6 py-3 bg-[var(--card-color)] text-white font-medium rounded-lg border border-[var(--border)] hover:bg-opacity-90 transition-all duration-200"
        >
          Go to Dashboard
        </Link>
      </div>
      
      <div className="mt-12 text-[var(--text-color)] text-sm">
        <p>Need help? <a href="#" className="text-[var(--primary-color)] hover:underline">Contact Support</a></p>
      </div>
    </div>
  );
};

export default NotFound;