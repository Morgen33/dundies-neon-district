import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';
import { ZoomTextUI } from '@/components/ui/hover-zoom';

const SexyBodyPage = () => {
  return (
    <div className="min-h-screen bg-black text-foreground relative flex items-center justify-center">
      <FloatingBubbles />
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-black">
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <div className="relative">
          {/* Animated background shapes */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-hot-pink to-electric-blue rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-16 w-32 h-32 bg-gradient-to-r from-lime to-aqua rounded-full opacity-20 animate-bounce"></div>
          
          {/* Main text with hover zoom */}
          <ZoomTextUI 
            zoomScale={1.2} 
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-tight">
              <span className="neon-text block animate-pulse-neon">
                IT IS BECAUSE
              </span>
              <span className="text-hot-pink block animate-pulse-neon" style={{ animationDelay: '0.5s' }}>
                OF MY
              </span>
              <span className="glow-text block text-7xl md:text-9xl lg:text-[12rem] animate-pulse-neon" style={{ animationDelay: '1s' }}>
                SEXY BODY
              </span>
            </h1>
          </ZoomTextUI>

          {/* Confetti-like elements */}
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-hot-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-aqua rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Fun subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          You know it. I know it. Everyone knows it. 💅✨
        </p>

        {/* Action button */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
          <Button 
            asChild 
            size="lg" 
            className="btn-neon text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
          >
            <Link to="/">Damn Right! 🔥</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SexyBodyPage;