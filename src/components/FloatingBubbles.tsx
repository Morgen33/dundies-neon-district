import { useEffect, useState } from 'react';

const bubbles = [
  { src: "/lovable-uploads/7865b5fd-6bf5-4724-8359-221e16c7d1c1.png", alt: "Dundie Angel floating bubble", anim: "animate-[float-bubble-4_28s_ease-in-out_infinite]", delay: 0 },
  { src: "/lovable-uploads/1ac2bbe6-bb7b-4b3c-a75c-d81d12ba6e83.png", alt: "Dundie Baseball floating bubble", anim: "animate-[float-bubble-5_32s_ease-in-out_infinite_1s]", delay: 150 },
  { src: "/lovable-uploads/11d1b86f-a592-41a1-9e61-22dbfd3d4ecc.png", alt: "Dundie Wizard floating bubble", anim: "animate-[float-bubble-6_27s_ease-in-out_infinite_.5s]", delay: 300 },
  { src: "/lovable-uploads/5602bd77-3bfc-4b74-9b31-37a53adc5ea0.png", alt: "Dundie Cowboy floating bubble", anim: "animate-[float-bubble-7_30s_ease-in-out_infinite_2s]", delay: 100 },
  { src: "/lovable-uploads/5e4285df-993c-4b5f-89d0-bf98aa635667.png", alt: "Dundie Pink Hair floating bubble", anim: "animate-[float-bubble-8_34s_ease-in-out_infinite_1.8s]", delay: 400 },
  { src: "/lovable-uploads/f4e93ff4-be01-4a12-9411-13fcca414a92.png", alt: "Dundie Cool Angel floating bubble", anim: "animate-[float-bubble-6_36s_ease-in-out_infinite_1.2s]", delay: 200 },
  { src: "/lovable-uploads/859dad91-27b2-4509-8fe8-6f9c47323d55.png", alt: "Dundie Crown floating bubble", anim: "animate-[float-bubble-4_38s_ease-in-out_infinite_3s]", delay: 350 },
];

const FloatingBubbles = () => {
  const [popTrigger, setPopTrigger] = useState(false);
  const [poppedSet, setPoppedSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      // Pop right before the Collection/Own a Dundie section
      // Hero is ~140vh, so trigger around 80-90% of viewport height
      const threshold = window.innerHeight * 0.85;
      setPopTrigger(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (popTrigger) {
      bubbles.forEach((b, i) => {
        setTimeout(() => {
          setPoppedSet(prev => new Set(prev).add(i));
        }, b.delay);
      });
    } else {
      setPoppedSet(new Set());
    }
  }, [popTrigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-glow flex items-center justify-center ${bubble.anim}`}
          style={{
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            transform: poppedSet.has(i) ? 'scale(1.8)' : 'scale(1)',
            opacity: poppedSet.has(i) ? 0 : 1,
          }}
        >
          <img src={bubble.src} alt={bubble.alt} className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
