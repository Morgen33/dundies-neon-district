const SpotifyPlaylist = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Playlist
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tune into the sounds that inspire our community
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/5R3IGjM40LDQZ50TO4z4eA?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          />
        </div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;