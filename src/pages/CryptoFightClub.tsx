import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Zap, Download } from 'lucide-react';

const CryptoFightClub = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hot-pink/20 border border-hot-pink/30 mb-6">
            <Sparkles className="w-5 h-5 text-hot-pink" />
            <span className="text-hot-pink font-medium">Community Tool</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6 bright-text">
            Dundies Meme Generator
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create your own Dundie-style memes! This custom meme generator was built 
            specifically for our community.
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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Make Your Own Dundie Memes
            </h2>
            <p className="text-muted-foreground text-lg">
              Easy to use, fun to share
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-hot-pink/50 transition-all duration-300">
              <div className="w-16 h-16 bg-hot-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-hot-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dundie Templates</h3>
              <p className="text-muted-foreground">
                Use signature Dundies characters and aesthetics in your memes
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-hot-pink/50 transition-all duration-300">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-muted-foreground">
                Simple interface to create and customize your memes instantly
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-hot-pink/50 transition-all duration-300">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Download & Share</h3>
              <p className="text-muted-foreground">
                Save your creations and share them with the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Start Creating
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Jump into the meme generator and let your creativity run wild!
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            Tool created by <a href="https://www.cryptofightclub.wtf" target="_blank" rel="noopener noreferrer" className="text-hot-pink hover:underline">Crypto Fight Club</a>
          </p>
          
          <Button 
            size="lg"
            className="bg-hot-pink hover:bg-hot-pink/80 text-white"
            onClick={() => window.open('https://www.cryptofightclub.wtf/dundies/memegenerator.html', '_blank')}
          >
            Open Meme Generator
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CryptoFightClub;
