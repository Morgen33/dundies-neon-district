const Footer = () => {
  const socialLinks = [
    { icon: '🌐', url: 'http://dundies.xyz', label: 'Website' },
    { icon: '🐦', url: 'https://x.com/DundiesDistrict', label: 'X/Twitter' },
    { icon: '🎶', url: 'http://tiktok.com/@dundiesnft', label: 'TikTok' },
    { icon: '📸', url: 'https://instagram.com/dundiesnft', label: 'Instagram' },
    { icon: '💬', url: 'http://t.me/DundiesNFT', label: 'Telegram' },
    { icon: '🎤', url: 'https://discord.gg/vjSdsjDTZx', label: 'Discord' },
    { icon: '📌', url: 'https://bio.site/dundies', label: 'Bio Hub' }
  ];

  return (
    <footer className="border-t border-hot-pink/20 bg-gradient-subtle py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold neon-text text-hot-pink mb-2">
              DUNDIES DISTRICT
            </h3>
            <p className="text-sm text-muted-foreground">
              Hand-drawn NFTs by Neo.<br />
              <span className="text-neon-blue">Loud. Neon. Unmistakable.</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-lg hover:scale-110 transition-transform duration-300 hover:text-hot-pink"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-muted-foreground">
              © 2024 Dundies District
            </p>
            <p className="text-xs text-muted-foreground max-w-xs md:ml-auto">
              Independent fan-inspired art project.<br />
              Not affiliated with NBCUniversal or <em>The Office</em>.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-hot-pink/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Built on Solana</span>
              <span>•</span>
              <span>Fully On-Chain</span>
              <span>•</span>
              <span>Zero Royalties</span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-acid-lime rounded-full animate-pulse"></span>
              <span>Made with 💜 by Neo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;