import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter } from 'lucide-react';
import heroImage1 from '@/assets/dundie-hero-1.png';
import heroImage2 from '@/assets/dundie-hero-2.png';

const Hero = () => {
  return (
    <section className="min-h-[140vh] relative overflow-hidden bg-black">
      {/* Background ambient shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-hot-pink/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section - Text at Top */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <div className="space-y-4 mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight">
              <span className="neon-text animate-fade-in">DUNDIES DISTRICT</span>
            </h1>
            <p className="text-xl sm:text-2xl text-off-white font-medium animate-fade-in delay-500">
              <span className="text-lime font-bold">Loud. Bold. Unmistakable.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in delay-700">
            <Button 
              className="btn-neon magnetic"
              onClick={() => window.open('https://www.launchmynft.io/collections/8pXL1gZGWq1Y6wA7RJTmAVXcwBhzn65XdeLL7yA8AwFb/ZMZXWPY2COXyqoohzTfK', '_blank')}
            >
              View Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              className="btn-outline-neon magnetic"
              onClick={() => window.open('https://x.com/DundiesDistrict', '_blank')}
            >
              <Twitter className="mr-2 w-5 h-5" />
              Join X
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-off-white/80 text-lg animate-fade-in delay-1000">
            Own a piece of the district. <span className="text-aqua font-semibold">Make it yours.</span>
          </p>
        </div>
      </div>

      {/* Bubble Playground - Large Area for Dynamic Movement */}
      <div className="relative z-10 flex-1 min-h-[60vh] pointer-events-none">
        {/* Character Bubbles with Dynamic Bouncing */}
        
        {/* Bubble 1 - Angel */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-1">
          <img 
            src="/lovable-uploads/7865b5fd-6bf5-4724-8359-221e16c7d1c1.png" 
            alt="Dundie Angel character" 
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Bubble 2 - Cowboy */}
        <div className="absolute top-[20%] left-[70%] w-36 h-36 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-2">
          <img 
            src="/lovable-uploads/5602bd77-3bfc-4b74-9b31-37a53adc5ea0.png" 
            alt="Dundie Cowboy character" 
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Bubble 3 - Pink Hair */}
        <div className="absolute top-[35%] left-[25%] w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-3">
          <img 
            src="/lovable-uploads/5e4285df-993c-4b5f-89d0-bf98aa635667.png" 
            alt="Dundie Pink Hair character" 
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Bubble 4 - Baseball */}
        <div className="absolute top-[15%] left-[85%] w-30 h-30 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-4">
          <img 
            src="/lovable-uploads/089560bc-8471-4adb-b514-83748b2fcfa8.png" 
            alt="Dundie Baseball character" 
            className="w-22 h-22 object-contain"
          />
        </div>

        {/* Bubble 5 - Crown */}
        <div className="absolute top-[50%] left-[60%] w-34 h-34 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-5">
          <img 
            src="/lovable-uploads/11d1b86f-a592-41a1-9e61-22dbfd3d4ecc.png" 
            alt="Dundie Crown character" 
            className="w-26 h-26 object-contain"
          />
        </div>

        {/* Bubble 6 - Fishing */}
        <div className="absolute top-[40%] left-[5%] w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-6">
          <img 
            src="/lovable-uploads/16af89c6-585b-4618-86d7-ad34f471161d.png" 
            alt="Dundie Fishing character" 
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Bubble 7 - Wizard */}
        <div className="absolute top-[25%] left-[45%] w-30 h-30 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-1" style={{animationDelay: '6s'}}>
          <img 
            src="/lovable-uploads/1ac2bbe6-bb7b-4b3c-a75c-d81d12ba6e83.png" 
            alt="Dundie Wizard character" 
            className="w-22 h-22 object-contain"
          />
        </div>

        {/* Bubble 8 - Another character */}
        <div className="absolute top-[55%] left-[35%] w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-2" style={{animationDelay: '8s'}}>
          <img 
            src="/lovable-uploads/558bf590-22f6-4a0f-a233-aa75ff1665b0.png" 
            alt="Dundie character" 
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Bubble 9 - Another character */}
        <div className="absolute top-[45%] left-[80%] w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-bubble-bounce-3" style={{animationDelay: '10s'}}>
          <img 
            src="/lovable-uploads/859dad91-27b2-4509-8fe8-6f9c47323d55.png" 
            alt="Dundie character" 
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Small decorative bubbles */}
        <div className="absolute top-[60%] left-[20%] w-6 h-6 bg-lime/40 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-[30%] left-[90%] w-8 h-8 bg-aqua/50 rounded-full blur-sm animate-pulse delay-500"></div>
        <div className="absolute top-[65%] left-[75%] w-4 h-4 bg-purple/60 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute top-[20%] left-[35%] w-5 h-5 bg-hot-pink/50 rounded-full blur-sm animate-pulse delay-300"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-purple rounded-full flex justify-center shadow-glow">
          <div className="w-1 h-3 bg-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;