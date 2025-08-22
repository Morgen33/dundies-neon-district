import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-borders-button';
import { Link, useNavigate } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

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

      {/* Centered Rainbow Button */}
      <div className="relative z-10 flex items-center justify-center">
        <RainbowButton 
          onClick={() => window.location.href = '/'}
          className="text-lg px-8 py-4 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Damn Right! 🔥
        </RainbowButton>
      </div>
    </div>
  );
};

export default SexyBodyPage;