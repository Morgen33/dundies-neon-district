import React, { useEffect } from 'react';

interface RainbowLetterProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RainbowLetter = ({ children, delay = 0, className = "" }: RainbowLetterProps) => {
  useEffect(() => {
    // Add the CSS to the document if it doesn't exist
    if (!document.querySelector('#rainbow-letter-styles')) {
      const style = document.createElement('style');
      style.id = 'rainbow-letter-styles';
      style.textContent = `
        .rainbow-letter::before,
        .rainbow-letter::after {
          content: '';
          position: absolute;
          left: -3px;
          top: -3px;
          border-radius: 8px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
          width: calc(100% + 6px);
          height: calc(100% + 6px);
          z-index: -1;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-letter::after {
          filter: blur(30px);
        }
        .rainbow-letter:hover {
          transform: scale(1.1);
        }
        @keyframes rainbow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <span 
      className={`rainbow-letter relative inline-block transition-transform duration-200 ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        marginRight: children === ' ' ? '0.5em' : '0.1em'
      }}
    >
      {children}
    </span>
  );
};