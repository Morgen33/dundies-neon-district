import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-borders-button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ShaderAnimation from '@/components/ui/shader-animation';

const SexyBodyPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented by browser:', error);
        }
      }
    };
    
    playAudio();
  }, []);
  return <div className="min-h-screen text-foreground relative flex items-center justify-center overflow-hidden">
      <ShaderAnimation />
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-black">
          
        </Button>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="relative">
          {/* Animated background shapes */}
          
          <div className="absolute -bottom-10 -right-16 w-32 h-32 bg-gradient-to-r from-lime to-aqua rounded-full opacity-20 animate-bounce"></div>
          
          {/* Main text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-tight">
            <span className="neon-text block animate-variable-flash">
              IT IS BECAUSE
            </span>
            <span className="text-hot-pink block animate-variable-flash" style={{
            animationDelay: '0.5s'
          }}>
              OF MY
            </span>
            <span className="glow-text block text-7xl md:text-9xl lg:text-[12rem] animate-variable-flash" style={{
            animationDelay: '1s'
          }}>
              SEXY BODY
            </span>
          </h1>

          {/* Confetti-like elements */}
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-hot-pink rounded-full animate-bounce" style={{
          animationDelay: '0.2s'
        }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-lime rounded-full animate-bounce" style={{
          animationDelay: '0.8s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-electric-blue rounded-full animate-bounce" style={{
          animationDelay: '1.2s'
        }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-aqua rounded-full animate-bounce" style={{
          animationDelay: '0.6s'
        }}></div>
        </div>


        {/* Rainbow Button positioned below */}
        <div className="mt-12 animate-fade-in" style={{
        animationDelay: '2s'
      }}>
          <RainbowButton onClick={() => window.location.href = '/'} className="text-lg px-8 py-4">
            Damn Right! 🔥
          </RainbowButton>
        </div>
      </div>
      
      {/* Audio element for background music */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/lovable-uploads/Pum Pum Sexy Body.mp3" type="audio/mpeg" />
      </audio>
    </div>;
};
export default SexyBodyPage;