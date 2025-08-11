import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ArtGallery from '@/components/ArtGallery';
import Collection from '@/components/Collection';
import Community from '@/components/Community';
import WallOfFame from '@/components/WallOfFame';
import About from '@/components/About';
import JoinBar from '@/components/JoinBar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ArtGallery />
      <Collection />
      <Community />
      <WallOfFame />
      <About />
      <JoinBar />
      <Footer />
    </div>
  );
};

export default Index;