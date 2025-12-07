import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-borders-button';
import { Link } from 'react-router-dom';
import ShaderAnimation from '@/components/ui/shader-animation';

const SexyBodyPage = () => {

  return <div className="min-h-screen text-foreground relative flex items-center justify-center overflow-hidden">
      <ShaderAnimation />
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-black">
          <Link to="/">← Back</Link>
        </Button>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="relative">
          {/* Animated background shapes */}
          
          <div className="absolute -bottom-10 -right-16 w-32 h-32 bg-gradient-to-r from-lime to-aqua rounded-full opacity-20 animate-bounce"></div>
          
          {/* Main text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-tight">
            <span className="bright-text block animate-variable-flash">
              IT IS BECAUSE
            </span>
            <span className="text-hot-pink block animate-variable-flash" style={{
            animationDelay: '0.5s'
          }}>
              OF MY
            </span>
            <span className="sexy-body-text block text-7xl md:text-9xl lg:text-[12rem]" style={{
            animationDelay: '1s'
          }}>
              {"SEXY BODY".split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="animate-variable-flash inline-block"
                  style={{
                    animationDelay: `${1 + index * 0.1}s`
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
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


        {/* Spotify Player */}
        <div className="mt-12 w-full max-w-md animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/track/6eFWLPoMY51wevzDSXR1lO?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          />
        </div>

        {/* Rainbow Button positioned below */}
        <div className="mt-8 animate-fade-in" style={{
        animationDelay: '2s'
      }}>
          <RainbowButton onClick={() => window.location.href = '/'} className="text-lg px-8 py-4">
            Damn Right! 🔥
          </RainbowButton>
        </div>
      </div>
    </div>;
};
export default SexyBodyPage;