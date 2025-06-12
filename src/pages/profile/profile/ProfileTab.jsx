import React from 'react';

export default function ProfileTab() {
  // Social media platforms with verification status
  const socialPlatforms = [
    { name: 'Telegram', verified: true },
    { name: 'Facebook', verified: true },
    { name: 'Instagram', verified: true },
  ];

  // Profile information items with icons
  const profileItems = [
    {
      label: 'Verified socials',
      value: socialPlatforms,
      isSpecial: true, // Flag to handle this item differently
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      label: 'User name',
      value: 'Amarachi.okoro',
      icon: (
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: 'Email',
      value: 'amarachi.okoro@example.com',
      icon: (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )
    },
    {
      label: 'Full Name',
      value: 'Amarachi Okoro',
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: 'Country',
      value: 'Nigeria',
      icon: (
        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 011 1v12a1 1 0 01-1 1H6a3 3 0 01-3-3V6zm3-2a1 1 0 00-1 1v10a1 1 0 001 1h9V4H6z" clipRule="evenodd" />
          <path d="M3 6a3 3 0 013-3h10a1 1 0 011 1v12a1 1 0 01-1 1H6a3 3 0 01-3-3V6z" />
        </svg>
      )
    },
    {
      label: 'State',
      value: 'Lagos',
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      label: 'City',
      value: 'Ikeja',
      icon: (
        <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: 'Address',
      value: '123 Adeola Odeku Street, Victoria Island',
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: 'Total Transaction',
      value: 'USDT 10,000',
      icon: (
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: 'Date Created',
      value: 'Friday, Sep 25, 2025',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profileItems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md border-inactive border-gray-700 bg-[#0000000d]"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3">
                {item.icon}
              </div>
              <div className="flex-grow">
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                
                {item.isSpecial ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.value.map((social, idx) => (
                      <button
                        key={idx}
                        className={`px-3 py-1 text-xs rounded flex items-center ${
                          social.verified
                            ? ' bg-opacity-30  border-inactive border-gray-700'
                            : ' text-gray-400 border border-gray-700'
                        }`}
                      >
                        {social.verified && (
                          <svg className="w-3.5 h-3.5 mr-1 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        )}
                        {social.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
