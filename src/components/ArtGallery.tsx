import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Zap } from 'lucide-react';
import galleryImage1 from '@/assets/dundie-gallery-1.png';
import galleryImage2 from '@/assets/dundie-gallery-2.png';
import galleryImage3 from '@/assets/dundie-gallery-3.png';
import galleryImage4 from '@/assets/dundie-gallery-4.png';
import dundieCrown from '@/assets/dundie-crown.png';
import dundiePinkHair from '@/assets/dundie-pink-hair.png';
import dundieFishing from '@/assets/dundie-fishing.png';
import dundieCowboy from '@/assets/dundie-cowboy.png';
import dundieWizard from '@/assets/dundie-wizard.png';
import dundieBaseball from '@/assets/dundie-baseball.png';

const ArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const artPieces = [
    {
      id: 1,
      src: galleryImage1,
      title: 'Wizard Dundie',
      traits: ['Wizard', 'Hat', 'Magic'],
      rarity: 'Legendary'
    },
    {
      id: 2,
      src: galleryImage2,
      title: 'Sports Champion',
      traits: ['Sports', 'Cap', 'Athletic'],
      rarity: 'Rare'
    },
    {
      id: 3,
      src: galleryImage3,
      title: 'Angel Vibes',
      traits: ['Halo', 'Wings', 'Divine'],
      rarity: 'Epic'
    },
    {
      id: 4,
      src: galleryImage4,
      title: 'Pirate Legend',
      traits: ['Hat', 'Pirate', 'Weapon'],
      rarity: 'Rare'
    },
    {
      id: 5,
      src: dundieCrown,
      title: 'Royal Crown',
      traits: ['Hat', 'Crown', 'Royal'],
      rarity: 'Mythic'
    },
    {
      id: 6,
      src: dundiePinkHair,
      title: 'Dreamer',
      traits: ['Hair', 'Thoughts', 'Pink'],
      rarity: 'Epic'
    },
    {
      id: 7,
      src: dundieFishing,
      title: 'Fisher King',
      traits: ['Sports', 'Beard', 'Fishing'],
      rarity: 'Rare'
    },
    {
      id: 8,
      src: dundieCowboy,
      title: 'Wild West',
      traits: ['Hat', 'Sunglasses', 'Cowboy'],
      rarity: 'Legendary'
    },
    {
      id: 9,
      src: dundieWizard,
      title: 'Star Mage',
      traits: ['Wizard', 'Hat', 'Stars'],
      rarity: 'Epic'
    },
    {
      id: 10,
      src: dundieBaseball,
      title: 'Home Run Hero',
      traits: ['Sports', 'Hat', 'Baseball'],
      rarity: 'Rare'
    }
  ];

  const filters = ['All', 'Hats', 'Beards', 'Halo', 'Weapons', 'Sports', 'Wizard'];

  const filteredArt = artPieces.filter(piece => 
    activeFilter === 'All' || piece.traits.some(trait => 
      trait.toLowerCase().includes(activeFilter.toLowerCase())
    )
  );

  return (
    <section id="art" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-hot-pink bright-text">Art</span>{' '}
            <span className="text-electric-purple">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each Dundie is a unique, hand-drawn character with <span className="text-bright-blue">bold digital personality</span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-hot-pink text-background shadow-glow'
                  : 'bg-muted text-muted-foreground hover:bg-hot-pink/20 hover:text-hot-pink border border-hot-pink/30'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArt.map((piece) => (
            <div
              key={piece.id}
              className="sticker-card group cursor-pointer"
              onClick={() => setSelectedImage(piece)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-6 h-6 text-acid-lime" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{piece.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {piece.traits.slice(0, 2).map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 text-xs rounded-full bg-electric-purple/20 text-electric-purple border border-electric-purple/30"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${
                    piece.rarity === 'Mythic' ? 'text-acid-lime' :
                    piece.rarity === 'Legendary' ? 'text-hot-pink' :
                    piece.rarity === 'Epic' ? 'text-electric-purple' :
                    'text-bright-blue'
                  }`}>
                    {piece.rarity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-foreground hover:text-hot-pink"
                variant="ghost"
                size="sm"
              >
                <X size={24} />
              </Button>
              
              <div className="bg-card border border-hot-pink/30 rounded-3xl p-8 sticker-card">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-3xl font-display font-bold text-hot-pink bright-text">
                      {selectedImage.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-electric-purple">Traits</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedImage.traits.map((trait: string) => (
                            <span
                              key={trait}
                              className="px-4 py-2 rounded-full bg-bright-blue/20 text-bright-blue border border-bright-blue/30"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-electric-purple">Rarity</h4>
                        <span className={`text-xl font-bold ${
                          selectedImage.rarity === 'Mythic' ? 'text-acid-lime' :
                          selectedImage.rarity === 'Legendary' ? 'text-hot-pink' :
                          selectedImage.rarity === 'Epic' ? 'text-electric-purple' :
                          'text-bright-blue'
                        }`}>
                          {selectedImage.rarity}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="btn-glow w-full"
                      onClick={() => window.open('https://www.launchmynft.io/collections/8pXL1gZGWq1Y6wA7RJTmAVXcwBhzn65XdeLL7yA8AwFb/ZMZXWPY2COXyqoohzTfK', '_blank')}
                    >
                      View on LaunchMyNFT
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtGallery;