import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Community from '@/components/Community';
import WallOfFame from '@/components/WallOfFame';
import About from '@/components/About';
import JoinBar from '@/components/JoinBar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <Hero />
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