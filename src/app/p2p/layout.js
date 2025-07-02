import React from 'react'
import Navbar from '@/components/Navbar';

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
        <div className="pt-16 pl-0 md:pl-[232px]  w-full"> 
          {children}
        </div>
    </div>
  )
}
