import React, { useEffect } from 'react';

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const RainbowButton = ({ children, onClick, className = "" }: RainbowButtonProps) => {
  useEffect(() => {
    // Add the CSS to the document if it doesn't exist
    if (!document.querySelector('#rainbow-button-styles')) {
      const style = document.createElement('style');
      style.id = 'rainbow-button-styles';
      style.textContent = `
        .rainbow-border::before,
        .rainbow-border::after {
          content: '';
          position: absolute;
          left: -2px;
          top: -2px;
          border-radius: 12px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: -1;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-border::after {
          filter: blur(50px);
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
    <button 
      onClick={onClick}
      className={`rainbow-border relative w-auto h-12 flex items-center justify-center gap-2.5 px-6 bg-black rounded-xl border-none text-white cursor-pointer font-black transition-all duration-200 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};