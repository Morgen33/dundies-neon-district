import { useState } from 'react';

const FloatingBubbles = () => {
  const [poppedBubbles, setPoppedBubbles] = useState<number[]>([]);

  const handleBubblePop = (bubbleId: number) => {
    if (poppedBubbles.includes(bubbleId)) return;
    
    setPoppedBubbles(prev => [...prev, bubbleId]);
    
    // Redirect to Magic Eden after animation
    setTimeout(() => {
      window.open('https://magiceden.us/marketplace/dundies', '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Bubble 1 - Angel */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(1) ? 'animate-bubble-pop' : 'animate-[float-bubble-4_60s_ease-in-out_infinite]'
        }`}
        onClick={() => handleBubblePop(1)}
      >
        <img 
          src="/lovable-uploads/7865b5fd-6bf5-4724-8359-221e16c7d1c1.png" 
          alt="Dundie Angel floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(1) ? 'animate-character-bounce' : ''}`}
        />
      </div>

      {/* Bubble 2 - Baseball */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(2) ? 'animate-bubble-pop' : 'animate-[float-bubble-5_70s_ease-in-out_infinite_2s]'
        }`}
        onClick={() => handleBubblePop(2)}
      >
        <img 
          src="/lovable-uploads/1ac2bbe6-bb7b-4b3c-a75c-d81d12ba6e83.png" 
          alt="Dundie Baseball floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(2) ? 'animate-character-bounce' : ''}`}
        />
      </div>

      {/* Bubble 3 - Wizard */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(3) ? 'animate-bubble-pop' : 'animate-[float-bubble-6_65s_ease-in-out_infinite_1s]'
        }`}
        onClick={() => handleBubblePop(3)}
      >
        <img 
          src="/lovable-uploads/11d1b86f-a592-41a1-9e61-22dbfd3d4ecc.png" 
          alt="Dundie Wizard floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(3) ? 'animate-character-bounce' : ''}`}
        />
      </div>

      {/* Bubble 4 - Cowboy */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(4) ? 'animate-bubble-pop' : 'animate-[float-bubble-7_75s_ease-in-out_infinite_3s]'
        }`}
        onClick={() => handleBubblePop(4)}
      >
        <img 
          src="/lovable-uploads/5602bd77-3bfc-4b74-9b31-37a53adc5ea0.png" 
          alt="Dundie Cowboy floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(4) ? 'animate-character-bounce' : ''}`}
        />
      </div>

      {/* Bubble 5 - Pink Hair */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(5) ? 'animate-bubble-pop' : 'animate-[float-bubble-8_80s_ease-in-out_infinite_4s]'
        }`}
        onClick={() => handleBubblePop(5)}
      >
        <img 
          src="/lovable-uploads/5e4285df-993c-4b5f-89d0-bf98aa635667.png" 
          alt="Dundie Pink Hair floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(5) ? 'animate-character-bounce' : ''}`}
        />
      </div>


      {/* Bubble 7 - Cool Angel */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(7) ? 'animate-bubble-pop' : 'animate-[float-bubble-6_85s_ease-in-out_infinite_2.5s]'
        }`}
        onClick={() => handleBubblePop(7)}
      >
        <img 
          src="/lovable-uploads/f4e93ff4-be01-4a12-9411-13fcca414a92.png" 
          alt="Dundie Cool Angel floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(7) ? 'animate-character-bounce' : ''}`}
        />
      </div>

      {/* Bubble 8 - Crown */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] hover:animate-none transition-all duration-300 ${
          poppedBubbles.includes(8) ? 'animate-bubble-pop' : 'animate-[float-bubble-4_90s_ease-in-out_infinite_5s]'
        }`}
        onClick={() => handleBubblePop(8)}
      >
        <img 
          src="/lovable-uploads/859dad91-27b2-4509-8fe8-6f9c47323d55.png" 
          alt="Dundie Crown floating bubble" 
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${poppedBubbles.includes(8) ? 'animate-character-bounce' : ''}`}
        />
      </div>


    </div>
  );
};

export default FloatingBubbles;