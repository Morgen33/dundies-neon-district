import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      // Start exit animation
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 600); // Match animation duration
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="page-container">
      <div 
        className={`page-content ${isTransitioning ? 'page-exit' : 'page-enter'}`}
        key={displayLocation.pathname}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;