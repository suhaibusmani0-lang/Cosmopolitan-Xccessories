import React, { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 10, minutes: 21, seconds: 17 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = +new Date("2026-07-15T00:00:00") - +new Date();
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col font-sans">
      
      {/* Top Header */}
      <div className="flex justify-between items-start w-full mb-12">
        <div className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
          Cosmopolitan<br />Xccessories
        </div>
        
        {/* Minimalist Timer (Top Right) */}
        <div className="flex gap-6 text-sm tracking-[0.2em] font-medium text-gray-400">
          <div><span className="text-white">{timeLeft.days}</span> D</div>
          <div><span className="text-white">{timeLeft.hours}</span> H</div>
          <div><span className="text-white">{timeLeft.minutes}</span> M</div>
          <div><span className="text-white">{timeLeft.seconds}</span> S</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl mx-auto flex-grow gap-12">
        
        {/* Left Side: Launching Soon Graphic Image */}
        <div className="w-full lg:w-[60%]">
          <img 
            src="/launching-text.png" 
            alt="Launching Soon" 
            className="w-full max-w-[700px] h-auto object-contain"
          />
          <div className="mt-8 text-white font-bold tracking-[0.15em] text-lg uppercase">
            COSMOXS.COM
          </div>
        </div>
        
        {/* Right Side: Description */}
        <div className="w-full lg:w-[35%] text-[#cccccc] text-lg lg:text-xl leading-[1.6] font-normal">
          <p>
            It's not here yet, but we'll let you in on a secret. It's coming really, really soon. 
            So sit tight and check back in on July 15. You just might see something that will blow your socks off!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;