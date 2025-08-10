import { Zap, Rocket, Star } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      id: 1,
      phase: 'Now',
      icon: Zap,
      title: 'Foundation Phase',
      color: 'hot-pink',
      items: [
        '3D Dundie pipeline development',
        'Comprehensive trait wiki launch',
        'Interactive collectors gallery',
        'Community building & engagement'
      ]
    },
    {
      id: 2,
      phase: 'Next',
      icon: Rocket,
      title: 'Expansion Phase',
      color: 'electric-purple',
      items: [
        'Exclusive collaboration drops',
        'Dundies Spaces & Radio shows',
        'Limited edition merch capsule',
        'Holder utility & perks program'
      ]
    },
    {
      id: 3,
      phase: 'Soon',
      icon: Star,
      title: 'Innovation Phase',
      color: 'neon-blue',
      items: [
        'Interactive mini-game ecosystem',
        'Profile quest & achievement system',
        'Annual IRL awards night event',
        'Metaverse integration & experiences'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-neon-blue glow-text">Road</span>
            <span className="text-acid-lime neon-text">map</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The journey ahead is <span className="text-hot-pink font-semibold">bright</span> and full of <span className="text-electric-purple font-semibold">neon possibilities</span>
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div 
              key={item.id}
              className={`sticker-card space-y-6 border-2 transition-all duration-500 ${
                item.color === 'hot-pink' ? 'border-hot-pink/50 hover:border-hot-pink hover:shadow-neon' :
                item.color === 'electric-purple' ? 'border-electric-purple/50 hover:border-electric-purple hover:shadow-neon' :
                'border-neon-blue/50 hover:border-neon-blue hover:shadow-neon'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Phase Header */}
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  item.color === 'hot-pink' ? 'bg-gradient-to-br from-hot-pink to-electric-purple' :
                  item.color === 'electric-purple' ? 'bg-gradient-to-br from-electric-purple to-neon-blue' :
                  'bg-gradient-to-br from-neon-blue to-acid-lime'
                } shadow-glow`}>
                  <item.icon className="w-8 h-8 text-background" />
                </div>
                
                <div>
                  <div className={`text-sm font-semibold uppercase tracking-wider ${
                    item.color === 'hot-pink' ? 'text-hot-pink' :
                    item.color === 'electric-purple' ? 'text-electric-purple' :
                    'text-neon-blue'
                  }`}>
                    {item.phase}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {item.items.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-start space-x-3 group"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
                      item.color === 'hot-pink' ? 'bg-hot-pink group-hover:shadow-neon' :
                      item.color === 'electric-purple' ? 'bg-electric-purple group-hover:shadow-neon' :
                      'bg-neon-blue group-hover:shadow-glow'
                    }`}></div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className={`font-semibold ${
                    item.phase === 'Now' ? 'text-acid-lime' :
                    item.phase === 'Next' ? 'text-electric-purple' :
                    'text-neon-blue'
                  }`}>
                    {item.phase === 'Now' ? '75%' : item.phase === 'Next' ? '25%' : '0%'}
                  </span>
                </div>
                <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      item.color === 'hot-pink' ? 'bg-gradient-to-r from-hot-pink to-electric-purple' :
                      item.color === 'electric-purple' ? 'bg-gradient-to-r from-electric-purple to-neon-blue' :
                      'bg-gradient-to-r from-neon-blue to-acid-lime'
                    }`}
                    style={{ 
                      width: item.phase === 'Now' ? '75%' : item.phase === 'Next' ? '25%' : '0%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-hot-pink/10 via-electric-purple/10 to-neon-blue/10 rounded-3xl border border-hot-pink/30 p-8">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Want to help shape the roadmap?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Join our Discord community and share your ideas for the future of Dundies District
          </p>
          <button 
            className="btn-neon magnetic"
            onClick={() => window.open('https://discord.gg/vjSdsjDTZx', '_blank')}
          >
            Join the Discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;