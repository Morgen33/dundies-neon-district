import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';

const DundieCal = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-hot-pink/5 to-background"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hot-pink/20 border border-hot-pink/30 mb-6">
          <Calendar className="w-5 h-5 text-hot-pink" />
          <span className="text-sm font-medium text-hot-pink">Community Calendar</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bright-text">
          DUNDIE CAL
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stay up to date with all Dundies District events, drops, and community activities. Never miss a moment!
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-hot-pink hover:bg-hot-pink/90 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-hot-pink/30 hover:shadow-hot-pink/50 transition-all duration-300"
        >
          <a
            href="https://dundiecal.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            View Dundie Cal
            <ExternalLink className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default DundieCal;
