import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { href: '/crypto-fight-club', label: 'Meme Tool' },
    { href: 'https://dswapper.me/', label: 'D Swapper', external: true },
    { href: 'https://dundiecal.lovable.app', label: 'Dundie Cal', external: true },
    { href: '/#community', label: 'Community' },
    { href: '/#about', label: 'About' },
  ];

  const socialLinks = [
    { href: 'https://x.com/DundiesDistrict', label: '𝕏' },
    { href: 'https://discord.gg/vjSdsjDTZx', label: '🎤' },
    { href: 'https://instagram.com/dundiesnft', label: '📸' },
    { href: 'http://tiktok.com/@dundiesnft', label: '🎶' },
    { href: 'http://t.me/DundiesNFT', label: '💬' },
  ];

  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => {
    const baseClasses = isMobile
      ? "block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-all duration-200"
      : "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium";

    const props = {
      className: baseClasses,
      onClick: isMobile ? () => setIsMobileMenuOpen(false) : undefined,
    };

    if (link.external) {
      return (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" {...props}>
          {link.label}
        </a>
      );
    }

    if (link.href.startsWith('#') || link.href.startsWith('/#')) {
      return <a key={link.href} href={link.href} {...props}>{link.label}</a>;
    }

    return <Link key={link.href} to={link.href} {...props}>{link.label}</Link>;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="text-lg font-display font-bold text-foreground tracking-wider hover:opacity-80 transition-opacity duration-200">
            DUNDIES
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => renderNavLink(link))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:bg-white/10 h-9 w-9"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 rounded-b-xl -mx-4 px-2 py-3 space-y-1 animate-fade-in">
            {navLinks.map((link) => renderNavLink(link, true))}
            <div className="flex items-center gap-2 px-4 pt-3 mt-2 border-t border-white/10">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
