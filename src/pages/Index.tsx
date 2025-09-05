import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Community from '@/components/Community';
import SpotifyPlaylist from '@/components/SpotifyPlaylist';
import About from '@/components/About';
import JoinBar from '@/components/JoinBar';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground relative">
      <FloatingBubbles />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Collection />
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