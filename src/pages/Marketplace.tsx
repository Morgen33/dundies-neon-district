import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, TrendingUp, Activity } from 'lucide-react';

const Marketplace = () => {
  useEffect(() => {
    // Inject the optimized Magic Eden marketplace widget
    const script = document.createElement('script');
    script.innerHTML = `
      (function(){
        const SYMBOL = "5DJBKxbYj8wD2D56K6BGhFPUSwspESL6LkT9Kn8zwkAz";
        const DIRECT = "https://api-mainnet.magiceden.dev/v2";
        // If preview blocks CORS, put your Cloudflare Worker URL here:
        const WORKER = ""; // e.g. "https://me-proxy-yourname.workers.dev"
        const url = (p) => WORKER ? \`\${WORKER}?u=\${encodeURIComponent(\`\${DIRECT}/\${p}\`)}\` : \`\${DIRECT}/\${p}\`;

        const $stats = document.getElementById('dm-stats');
        const $listings = document.getElementById('dm-listings');
        const $activity = document.getElementById('dm-activity');
        const tabs = document.querySelectorAll('.dm-tab');

        tabs.forEach(btn=>{
          btn.addEventListener('click', () => {
            tabs.forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            if(tab==='listings'){ $activity.style.display='none'; $listings.style.display=''; if(!$listings.dataset.loaded) loadListings(); }
            else { $listings.style.display='none'; $activity.style.display=''; if(!$activity.dataset.loaded) loadActivity(); }
          });
        });

        const toSOL = (x) => (x && x > 1e7) ? x/1e9 : x;
        const f = (n,d=2)=> n==null ? '—' : Number(n).toFixed(d);
        const timeAgo = (u)=>{const d=(Date.now()/1000-u);const a=[[31536000,'y'],[2592000,'mo'],[604800,'w'],[86400,'d'],[3600,'h'],[60,'m']];for(const[s,l]of a){if(d>=s)return Math.floor(d/s)+l}return Math.max(1,Math.floor(d))+'s'};
        const fetchJson = (u)=> fetch(u).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json()});

        async function loadStats(){
          try{
            const d = await fetchJson(url(\`collections/\${SYMBOL}/stats\`));
            $stats.innerHTML = \`
              <div class="chip">Floor: <b>\${f(toSOL(d.floorPrice),2)}</b> SOL</div>
              <div class="chip">Listed: <b>\${d.listedCount ?? '—'}</b></div>
              <div class="chip">24h Vol: <b>\${f(toSOL(d.avgPrice24hr),2)}</b></div>
              <div class="chip">All-time Vol: <b>\${f(toSOL(d.volumeAll),0)}</b></div>\`;
          }catch(e){ $stats.innerHTML = \`<div class="chip">Stats unavailable</div>\`; console.error(e); }
        }

        async function loadListings(){
          $listings.innerHTML = \`<div class="empty" style="grid-column:1/-1">Loading listings…</div>\`;
          try{
            // NOTE: no acceptedPayment param here (fixes your 400 error)
            const list = await fetchJson(url(\`collections/\${SYMBOL}/listings?offset=0&limit=24\`));
            if(!Array.isArray(list) || list.length===0){ $listings.innerHTML = \`<div class="empty" style="grid-column:1/-1">No listings found.</div>\`; return; }
            const out = [];
            for(const it of list){
              let img = it.img || it.image, name = it.tokenName || \`…\${(it.tokenMint||'').slice(-4)}\`;
              if(!img && it.tokenMint){ try{ const m = await fetchJson(url(\`tokens/\${it.tokenMint}\`)); img = m.img || m.image; name = m.name || name; }catch{} }
              out.push(card({ href:\`https://magiceden.io/item-details/\${it.tokenMint}\`, img, name, price: it.price }));
            }
            $listings.innerHTML = out.join(''); $listings.dataset.loaded = "1";
          }catch(e){ console.error(e); $listings.innerHTML = \`<div class="empty" style="grid-column:1/-1">Failed to load listings.</div>\`; }
        }

        async function loadActivity(){
          $activity.innerHTML = \`<div class="empty" style="grid-column:1/-1">Loading activity…</div>\`;
          try{
            const acts = await fetchJson(url(\`collections/\${SYMBOL}/activities?offset=0&limit=50&type=buyNow\`));
            const slice = (Array.isArray(acts)?acts:[]).slice(0,12);
            if(slice.length===0){ $activity.innerHTML = \`<div class="empty" style="grid-column:1/-1">No recent buys yet.</div>\`; return; }
            const out = [];
            for(const a of slice){
              const mint = a.tokenMint || a.mint;
              let img, name;
              try{ const m = await fetchJson(url(\`tokens/\${mint}\`)); img = m.img || m.image; name = m.name; }catch{}
              out.push(card({ href:\`https://magiceden.io/item-details/\${mint}\`, img, name: name || \`…\${(mint||'').slice(-4)}\`, price: a.price, sub: a.blockTime? timeAgo(a.blockTime)+' ago':'' }));
            }
            $activity.innerHTML = out.join(''); $activity.dataset.loaded = "1";
          }catch(e){ console.error(e); $activity.innerHTML = \`<div class="empty" style="grid-column:1/-1">Failed to load activity.</div>\`; }
        }

        function card({href,img,name,price,sub}){
          return \`
            <a class="card" href="\${href}" target="_blank" rel="noopener">
              <div class="media">\${img ? \`<img src="\${img}" alt="\${name??''}">\` : \`<span style="color:#666;font:600 12px Inter">No image</span>\`}</div>
              <div class="body">
                <div class="name">\${name ?? ''}</div>
                <div class="meta"><span>\${price!=null ? price+' SOL' : '—'}</span><span>\${sub??''}</span></div>
              </div>
            </a>\`;
        }

        loadStats();
        loadListings(); // default tab
        // loadActivity(); // loads when tab clicked
      })();
    `;
    document.head.appendChild(script);

    // Inject optimized styles
    const style = document.createElement('style');
    style.innerHTML = `
      #dundies-market{--pink:#FF3AAE;--purple:#9A5BFF;--blue:#00D1FF;--lime:#B6FF3B;--text:#fff;background:#000;padding:28px;border:2px solid var(--purple);border-radius:20px;box-shadow:0 0 40px #9A5BFF33}
      .dm-head{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:14px}
      .dm-title{font:800 22px/1.1 Fredoka,system-ui;color:#fff}
      .dm-link{font:600 14px/1 Inter,system-ui;color:#fff;text-decoration:none;padding:10px 14px;border-radius:999px;border:2px solid var(--blue)}
      .dm-stats{display:flex;gap:14px;flex-wrap:wrap;margin:8px 0 18px}
      .chip{background:#0e0e0e;border:1px solid #2a2a2a;color:#fff;padding:10px 14px;border-radius:999px;font:600 13px/1 Inter}
      .dm-tabs{display:flex;gap:8px;margin-bottom:12px}
      .dm-tab{background:#0e0e0e;color:#fff;border:2px solid #222;padding:10px 14px;border-radius:14px;font:700 13px Inter;cursor:pointer}
      .dm-tab.active{border-color:var(--pink);box-shadow:0 0 18px #ff3aae44}
      .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
      @media (max-width:1000px){.grid{grid-template-columns:repeat(3,1fr)}}
      @media (max-width:700px){.grid{grid-template-columns:repeat(2,1fr)}}
      .card{background:#0b0b0b;border:2px solid #191919;border-radius:16px;overflow:hidden;text-decoration:none}
      .card:hover{border-color:var(--purple);box-shadow:0 0 22px #9A5BFF33}
      .media{aspect-ratio:1/1;background:#111;display:flex;align-items:center;justify-content:center}
      .media img{width:100%;height:100%;object-fit:cover;display:block}
      .body{padding:12px}.name{color:#fff;font:700 14px/1.2 Inter;margin-bottom:6px}
      .meta{display:flex;align-items:center;justify-content:space-between;color:#9ef;font:600 13px/1 Inter;opacity:.9}
      .empty{color:#aaa;padding:24px;border:1px dashed #333;border-radius:14px;text-align:center}
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold neon-text mb-6">
            Dundies Marketplace
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trade unique Dundies NFTs on Magic Eden. Discover rare traits, find your perfect character, and join the neon revolution.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              asChild
              className="bg-gradient-to-r from-hot-pink to-electric-purple hover:scale-105 transition-transform duration-300"
            >
              <a 
                href="https://magiceden.io/marketplace/5DJBKxbYj8wD2D56K6BGhFPUSwspESL6LkT9Kn8zwkAz"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View on Magic Eden
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-electric-purple/20 rounded-lg p-6 hover:border-electric-purple/40 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-acid-lime" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Trading</h3>
              <p className="text-muted-foreground">Real-time marketplace data from Magic Eden</p>
            </div>
            
            <div className="bg-card border border-hot-pink/20 rounded-lg p-6 hover:border-hot-pink/40 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <Zap className="text-hot-pink" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Transactions</h3>
              <p className="text-muted-foreground">Fast and secure NFT trading on Solana</p>
            </div>
            
            <div className="bg-card border border-neon-blue/20 rounded-lg p-6 hover:border-neon-blue/40 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <Activity className="text-neon-blue" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Activity</h3>
              <p className="text-muted-foreground">Track recent sales and market trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magic Eden Widget */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div id="dundies-market">
            <div className="dm-head">
              <div className="dm-title">Dundies — Live Market</div>
              <a className="dm-link" target="_blank" rel="noopener" href="https://magiceden.io/marketplace/5DJBKxbYj8wD2D56K6BGhFPUSwspESL6LkT9Kn8zwkAz">
                Open in Magic Eden
              </a>
            </div>

            <div id="dm-stats" className="dm-stats">
              <div className="chip">Floor: <b>—</b> SOL</div>
              <div className="chip">Listed: <b>—</b></div>
              <div className="chip">24h Vol: <b>—</b></div>
              <div className="chip">All-time Vol: <b>—</b></div>
            </div>

            <div className="dm-tabs">
              <button className="dm-tab active" data-tab="listings">Listings</button>
              <button className="dm-tab" data-tab="activity">Recent Buys</button>
            </div>

            <div id="dm-listings" className="grid" aria-live="polite"></div>
            <div id="dm-activity" className="grid" style={{display: 'none'}} aria-live="polite"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;