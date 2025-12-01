import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, ExternalLink } from 'lucide-react';

const AnnouncementModal = () => {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl border-2 border-electric-purple bg-gradient-to-br from-background via-background to-electric-purple/10 p-8 shadow-2xl">
        <DialogHeader className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-hot-pink animate-pulse" />
              <Sparkles className="w-8 h-8 text-acid-lime absolute top-0 right-0 animate-bounce" />
            </div>
          </div>
          
          <DialogTitle className="text-4xl md:text-5xl font-display font-bold text-center bg-gradient-to-r from-hot-pink via-electric-purple to-bright-blue bg-clip-text text-transparent leading-tight">
            V2 is LIVE For Dundie Holders! 🎉
          </DialogTitle>
          
          <DialogDescription className="text-2xl text-center text-foreground font-semibold">
            Public is coming soon
          </DialogDescription>

          <div className="bg-black/40 backdrop-blur-sm border-2 border-bright-blue/30 rounded-2xl p-6 space-y-4">
            <p className="text-center text-muted-foreground text-lg font-medium">
              Public Launch Countdown
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-gradient-to-br from-hot-pink to-electric-purple rounded-xl p-4 min-w-[90px] shadow-lg">
                <div className="text-4xl font-bold text-white text-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 text-center mt-1">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-electric-purple to-bright-blue rounded-xl p-4 min-w-[90px] shadow-lg">
                <div className="text-4xl font-bold text-white text-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 text-center mt-1">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-bright-blue to-acid-lime rounded-xl p-4 min-w-[90px] shadow-lg">
                <div className="text-4xl font-bold text-white text-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-white/80 text-center mt-1">Seconds</div>
              </div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-hot-pink via-electric-purple to-bright-blue hover:scale-105 transition-transform duration-300 text-lg font-bold py-6 shadow-xl"
          >
            <a
              href="https://launchmynft.io/collections/CNanpoKLE1Qn9koxzbMvV6phQ6YkVsbYgBsYALbWJib6/Q7lGmfhBy2WEQLIbR3nq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Launch V2 Now
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
