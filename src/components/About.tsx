import { Button } from '@/components/ui/button';
import { Heart, Palette, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-acid-lime glow-text">What is a</span>{' '}
            <span className="text-hot-pink neon-text">Dundie</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <div className="sticker-card border-2 border-hot-pink/30 hover:border-hot-pink hover:shadow-neon transition-all duration-300">
              <p className="text-lg leading-relaxed text-off-white/90 mb-6">
                Dundies are hand-drawn by our founder, <span className="text-hot-pink font-semibold">Neo</span>. 
                Inspired by the iconic energy of <span className="text-electric-purple font-semibold">The Office's</span> Dundie awards—reimagined for crypto culture.
              </p>
              
              <p className="text-lg leading-relaxed text-off-white/90 mb-6">
                Each piece captures the <span className="text-neon-blue font-semibold">playful spirit</span> of recognition and celebration, 
                but with a bold <span className="text-acid-lime font-semibold">digital twist</span> that screams modern edge.
              </p>

              <div className="bg-gradient-to-r from-hot-pink/10 to-electric-purple/10 rounded-xl p-4 border border-hot-pink/20">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="text-off-white font-medium">Independent fan-inspired art project.</span><br />
                  Not affiliated with NBCUniversal or <em>The Office</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            <div className="grid gap-6">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-hot-pink/10 to-transparent rounded-2xl border border-hot-pink/30">
                <div className="w-12 h-12 bg-hot-pink/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-hot-pink" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-hot-pink mb-2">Passion-Driven</h3>
                  <p className="text-muted-foreground">Every Dundie is crafted with love for both art and community</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-electric-purple/10 to-transparent rounded-2xl border border-electric-purple/30">
                <div className="w-12 h-12 bg-electric-purple/20 rounded-full flex items-center justify-center">
                  <Palette className="w-6 h-6 text-electric-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-electric-purple mb-2">Hand-Crafted</h3>
                  <p className="text-muted-foreground">100% hand-drawn art, no AI generation or mass production</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-2xl border border-neon-blue/30">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neon-blue mb-2">Community-First</h3>
                  <p className="text-muted-foreground">Built by collectors, for collectors who appreciate authentic art</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Neo Section */}
        <div className="sticker-card border-2 border-acid-lime/30 hover:border-acid-lime hover:shadow-glow transition-all duration-300 text-center">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gradient-glow rounded-full mx-auto flex items-center justify-center shadow-glow">
              <Palette className="w-10 h-10 text-background" />
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-bold text-acid-lime mb-3">Meet Neo</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The creative mind behind every Dundie. Neo combines traditional hand-drawing techniques 
                with bold digital aesthetics to create characters that feel both nostalgic and futuristic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-outline-neon"
                onClick={() => window.open('https://x.com/DundiesDistrict', '_blank')}
              >
                Follow Neo's Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-muted to-background rounded-full border border-acid-lime/30">
            <span className="w-2 h-2 bg-acid-lime rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-acid-lime">Made by humans, smudges included.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;