import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Sparkles } from 'lucide-react';
const Collection = () => {
  return <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="sticker-card text-center space-y-8 bg-gradient-to-br from-muted to-background/50 border-2 border-hot-pink/50 shadow-neon">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-glow border-4 border-purple/30" style={{
              backgroundColor: '#E5E7EB'
            }}>
                <img src="/lovable-uploads/089560bc-8471-4adb-b514-83748b2fcfa8.png" alt="Dundie Character" className="w-28 h-28 object-contain" style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                mixBlendMode: 'multiply'
              }} />
              </div>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-display font-bold">
              <span className="text-hot-pink neon-text">Own a</span>{' '}
              <span className="text-electric-purple glow-text">Dundie</span>
            </h2>
            
            <p className="text-xl text-off-white/90 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive community of collectors who appreciate 
              <span className="text-neon-blue font-semibold"> hand-drawn art</span> with 
              <span className="text-acid-lime font-semibold"> bold attitude</span>.
              Each piece is a unique digital trophy for the bold.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hot-pink">888</div>
              <div className="text-muted-foreground">Total Supply</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-electric-purple">200+</div>
              <div className="text-muted-foreground">Unique Traits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-blue">100%</div>
              <div className="text-muted-foreground">Hand-Drawn</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-neon magnetic text-lg px-8 py-4" onClick={() => window.open('https://www.launchmynft.io/collections/8pXL1gZGWq1Y6wA7RJTmAVXcwBhzn65XdeLL7yA8AwFb/ZMZXWPY2COXyqoohzTfK', '_blank')}>
              <ExternalLink className="mr-2 w-5 h-5" />
              View on LaunchMyNFT
            </Button>
            
            <Button className="btn-glow magnetic text-lg px-8 py-4" onClick={() => window.open('https://discord.gg/vjSdsjDTZx', '_blank')}>
              <Users className="mr-2 w-5 h-5" />
              Join Discord
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="pt-6 border-t border-hot-pink/20">
            
          </div>
        </div>

        {/* Secondary Info Cards */}
        
      </div>
    </section>;
};
export default Collection;