import React, { useState } from 'react';
import Tabs from './Tabs';
import { Outlet } from 'react-router-dom';


const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('personal');

  return (
    <div
      className="whole flex"
      style={{
        width: '1056px',
        height: '906px',
        opacity: 1,
        borderRadius: '8px',
        position: 'absolute',
        top: '113px',
        left: '327px',
        backgroundColor: '#1f2937', 
        overflow: 'hidden', }}>

      < Tabs />

      <main className="flex-1 p-10 overflow-y-auto" style={{
        width: '679',
        height: '649',
        angle: '0 deg',
        opacity: '1',
        top: '85px',
        left: '57px',
        gap: '24px',
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default ProfilePage;
