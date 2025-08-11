import { Button } from '@/components/ui/button';
import { ExternalLink, Twitter, MessageCircle } from 'lucide-react';

const JoinBar = () => {
  return (
    <section id="join" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Full-width glow strip */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12" style={{
          background: 'linear-gradient(135deg, #74F0ED, #FF6AD5, #9B8CFF, #A7FF70)'
        }}>
          {/* Background effects */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(116, 240, 237, 0.9), rgba(255, 106, 213, 0.9), rgba(155, 140, 255, 0.9), rgba(167, 255, 112, 0.9))'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-4 left-8 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 right-12 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/25 rounded-full animate-bounce delay-300"></div>

          <div className="relative z-10 text-center space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black">
                Ready to Join the
              </h2>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black">
                <span className="inline-block animate-pulse">DIGITAL</span>{' '}
                <span className="inline-block animate-pulse delay-200">REVOLUTION</span>
                <span className="inline-block animate-pulse delay-400">?</span>
              </div>
            </div>

            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Don't miss out on the loudest, brightest NFT community in the space
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-black text-white hover:bg-black/90 hover:text-gray-200 px-8 py-4 text-lg font-semibold rounded-full border-2 border-black hover:border-black/80 magnetic transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://www.launchmynft.io/collections/8pXL1gZGWq1Y6wA7RJTmAVXcwBhzn65XdeLL7yA8AwFb/ZMZXWPY2COXyqoohzTfK', '_blank')}
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                View Collection
              </Button>

              <Button 
                className="bg-black text-white hover:bg-black/90 hover:text-gray-200 px-8 py-4 text-lg font-semibold rounded-full border-2 border-black hover:border-black/80 magnetic transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://x.com/DundiesDistrict', '_blank')}
              >
                <Twitter className="mr-2 w-5 h-5" />
                Join X
              </Button>

              <Button 
                className="bg-black text-white hover:bg-black/90 hover:text-gray-200 px-8 py-4 text-lg font-semibold rounded-full border-2 border-black hover:border-black/80 magnetic transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://discord.gg/vjSdsjDTZx', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Enter Discord
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">1,000</div>
                <div className="text-sm text-black/70">Unique NFTs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">500+</div>
                <div className="text-sm text-black/70">Collectors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-sm text-black/70">Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinBar;