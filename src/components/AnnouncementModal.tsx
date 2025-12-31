import { useState } from 'react';
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
  const hasSeenModal = sessionStorage.getItem('hasSeenAnnouncement');
  const [open, setOpen] = useState(!hasSeenModal);

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      sessionStorage.setItem('hasSeenAnnouncement', 'true');
    }
    setOpen(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl border-2 border-electric-purple bg-gradient-to-br from-background via-background to-electric-purple/10 p-8 shadow-2xl">
        <DialogHeader className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-hot-pink animate-pulse" />
              <Sparkles className="w-8 h-8 text-acid-lime absolute top-0 right-0 animate-bounce" />
            </div>
          </div>
          
          <DialogTitle className="text-4xl md:text-5xl font-display font-bold text-center bg-gradient-to-r from-hot-pink via-electric-purple to-bright-blue bg-clip-text text-transparent leading-tight">
            Dundies District is NOW LIVE! 🎉
          </DialogTitle>
          
          <DialogDescription className="text-2xl text-center text-foreground font-semibold">
            Public mint is open for everyone!
          </DialogDescription>

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
              Mint Dundies District Now
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
