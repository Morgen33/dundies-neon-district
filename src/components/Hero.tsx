import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter } from 'lucide-react';
import heroImage1 from '@/assets/dundie-hero-1.png';
import heroImage2 from '@/assets/dundie-hero-2.png';

const Hero = () => {
  return (
    <section className="min-h-[140vh] flex items-center justify-center relative overflow-hidden pt-32">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-black">
        {/* Playful Floating Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-hot-pink/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-lime/25 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-yellow/25 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="text-center space-y-8">
            {/* Kinetic Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="neon-text animate-fade-in">DUNDIES DISTRICT</span>
              </h1>
              <p className="text-xl sm:text-2xl text-off-white font-medium animate-fade-in delay-500">
                <span className="text-lime font-bold">Loud. Bold. Unmistakable.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
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

          {/* Strategic Character Bubbles - Clean and Spaced */}
          <div className="absolute left-0 right-0 top-[65%] bottom-0 pointer-events-none">
            {/* Left Side Bubble */}
            <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
              <img 
                src="/lovable-uploads/7865b5fd-6bf5-4724-8359-221e16c7d1c1.png" 
                alt="Dundie Angel character" 
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Center Bubble */}
            <div className="absolute top-[5%] left-[45%] w-36 h-36 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-[float_8s_ease-in-out_infinite_2s]">
              <img 
                src="/lovable-uploads/5602bd77-3bfc-4b74-9b31-37a53adc5ea0.png" 
                alt="Dundie Cowboy character" 
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* Right Side Bubble */}
            <div className="absolute top-[20%] left-[82%] w-30 h-30 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow flex items-center justify-center animate-[float_7s_ease-in-out_infinite_4s]">
              <img 
                src="/lovable-uploads/5e4285df-993c-4b5f-89d0-bf98aa635667.png" 
                alt="Dundie Pink Hair character" 
                className="w-22 h-22 object-contain"
              />
            </div>
          </div>

          {/* Decorative Blobs (unchanged) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-24 h-24 bg-lime/40 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-24 w-16 h-16 bg-aqua/50 rounded-full blur-lg animate-pulse delay-500"></div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple rounded-full flex justify-center shadow-glow">
          <div className="w-1 h-3 bg-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;