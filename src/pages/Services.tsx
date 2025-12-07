import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import morgenAvatar from '@/assets/morgen-avatar.jpeg';
import { useState } from 'react';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'NFT Strategy', 'Web3 Marketing', 'Community Building', 'Web Design', 'Social Media', 'Copywriting', 'AI'];
  
  const dundieServices = [
    {
      id: 1,
      name: "Neo",
      avatar: "/lovable-uploads/8594643e-a647-4faa-a98d-92f6fd89e778.png",
      title: "NFT Strategy & Web3 Consulting",
      location: "Global (Remote)",
      specialties: ["NFT Strategy", "Web3 Marketing", "Community Building", "Game Development"],
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
      name: "Morgen Victoria",
      avatar: morgenAvatar,
      title: "Web Design & Digital Marketing",
      location: "NJ (Remote)",
      specialties: ["Web Design", "Social Media", "Copywriting", "Community Building", "AI"],
      description: "Full-service digital creative specializing in web design, social media strategy, and AI-powered solutions.",
      services: [
        "Web Design",
        "Social Media Management",
        "Copywriting",
        "Community Building",
        "Artificial Intelligence"
      ],
      availability: "Available",
      responseTime: "< 4 hours",
      contactUrl: "https://x.com/AiArsenals"
    }
  ];

  const getFilteredServices = () => {
    if (activeFilter === 'All') return dundieServices;
    
    return dundieServices.filter(dundie => 
      dundie.specialties.some(specialty => {
        if (activeFilter === 'Development') {
          return specialty.includes('Development') || specialty.includes('Smart Contracts') || specialty.includes('DApp') || specialty.includes('Solana');
        }
        if (activeFilter === 'Marketing') {
          return specialty.includes('Marketing') || specialty.includes('Content') || specialty.includes('Social Media');
        }
        if (activeFilter === 'Consulting') {
          return specialty.includes('Consulting') || specialty.includes('Strategy') || specialty.includes('Business');
        }
        return specialty.includes(activeFilter);
      })
    );
  };

  const filteredServices = getFilteredServices();


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
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={activeFilter === category ? "default" : "outline"} 
                className={`cursor-pointer transition-all duration-200 ${
                  activeFilter === category 
                    ? 'bg-hot-pink text-white border-hot-pink shadow-glow' 
                    : 'text-hot-pink border-hot-pink/50 hover:border-hot-pink hover:bg-hot-pink/10'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((dundie, index) => (
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
                    {'hourlyRate' in dundie && dundie.hourlyRate && (
                      <div className="text-bright-blue font-semibold">
                        {String(dundie.hourlyRate)}
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
            You must hold a V1 or V2 Dundie to be listed. Reach out to Morgen on Twitter to get started!
          </p>
          <Button 
            className="btn-glow magnetic"
            onClick={() => window.open('https://x.com/AiArsenals', '_blank')}
          >
            Contact Morgen on Twitter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;