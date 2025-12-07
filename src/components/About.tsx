import { Button } from '@/components/ui/button';
import { Heart, Palette, Users } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-acid-lime glow-text">What is a</span>{' '}
            <span className="text-hot-pink bright-text">Dundie</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <div className="sticker-card border-2 border-hot-pink/30 hover:border-hot-pink hover:shadow-glow transition-all duration-300">
              <p className="text-2xl font-bold text-center text-hot-pink mb-6">
                DUNDIES DO SHIT!
              </p>
              
              <p className="text-lg leading-relaxed text-off-white/90 mb-6">
                If you ask a Dundie what being a Dundie means, the first word you'll hear is <span className="text-hot-pink font-semibold">family</span>. 
                Dundies are family, plain and simple.
              </p>
              
              <p className="text-lg leading-relaxed text-off-white/90 mb-6">
                We have fun together. We get loud, we sing, we play music, we trade, we talk traits, and we stick together. 
                We <span className="text-electric-purple font-semibold">grind hard</span>, we <span className="text-bright-blue font-semibold">roll hard</span>, 
                and we've always got each other's backs.
              </p>

              <p className="text-xl font-bold text-center text-bright-blue mb-6">
                DUNDIES ARE A VIBE!
              </p>

              <p className="text-lg leading-relaxed text-off-white/90 mb-6">
                What you see here, you won't find everywhere. We attract like <span className="text-hot-pink font-semibold">magnets</span>—pulling in the real ones who belong.
              </p>

              <p className="text-lg leading-relaxed text-off-white/90 mb-6">
                We are Dundie. And we always will be.
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

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-2xl border border-bright-blue/30">
                <div className="w-12 h-12 bg-bright-blue/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-bright-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bright-blue mb-2">Community-First</h3>
                  <p className="text-muted-foreground">Built by collectors, for collectors who appreciate authentic art</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Neo Section */}
        

        {/* Badge */}
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
};
export default About;