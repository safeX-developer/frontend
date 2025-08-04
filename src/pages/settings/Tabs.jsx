import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tabs(){
  const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('personal');

    function handleTabNavigate(r){
      setActiveSection(r);
      navigate('/p2p/settings/' + r)
    }
    return(
        <>
   <aside className="w-64 bg-gray-800 p-6">
  <ul className="space-y-2">
    <li>
      <button
        onClick={() => handleTabNavigate('personal')}
        className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
          activeSection === 'personal'
            ? 'bg-gray-700 text-white font-semibold'
            : 'text-gray-400 hover:text-orange-400'
        }`}
      >
        Personal Details
      </button>
    </li>
    <li>
      <button
        onClick={() => handleTabNavigate('security')}
        className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
          activeSection === 'security'
            ? 'bg-gray-700 text-white font-semibold'
            : 'text-gray-400 hover:text-orange-400'
        }`}
      >
        Security
      </button>
    </li>
    <li>
      <button
        onClick={() => handleTabNavigate('deactivate')}
        className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
          activeSection === 'deactivate'
            ? 'bg-gray-700 text-red-400 font-semibold'
            : 'text-red-400 hover:underline'
        }`}
      >
        Deactivate Account
      </button>
    </li>
  </ul>
</aside>

        </>
    )
}