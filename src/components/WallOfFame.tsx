import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Star } from 'lucide-react';

const WallOfFame = () => {
  // Placeholder data for 1% holders
  const topHolders = [
    {
      id: 1,
      holderName: 'CryptoWizard',
      profileUrl: '#',
      modelEmbedUrl: 'https://my.spline.design/untitled-3d',
      dundieName: 'Neon Sage',
      holdingSince: '2024'
    },
    {
      id: 2,
      holderName: 'DigitalPirate',
      profileUrl: '#',
      modelEmbedUrl: 'https://my.spline.design/untitled-3d',
      dundieName: 'Electric Captain',
      holdingSince: '2024'
    },
    {
      id: 3,
      holderName: 'NFTChampion',
      profileUrl: '#',
      modelEmbedUrl: 'https://my.spline.design/untitled-3d',
      dundieName: 'Cyber Athlete',
      holdingSince: '2024'
    },
    {
      id: 4,
      holderName: 'NeonCollector',
      profileUrl: '#',
      modelEmbedUrl: 'https://my.spline.design/untitled-3d',
      dundieName: 'Glow Guardian',
      holdingSince: '2024'
    }
  ];

  return (
    <section id="wall-of-fame" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-glow rounded-full flex items-center justify-center shadow-glow">
              <Trophy className="w-10 h-10 text-background" />
            </div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-acid-lime glow-text">Wall of</span>{' '}
            <span className="text-hot-pink neon-text">Fame</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating the <span className="text-electric-purple font-semibold">top 1% holders</span> who've made Dundies their digital trophy case
          </p>
        </div>

        {/* 3D Viewer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {topHolders.map((holder) => (
            <div key={holder.id} className="sticker-card space-y-4 border-2 border-acid-lime/30 hover:border-acid-lime hover:shadow-glow">
              {/* 3D Viewer Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-muted to-background/50 rounded-2xl border border-electric-purple/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto flex items-center justify-center">
                      <Star className="w-8 h-8 text-background" />
                    </div>
                    <div className="text-sm text-muted-foreground">3D Dundie Preview</div>
                    <div className="text-lg font-semibold text-electric-purple">{holder.dundieName}</div>
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-hot-pink rounded-full animate-bounce"></div>
                <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-neon-blue rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-6 left-8 w-1 h-1 bg-acid-lime rounded-full animate-bounce delay-500"></div>
              </div>

              {/* Holder Info */}
              <div className="space-y-3">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{holder.holderName}</h3>
                  <p className="text-sm text-muted-foreground">Holding since {holder.holdingSince}</p>
                </div>

                <Button 
                  className="btn-outline-neon w-full"
                  onClick={() => window.open(holder.profileUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Visit Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Legend CTA */}
        <div className="text-center bg-gradient-to-br from-acid-lime/10 to-transparent border border-acid-lime/30 rounded-3xl p-8">
          <h3 className="text-2xl font-display font-bold text-acid-lime mb-4">
            Ready to Join the Elite?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Collect rare Dundies and earn your spot among the legendary holders
          </p>
          <Button 
            className="btn-glow magnetic"
            onClick={() => window.open('https://www.launchmynft.io/collections/8pXL1gZGWq1Y6wA7RJTmAVXcwBhzn65XdeLL7yA8AwFb/ZMZXWPY2COXyqoohzTfK', '_blank')}
          >
            Start Collecting
          </Button>
        </div>

        {/* Hidden Add Holder Form (for admin use) */}
        <div className="hidden">
          <div className="mt-16 p-6 bg-muted rounded-2xl border border-border">
            <h4 className="text-lg font-semibold mb-4">Add New Holder (Admin Only)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Holder Name" className="p-3 bg-background border border-border rounded-lg" />
              <input placeholder="Wallet Address" className="p-3 bg-background border border-border rounded-lg" />
              <input placeholder="Twitter/Website" className="p-3 bg-background border border-border rounded-lg" />
              <input placeholder="3D Model URL" className="p-3 bg-background border border-border rounded-lg" />
            </div>
            <Button className="mt-4 btn-neon">Add to Wall of Fame</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallOfFame;