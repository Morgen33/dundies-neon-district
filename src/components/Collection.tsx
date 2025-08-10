import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Sparkles } from 'lucide-react';

const Collection = () => {
  return (
    <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="sticker-card text-center space-y-8 bg-gradient-to-br from-muted to-background/50 border-2 border-hot-pink/50 shadow-neon">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-neon rounded-full flex items-center justify-center shadow-glow">
                <Sparkles className="w-10 h-10 text-background" />
              </div>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-display font-bold">
              <span className="text-hot-pink neon-text">Own a</span>{' '}
              <span className="text-electric-purple glow-text">Dundie</span>
            </h2>
            
            <p className="text-xl text-off-white/90 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive community of collectors who appreciate 
              <span className="text-neon-blue font-semibold"> hand-drawn art</span> with 
              <span className="text-acid-lime font-semibold"> neon attitude</span>.
              Each piece is a unique digital trophy for the bold.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hot-pink">1,000</div>
              <div className="text-muted-foreground">Total Supply</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-electric-purple">500+</div>
              <div className="text-muted-foreground">Unique Traits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-blue">100%</div>
              <div className="text-muted-foreground">Hand-Drawn</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-neon magnetic text-lg px-8 py-4"
              onClick={() => window.open('https://www.launchmynft.io/collections/8pXL1gZGWq1Y6wA7RJTmAVXcwBhzn65XdeLL7yA8AwFb/ZMZXWPY2COXyqoohzTfK', '_blank')}
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              View on LaunchMyNFT
            </Button>
            
            <Button 
              className="btn-glow magnetic text-lg px-8 py-4"
              onClick={() => window.open('https://discord.gg/vjSdsjDTZx', '_blank')}
            >
              <Users className="mr-2 w-5 h-5" />
              Join Discord
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="pt-6 border-t border-hot-pink/20">
            <p className="text-sm text-muted-foreground">
              Built on Solana • Fully on-chain • Zero royalties
            </p>
          </div>
        </div>

        {/* Secondary Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-electric-purple/10 to-transparent border border-electric-purple/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-electric-purple mb-3">💎 Rarity Tiers</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Common</span>
                <span className="text-muted-foreground">60%</span>
              </div>
              <div className="flex justify-between">
                <span>Rare</span>
                <span className="text-neon-blue">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Epic</span>
                <span className="text-electric-purple">10%</span>
              </div>
              <div className="flex justify-between">
                <span>Legendary</span>
                <span className="text-hot-pink">4%</span>
              </div>
              <div className="flex justify-between">
                <span>Mythic</span>
                <span className="text-acid-lime">1%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-neon-blue mb-3">🎨 Art Style</h3>
            <div className="space-y-3 text-sm">
              <div>• Hand-drawn by Neo</div>
              <div>• Chunky, rounded aesthetics</div>
              <div>• Bold neon color palette</div>
              <div>• Sticker-style outlines</div>
              <div>• Playful personality traits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;