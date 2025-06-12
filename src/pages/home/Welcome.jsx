import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'animate.css';

export default function Welcome() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
    
  const welcomeBadge = [
      {name: "Total Jobs", number: 100000, img: "/asset/total-jobs.png"},
      {name: "Total Talents", number: 387982, img: "/asset/total-talent.png"},
      {name: "Total Volume", number: 9899000, img: "/asset/total-volume.png"}
  ];
    
  useEffect(() => {
      // Set loaded state after a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
          setIsLoaded(true);
      }, 100);
        
      return () => clearTimeout(timer);
  }, []);
    
  return (
      <div className="min-h-screen flex flex-col items-center bg-background">
          <section className="w-full max-w-4xl px-4 py-8 flex flex-col items-center">
              <div className={`text-center ${isLoaded ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                  <img src="/asset/welcome.png" alt="Welcome" className="mx-auto mb-6 w-64" />
                  <h1 className="text-3xl font-bold text-active-text mb-2">
                      Welcome to Safe-X
                  </h1>
                  <p className="text-lg text-text">
                      Best on-chain secure p2p transactions
                  </p>
              </div>
          </section>
            
          <section className="w-full max-w-4xl px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {welcomeBadge.map((item, index) => (
                      <div 
                          key={item.number} 
                          className={`card-light flex flex-col items-center p-6 ${
                              isLoaded ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                      >
                          <img src={item.img} alt={item.name} className="h-16 mb-4" />
                          <div className="text-text text-lg">{item.name}</div>
                          <div className="text-active-text text-2xl font-bold">{item.number.toLocaleString()}</div>
                      </div>
                  ))}
              </div>
                
              <div className="flex justify-center mt-8">
                  <button 
                      onClick={() => navigate("/p2p/trades")} 
                      className={`bg-[var(--secondary-color)] text-lg px-8 py-3 rounded-full text-white hover:bg-opacity-90 ${
                          isLoaded ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                      }`}
                      style={{ animationDelay: '0.75s' }}
                  >
                      Get started now
                  </button>
              </div>
          </section>
      </div>
  )
}
