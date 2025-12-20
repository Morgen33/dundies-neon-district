import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Gamepad2, Sparkles, Zap } from 'lucide-react';

const CryptoFightClub = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hot-pink/20 border border-hot-pink/30 mb-6">
            <Gamepad2 className="w-5 h-5 text-hot-pink" />
            <span className="text-hot-pink font-medium">Community Partner</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6 bright-text">
            Crypto Fight Club
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our friends at Crypto Fight Club built something special for the Dundies community - 
            a custom meme generator tool to create your own Dundie-style memes!
          </p>
          
          <Button 
            size="lg"
            className="bg-hot-pink hover:bg-hot-pink/80 text-white font-bold text-lg px-8 py-6"
            onClick={() => window.open('https://www.cryptofightclub.wtf/dundies/memegenerator.html', '_blank')}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Launch Meme Generator
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* About CFC Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              What They Built For Us
            </h2>
            <p className="text-muted-foreground text-lg">
              A custom meme tool designed specifically for the Dundies community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-hot-pink/50 transition-all duration-300">
              <div className="w-16 h-16 bg-hot-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-hot-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dundie-Style Memes</h3>
              <p className="text-muted-foreground">
                Create memes featuring the signature Dundies aesthetic and characters
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-hot-pink/50 transition-all duration-300">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simple interface to generate and download your custom memes instantly
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-hot-pink/50 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Collab</h3>
              <p className="text-muted-foreground">
                Built by Crypto Fight Club as a gift to the Dundies community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Crypto Fight Club */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            About Crypto Fight Club
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crypto Fight Club is a Web3 gaming community that creates fun tools and experiences 
            for the NFT space. They've been amazing supporters of the Dundies project and 
            built this meme generator as a collaboration between our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-hot-pink/50 hover:bg-hot-pink/20"
              onClick={() => window.open('https://www.cryptofightclub.wtf', '_blank')}
            >
              Visit Crypto Fight Club
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              className="bg-hot-pink hover:bg-hot-pink/80 text-white"
              onClick={() => window.open('https://www.cryptofightclub.wtf/dundies/memegenerator.html', '_blank')}
            >
              Try the Meme Generator
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CryptoFightClub;
