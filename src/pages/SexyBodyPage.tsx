import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-borders-button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ShaderAnimation from '@/components/ui/shader-animation';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const SexyBodyPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
          setAudioStarted(true);
        }
      } catch (error) {
        console.error('Error toggling audio:', error);
      }
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    // Set initial volume
    audio.volume = volume;

    // Try autoplay
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAudioStarted(true);
      } catch (error) {
        console.log('Autoplay prevented:', error);
      }
    };
    tryAutoplay();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div className="min-h-screen text-foreground relative flex items-center justify-center overflow-hidden">
      <ShaderAnimation />
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Button asChild variant="outline" className="border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-black">
          <Link to="/">← Back</Link>
        </Button>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="relative">
          {/* Animated background shapes */}
          
          <div className="absolute -bottom-10 -right-16 w-32 h-32 bg-gradient-to-r from-lime to-aqua rounded-full opacity-20 animate-bounce"></div>
          
          {/* Main text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-tight">
            <span className="bright-text block animate-variable-flash">
              IT IS BECAUSE
            </span>
            <span className="text-hot-pink block animate-variable-flash" style={{
            animationDelay: '0.5s'
          }}>
              OF MY
            </span>
            <span className="sexy-body-text block text-7xl md:text-9xl lg:text-[12rem]" style={{
            animationDelay: '1s'
          }}>
              {"SEXY BODY".split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="animate-variable-flash inline-block"
                  style={{
                    animationDelay: `${1 + index * 0.1}s`
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>

          {/* Confetti-like elements */}
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-hot-pink rounded-full animate-bounce" style={{
          animationDelay: '0.2s'
        }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-lime rounded-full animate-bounce" style={{
          animationDelay: '0.8s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-electric-blue rounded-full animate-bounce" style={{
          animationDelay: '1.2s'
        }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-aqua rounded-full animate-bounce" style={{
          animationDelay: '0.6s'
        }}></div>
        </div>


        {/* Audio Player */}
        <div className="mt-12 w-full max-w-md bg-black/40 backdrop-blur-md border-2 border-hot-pink/30 rounded-2xl p-6 shadow-2xl animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handlePlayPause}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-hot-pink to-electric-purple hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" fill="white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              )}
            </button>
            
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm mb-1">Pum Pum Sexy Body 💃</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-hot-pink to-electric-purple transition-all duration-100"
                    style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                  />
                </div>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button onClick={toggleMute} className="text-white hover:text-hot-pink transition-colors">
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <Slider
              value={[isMuted ? 0 : volume]}
              onValueChange={handleVolumeChange}
              max={1}
              step={0.01}
              className="flex-1"
            />
          </div>
        </div>

        {/* Rainbow Button positioned below */}
        <div className="mt-8 animate-fade-in" style={{
        animationDelay: '2s'
      }}>
          <RainbowButton onClick={() => window.location.href = '/'} className="text-lg px-8 py-4">
            Damn Right! 🔥
          </RainbowButton>
        </div>
      </div>
      
      {/* Audio element for background music */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/lovable-uploads/Pum Pum Sexy Body.mp3" type="audio/mpeg" />
      </audio>
    </div>;
};
export default SexyBodyPage;