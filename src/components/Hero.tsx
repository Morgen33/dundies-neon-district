import { Button } from '@/components/ui/button';
import { ArrowRight, Twitter } from 'lucide-react';
import heroImage1 from '@/assets/dundie-hero-1.png';
import heroImage2 from '@/assets/dundie-hero-2.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Bold Rainbow Gradient Background */}
      <div className="absolute inset-0 bg-gradient-rainbow opacity-90">
        {/* Playful Floating Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-aqua/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-hot-pink/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-lime/25 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-yellow/25 rounded-full blur-2xl animate-pulse delay-700"></div>
        
        {/* Soft Overlay for Readability */}
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Kinetic Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="block neon-text animate-fade-in">DUNDIES</span>
                <span className="block glow-text animate-fade-in delay-300">DISTRICT</span>
              </h1>
              <p className="text-xl sm:text-2xl text-off-white font-medium animate-fade-in delay-500">
                Hand-drawn NFTs by Neo. <br />
                <span className="text-lime font-bold">Loud. Bold. Unmistakable.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-700">
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

          {/* Parallax Collage */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in delay-500">
            {/* Main Character */}
            <div className="absolute top-0 right-0 w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src={heroImage1}
                alt="Dundie Character"
                className="w-full h-full object-contain float hover:scale-105 transition-transform duration-500 filter drop-shadow-lg"
              />
            </div>

            {/* Supporting Character */}
            <div className="absolute bottom-10 left-10 w-48 h-48 lg:w-64 lg:h-64">
              <img 
                src={heroImage2}
                alt="Dundie Character 2"
                className="w-full h-full object-contain float delay-1000 hover:scale-105 transition-transform duration-500 filter drop-shadow-lg"
              />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-20 left-20 w-24 h-24 bg-lime/40 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-24 w-16 h-16 bg-aqua/50 rounded-full blur-lg animate-pulse delay-500"></div>
            
            {/* Floating Shapes */}
            <div className="absolute top-40 left-0 w-8 h-8 bg-hot-pink rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 right-0 w-6 h-6 bg-purple rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-60 right-10 w-4 h-4 bg-yellow rounded-full animate-bounce delay-600"></div>
            <div className="absolute bottom-40 left-5 w-5 h-5 bg-orange rounded-full animate-bounce delay-900"></div>
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