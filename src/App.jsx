import React, { useState, useEffect } from 'react';

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-07-15T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  // Naya state email ID store karne ke liye
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Notify Button click handle karne ka function
  const handleNotify = () => {
    if (!email) {
      alert("Please enter your email first! 😉");
      return;
    }
    
    // WhatsApp message format jisme email append hogi
    const message = encodeURIComponent(`Hi, I want to be notified when Cosmopolitan Xccessories launches! My email is: ${email}`);
    const waUrl = `https://wa.me/918595124718?text=${message}`;
    
    // WhatsApp new tab me open karega
    window.open(waUrl, '_blank');
    
    // Input box wapas khali kar dega
    setEmail('');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-4 group cursor-default">
        <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl w-24 h-28 md:w-32 md:h-36 flex items-center justify-center mb-4 transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] group-hover:bg-white/70 group-hover:border-white/80">
          <span className="font-playfair text-5xl md:text-6xl text-gray-900 font-medium tracking-tight">
            {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
          </span>
        </div>
        <span className="font-raleway text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 font-bold group-hover:text-gray-800 transition-colors duration-500">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Animated Subtle Luxury Blobs */}
      <div className="absolute top-[-5%] left-[-10%] w-96 h-96 bg-[#e6dbce] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse transition-all duration-1000"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#dce1e3] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse transition-all duration-1000 delay-500"></div>

      <div className="z-10 flex flex-col items-center w-full max-w-5xl">
        
        {/* Logo Section */}
        <div className="mb-14 flex flex-row items-center justify-center gap-6 md:gap-8">
          <img 
            src="/logo.jpeg" 
            alt="CX Logo" 
            className="h-14 md:h-20 w-auto object-contain mix-blend-darken hover:scale-105 transition-transform duration-500"
          />
          <img 
            src="/text-logo.jpeg" 
            alt="Cosmopolitan Xccessories" 
            className="h-14 md:h-20 w-auto object-contain mix-blend-darken hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Headings */}
        <div className="text-center mb-14">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 drop-shadow-sm">
            Elevating Your Style, Soon.
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            <div className="w-12 h-[1px] bg-gray-300"></div>
          </div>

          <p className="font-raleway text-gray-500 text-center max-w-xl mx-auto text-base md:text-lg leading-relaxed font-light">
            We are crafting an exclusive e-commerce experience for you. 
            Our full collection launches on <strong className="font-medium text-gray-800">July 15th, 2026</strong>. Stay tuned.
          </p>
        </div>

        {/* Timer */}
        <div className="flex justify-center items-center flex-wrap gap-y-6 mb-16">
          {timerComponents.length ? timerComponents : (
            <span className="font-playfair text-4xl text-gray-900 tracking-widest uppercase">The Wait Is Over</span>
          )}
        </div>

        {/* UPDATED: Notify Me Input with WhatsApp functionality */}
        <div className="w-full max-w-md bg-white/50 backdrop-blur-md border border-gray-200 p-1.5 rounded-full flex items-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to get notified..." 
            className="w-full bg-transparent px-6 py-3 outline-none text-gray-700 font-raleway placeholder-gray-400 text-sm md:text-base"
          />
          <button 
            onClick={handleNotify}
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-raleway text-xs md:text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            Notify
          </button>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="font-raleway text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em]">
            &copy; 2026 Cosmopolitan Xccessories &mdash; All rights reserved.
          </p>
        </div>

      </div>

      {/* WhatsApp Floating CTA */}
      <a 
        href="https://wa.me/918595124718" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-3 bg-gray-900 text-white px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-xl hover:bg-[#25D366] hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="font-raleway text-sm md:text-base font-semibold tracking-wide">Chat with us</span>
      </a>

    </div>
  );
}

export default App;