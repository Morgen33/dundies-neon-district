import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';

const Services = () => {
  const dundieServices = [
    {
      id: 1,
      name: "Neo",
      avatar: "/lovable-uploads/8594643e-a647-4faa-a98d-92f6fd89e778.png",
      title: "NFT Strategy & Web3 Consulting",
      location: "Global (Remote)",
      specialties: ["NFT Strategy", "Web3 Marketing", "Community Building", "Token Economics"],
      description: "Creator/Artist/founder of The Dundies",
      services: [
        "NFT Collection Strategy",
        "Whitelist & Marketing Strategy", 
        "Community Growth Planning",
        "Web3 Consulting Calls"
      ],
      availability: "Available",
      responseTime: "< 2 hours",
      contactUrl: "https://x.com/theonlyoneNeo"
    },
    {
      id: 2,
      name: "ArtisticDundie",
      avatar: "/src/assets/dundie-pink-hair.png",
      title: "Digital Art & NFT Creation",
      location: "Los Angeles, CA",
      rating: 5.0,
      reviews: 92,
      hourlyRate: "1-3 SOL/hr",
      specialties: ["Digital Art", "NFT Design", "Character Design", "Animation"],
      description: "Professional digital artist specializing in NFT artwork and character design. Featured in multiple blue-chip collections.",
      services: [
        "Custom NFT Artwork",
        "Character Design & Concepts",
        "Collection Art Direction",
        "Animated NFT Creation"
      ],
      availability: "Booking 2 weeks out",
      responseTime: "< 4 hours"
    },
    {
      id: 3,
      name: "TechDundie",
      avatar: "/src/assets/dundie-crown.png",
      title: "Smart Contract Development",
      location: "Austin, TX",
      rating: 4.8,
      reviews: 34,
      hourlyRate: "2-5 SOL/hr",
      specialties: ["Solana Development", "Smart Contracts", "DApp Development", "Auditing"],
      description: "Senior blockchain developer with expertise in Solana ecosystem. Built contracts for 50+ NFT projects.",
      services: [
        "Smart Contract Development",
        "Solana Program Building",
        "Security Audits",
        "DApp Frontend Development"
      ],
      availability: "Available",
      responseTime: "< 1 hour"
    },
    {
      id: 4,
      name: "BusinessDundie", 
      avatar: "/src/assets/dundie-cowboy.png",
      title: "Business Strategy & Operations",
      location: "New York, NY",
      rating: 4.7,
      reviews: 28,
      hourlyRate: "1-2 SOL/hr",
      specialties: ["Business Strategy", "Operations", "Project Management", "Partnerships"],
      description: "Former Fortune 500 executive now helping Web3 projects scale and optimize their operations.",
      services: [
        "Business Strategy Consulting",
        "Operational Optimization",
        "Partnership Development",
        "Team Building & Management"
      ],
      availability: "Limited availability",
      responseTime: "< 6 hours"
    },
    {
      id: 5,
      name: "ContentDundie",
      avatar: "/src/assets/dundie-fishing.png", 
      title: "Content Creation & Social Media",
      location: "Miami, FL",
      rating: 4.9,
      reviews: 67,
      hourlyRate: "0.3-1 SOL/hr",
      specialties: ["Content Creation", "Social Media", "Video Editing", "Copywriting"],
      description: "Content creator with 100k+ followers across platforms. Specializing in Web3 and NFT content that converts.",
      services: [
        "Social Media Management",
        "Video Content Creation",
        "Copywriting & Scripts",
        "Influencer Outreach"
      ],
      availability: "Available",
      responseTime: "< 30 minutes"
    },
    {
      id: 6,
      name: "MusicDundie",
      avatar: "/src/assets/dundie-baseball.png",
      title: "Music Production & Audio NFTs",
      location: "Nashville, TN", 
      rating: 5.0,
      reviews: 15,
      hourlyRate: "1-4 SOL/hr",
      specialties: ["Music Production", "Audio NFTs", "Sound Design", "Mixing & Mastering"],
      description: "Grammy-nominated producer creating exclusive music NFTs and audio experiences for Web3 projects.",
      services: [
        "Custom Music Production",
        "Audio NFT Creation", 
        "Sound Design for Projects",
        "Mixing & Mastering"
      ],
      availability: "Booking 1 month out",
      responseTime: "< 24 hours"
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes("Available")) return "text-green-400";
    if (availability.includes("Limited")) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            <span className="text-hot-pink glow-text">Dundie</span>
            <span className="text-bright-blue bright-text"> Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with talented Dundies offering professional services in Web3, design, development, and more.
            <span className="text-electric-purple font-semibold"> Real expertise, Dundie quality.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-hot-pink border-hot-pink/50">NFT Strategy</Badge>
            <Badge variant="outline" className="text-electric-purple border-electric-purple/50">Digital Art</Badge>
            <Badge variant="outline" className="text-bright-blue border-bright-blue/50">Development</Badge>
            <Badge variant="outline" className="text-acid-lime border-acid-lime/50">Marketing</Badge>
            <Badge variant="outline" className="text-hot-pink border-hot-pink/50">Consulting</Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {dundieServices.map((dundie, index) => (
              <Card 
                key={dundie.id}
                className="sticker-card border-2 border-electric-purple/30 hover:border-electric-purple hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-hot-pink/50">
                        <img 
                          src={dundie.avatar} 
                          alt={dundie.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-foreground text-lg">{dundie.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{dundie.title}</CardDescription>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{dundie.location}</span>
                    </div>
                    {dundie.hourlyRate && (
                      <div className="text-bright-blue font-semibold">
                        {dundie.hourlyRate}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dundie.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {dundie.specialties.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{dundie.specialties.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {dundie.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Services Offered:</h4>
                    <ul className="space-y-1">
                      {dundie.services.map((service) => (
                        <li key={service} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-hot-pink rounded-full"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className={`flex items-center space-x-1 ${getAvailabilityColor(dundie.availability)}`}>
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{dundie.availability}</span>
                      </div>
                      <p className="text-muted-foreground">Responds in {dundie.responseTime}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button 
                      className="flex-1 btn-glow magnetic text-sm"
                      onClick={() => window.open(dundie.contactUrl || 'https://discord.gg/vjSdsjDTZx', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-electric-purple/50 hover:border-electric-purple"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-hot-pink/10 via-electric-purple/10 to-bright-blue/10 rounded-3xl border border-hot-pink/30 p-8">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Want to offer your services?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Join the Dundies community and showcase your talents to fellow members
          </p>
          <Button 
            className="btn-glow magnetic mr-4"
            onClick={() => window.open('https://discord.gg/vjSdsjDTZx', '_blank')}
          >
            Join Our Discord
          </Button>
          <Button 
            variant="outline"
            className="border-electric-purple/50 hover:border-electric-purple"
          >
            Learn More
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;