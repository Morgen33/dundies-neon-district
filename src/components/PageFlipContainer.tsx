import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Index from '@/pages/Index';
import Marketplace from '@/pages/Marketplace';
import Services from '@/pages/Services';

const PageFlipContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const containerRef = useRef<HTMLDivElement>(null);

  // Page configuration matching navigation
  const pages = [
    { 
      path: '/', 
      label: 'Home', 
      component: <Index />,
      id: 'home'
    },
    { 
      path: '/marketplace', 
      label: 'Marketplace', 
      component: <Marketplace />,
      id: 'marketplace'
    },
    { 
      path: '/services', 
      label: 'Services', 
      component: <Services />,
      id: 'services'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      component: (
        <div className="page min-h-screen bg-background text-foreground flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center p-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold neon-text mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with the Dundies team
            </p>
            <div className="space-y-4">
              <p className="text-lg">Join our Discord community:</p>
              <a 
                href="https://discord.gg/vjSdsjDTZx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-hot-pink to-electric-purple text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      ),
      id: 'contact'
    }
  ];

  // Initialize current page based on location
  useEffect(() => {
    const pageIndex = pages.findIndex(page => page.path === location.pathname);
    if (pageIndex !== -1) {
      setCurrentPage(pageIndex);
    }
  }, [location.pathname]);

  // Navigation function
  const navigateToPage = (pageIndex: number) => {
    if (pageIndex === currentPage || isFlipping) return;
    
    setIsFlipping(true);
    setFlipDirection(pageIndex > currentPage ? 'next' : 'prev');
    
    setTimeout(() => {
      setCurrentPage(pageIndex);
      navigate(pages[pageIndex].path, { replace: true });
      
      setTimeout(() => {
        setIsFlipping(false);
      }, 400);
    }, 400);
  };

  // Expose navigation function globally for other components
  useEffect(() => {
    (window as any).flipToPage = navigateToPage;
  }, [navigateToPage]);

  // Gesture handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentPage < pages.length - 1) {
      navigateToPage(currentPage + 1);
    }
    if (isRightSwipe && currentPage > 0) {
      navigateToPage(currentPage - 1);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 p-3 bg-background/90 backdrop-blur-md border border-hot-pink/20 rounded-2xl shadow-lg">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => navigateToPage(index)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                currentPage === index
                  ? 'bg-hot-pink text-white shadow-lg'
                  : 'text-foreground hover:bg-hot-pink/20 border border-hot-pink/30'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>

      {/* Page Flip Container */}
      <div 
        ref={containerRef}
        className="page-flip-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {pages.map((page, index) => (
          <div
            key={page.id}
            className={`page-wrapper ${
              index === currentPage ? 'active' : 
              index < currentPage ? 'flipped-left' : 'flipped-right'
            } ${
              isFlipping && index === currentPage ? 
                (flipDirection === 'next' ? 'flipping-out-left' : 'flipping-out-right') : ''
            } ${
              isFlipping && 
              ((flipDirection === 'next' && index === currentPage + 1) ||
               (flipDirection === 'prev' && index === currentPage - 1)) ? 
                'flipping-in' : ''
            }`}
            style={{
              zIndex: index === currentPage ? 10 : index < currentPage ? index : pages.length - index
            }}
          >
            <div className="page-content">
              {page.component}
            </div>
          </div>
        ))}
      </div>

      {/* Page indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-hot-pink shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PageFlipContainer;