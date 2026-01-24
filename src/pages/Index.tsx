import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Community from '@/components/Community';
import SpotifyPlaylist from '@/components/SpotifyPlaylist';
import About from '@/components/About';
import JoinBar from '@/components/JoinBar';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';

import DundieCal from '@/components/DundieCal';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground relative">
      
      <FloatingBubbles />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Collection />
        <DundieCal />
        <Community />
        <SpotifyPlaylist />
        <About />
        <JoinBar />
        <Footer />
      </div>
    </div>
  );
};

export default Index;