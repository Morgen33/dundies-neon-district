import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, TrendingUp, Activity } from "lucide-react";
import { MagicEdenCollectionGrid } from "@/components/MagicEdenCollectionGrid";

const Marketplace = () => {
  useEffect(() => {
    // Inject the optimized Magic Eden marketplace widget
    const script = document.createElement("script");

    return () => {
      // Cleanup
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold bright-text mb-6">Dundies Marketplace</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trade unique Dundies NFTs on Magic Eden. Discover rare traits, find your perfect character, and join the
            digital revolution.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              asChild
              className="bg-gradient-to-r from-hot-pink to-electric-purple hover:scale-105 transition-transform duration-300"
            >
              <a
                href="https://magiceden.io/marketplace/5DJBKxbYj8wD2D56K6BGhFPUSwspESL6LkT9Kn8zwkAz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View on Magic Eden
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-card border border-electric-purple/20 rounded-lg p-6 hover:border-electric-purple/40 transition-colors w-full md:w-64">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-acid-lime" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Trading</h3>
              <p className="text-muted-foreground">Real-time marketplace data from Magic Eden</p>
            </div>

            <div className="bg-card border border-hot-pink/20 rounded-lg p-6 hover:border-hot-pink/40 transition-colors w-full md:w-64">
              <div className="flex items-center justify-center mb-4">
                <Zap className="text-hot-pink" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Transactions</h3>
              <p className="text-muted-foreground">Fast and secure NFT trading on Solana</p>
            </div>

            <div className="bg-card border border-bright-blue/20 rounded-lg p-6 hover:border-bright-blue/40 transition-colors w-full md:w-64">
              <div className="flex items-center justify-center mb-4">
                <Activity className="text-bright-blue" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Activity</h3>
              <p className="text-muted-foreground">Track recent sales and market trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magic Eden Widget */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div id="dundies-market">
            <div className="dm-head">
              <div className="dm-title">Dundies — Live Market</div>
              <a
                className="dm-link"
                target="_blank"
                rel="noopener"
                href="https://magiceden.io/marketplace/5DJBKxbYj8wD2D56K6BGhFPUSwspESL6LkT9Kn8zwkAz"
              >
                Open in Magic Eden
              </a>
            </div>

            <div id="dm-stats" className="dm-stats">
              <div className="chip">
                Floor: <b>—</b> SOL
              </div>
              <div className="chip">
                Listed: <b>—</b>
              </div>
              <div className="chip">
                24h Vol: <b>—</b>
              </div>
              <div className="chip">
                All-time Vol: <b>—</b>
              </div>
            </div>

            {/* Grid body for inline widget (used by injected script) */}
            <div id="dm-listings" className="grid"></div>

            {/* React-based grid component that also uses the edge function */}
            <MagicEdenCollectionGrid />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
