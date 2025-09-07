import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
const Community = () => {
  const socialLinks = [{
    name: 'Website',
    icon: '🌐',
    url: 'http://dundies.xyz',
    description: 'Official Hub'
  }, {
    name: 'X/Twitter',
    icon: '🐦',
    url: 'https://x.com/DundiesDistrict',
    description: 'Latest Updates'
  }, {
    name: 'TikTok',
    icon: '🎶',
    url: 'http://tiktok.com/@dundiesnft',
    description: 'Creative Content'
  }, {
    name: 'Instagram',
    icon: '📸',
    url: 'https://instagram.com/dundiesnft',
    description: 'Visual Stories'
  }, {
    name: 'Telegram',
    icon: '💬',
    url: 'http://t.me/DundiesNFT',
    description: 'Quick Chat'
  }, {
    name: 'Discord',
    icon: '🎤',
    url: 'https://discord.gg/vjSdsjDTZx',
    description: 'Main Community'
  }, {
    name: 'Dundie Merch',
    icon: '👕',
    url: 'https://ultraixclothing.com/collections/spu-x-dundies-collection',
    description: 'Official Store'
  }, {
    name: 'Bio Hub',
    icon: '📌',
    url: 'https://bio.site/dundies',
    description: 'All Links'
  }];
  const marqueeItems = ['Spaces', 'Collabs', 'Drops', 'IRL Pop-ups', 'Art Reveals', 'Community Events', 'Exclusive Access'];
  return <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-electric-purple glow-text">Social</span>{' '}
            <span className="text-hot-pink bright-text">Links</span>
          </h2>
          
        </div>

        {/* Animated Marquee */}
        <div className="relative overflow-hidden bg-gradient-to-r from-hot-pink/10 via-electric-purple/10 to-bright-blue/10 rounded-2xl border border-hot-pink/30 mb-12">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...marqueeItems, ...marqueeItems].map((item, index) => <span key={index} className="mx-8 text-lg font-semibold text-foreground inline-flex items-center">
                <span className="w-2 h-2 bg-acid-lime rounded-full mr-3"></span>
                {item}
              </span>)}
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialLinks.map(social => <Button key={social.name} onClick={() => window.open(social.url, '_blank')} className="sticker-card h-auto p-6 flex flex-col items-center space-y-4 text-center group border-2 border-hot-pink/30 hover:border-hot-pink hover:shadow-glow transition-all duration-300" variant="ghost">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-hot-pink transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {social.description}
                </p>
              </div>

              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-bright-blue transition-colors duration-300" />
            </Button>)}
        </div>

      </div>
    </section>;
};
export default Community;