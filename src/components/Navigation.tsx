import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#collection', label: 'Home' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/services', label: 'Services' },
    { href: '/#community', label: 'Community' },
    { href: '/#about', label: 'About' },
    { href: '/#join', label: 'Join' },
  ];

  const socialLinks = [
    { href: 'https://x.com/DundiesDistrict', label: '𝕏', external: true },
    { href: 'https://discord.gg/vjSdsjDTZx', label: '🎤', external: true },
    { href: 'https://instagram.com/dundiesnft', label: '📸', external: true },
    { href: 'http://tiktok.com/@dundiesnft', label: '🎶', external: true },
    { href: 'http://t.me/DundiesNFT', label: '💬', external: true },
  ];

  const renderNavLink = (link: any, isMobile = false) => {
    const baseClasses = isMobile 
      ? "block px-3 py-2 text-base font-medium text-foreground hover:text-hot-pink transition-colors duration-300"
      : "text-foreground hover:text-hot-pink transition-colors duration-300 font-medium relative group";

    if (link.external) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
        >
          {link.label}
          {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot-pink transition-all duration-300 group-hover:w-full"></span>}
        </a>
      );
    }

    if (link.href.startsWith('#') || link.href.startsWith('/#')) {
      return (
        <a
          key={link.href}
          href={link.href}
          className={baseClasses}
          onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
        >
          {link.label}
          {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot-pink transition-all duration-300 group-hover:w-full"></span>}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        className={baseClasses}
        onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
      >
        {link.label}
        {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot-pink transition-all duration-300 group-hover:w-full"></span>}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-hot-pink/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-display font-bold bright-text hover:scale-105 transition-transform duration-300">
              DUNDIES
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => renderNavLink(link))}
            </div>
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-hot-pink transition-colors duration-300 magnetic"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-hot-pink"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-hot-pink/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => renderNavLink(link, true))}
              <div className="flex items-center space-x-4 px-3 py-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-hot-pink transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;