import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Marketplace = () => {
  useEffect(() => {
    // Initialize the Magic Eden widget script
    const initWidget = () => {
      const SYMBOL = "dundies";
      const BASE = "https://api-mainnet.magiceden.dev/v2";
      const LIST_LIMIT = 24;
      const ACT_LIMIT = 12;

      const $stats = document.getElementById('dm-stats');
      const $listings = document.getElementById('dm-listings');
      const $activity = document.getElementById('dm-activity');
      const tabs = document.querySelectorAll('.dm-tab');

      if (!$stats || !$listings || !$activity) return;

      tabs.forEach(btn => {
        btn.addEventListener('click', async () => {
          tabs.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const tab = (btn as HTMLElement).dataset.tab;
          if (tab === 'listings') {
            ($activity as HTMLElement).style.display = 'none';
            ($listings as HTMLElement).style.display = '';
            if (!($listings as HTMLElement).dataset.loaded) loadListings();
          } else {
            ($listings as HTMLElement).style.display = 'none';
            ($activity as HTMLElement).style.display = '';
            if (!($activity as HTMLElement).dataset.loaded) loadActivity();
          }
        });
      });

      // Helpers
      const f = (n: number | null, d = 2) => (n == null ? '—' : Number(n).toFixed(d));
      const sol = (lamports: number) => lamports && lamports > 1e7 ? (lamports / 1e9) : null;
      const timeAgo = (unix: number) => {
        if (!unix) return '—';
        const diff = (Date.now() / 1000 - unix);
        const u: [number, string][] = [[31536000, 'y'], [2592000, 'mo'], [604800, 'w'], [86400, 'd'], [3600, 'h'], [60, 'm']];
        for (const [s, label] of u) {
          if (diff >= s) return Math.floor(diff / s) + label;
        }
        return Math.max(1, Math.floor(diff)) + 's';
      };
      const fetchJson = (url: string) => fetch(url).then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });

      // Stats
      async function loadStats() {
        try {
          const d = await fetchJson(`${BASE}/collections/${SYMBOL}/stats`);
          const floor = d.floorPrice != null ? (sol(d.floorPrice) ?? d.floorPrice) : null;
          const html = `
            <div class="chip">Floor: <b>${floor != null ? f(floor, 2) : '—'}</b> SOL</div>
            <div class="chip">Listed: <b>${d.listedCount ?? '—'}</b></div>
            <div class="chip">24h Vol: <b>${d.volume24hr ? f(d.volume24hr, 2) : '—'}</b></div>
            <div class="chip">All-time Vol: <b>${d.volumeAll ? f(d.volumeAll, 2) : '—'}</b></div>`;
          $stats.innerHTML = html;
        } catch (e) {
          $stats.innerHTML = `<div class="chip">Stats unavailable</div>`;
          console.error(e);
        }
      }

      // Listings
      async function loadListings() {
        $listings.innerHTML = `<div class="empty" style="grid-column:1/-1">Loading listings…</div>`;
        try {
          const list = await fetchJson(`${BASE}/collections/${SYMBOL}/listings?offset=0&limit=${LIST_LIMIT}&acceptedPayment=ALL`);
          if (!Array.isArray(list) || list.length === 0) {
            $listings.innerHTML = `<div class="empty" style="grid-column:1/-1">No listings found.</div>`;
            return;
          }
          const out = [];
          for (const it of list) {
            let img = it.img || it.image;
            if (!img && it.tokenMint) {
              try {
                const meta = await fetchJson(`${BASE}/tokens/${it.tokenMint}`);
                img = meta.img || meta.image;
              } catch { }
            }
            out.push(card({
              href: `https://magiceden.io/item-details/${it.tokenMint}`,
              img, name: it.tokenName || `…${(it.tokenMint || '').slice(-4)}`,
              price: it.price
            }));
          }
          $listings.innerHTML = out.join('');
          ($listings as HTMLElement).dataset.loaded = "1";
        } catch (e) {
          console.error(e);
          $listings.innerHTML = `<div class="empty" style="grid-column:1/-1">Failed to load listings.</div>`;
        }
      }

      // Activity
      async function loadActivity() {
        $activity.innerHTML = `<div class="empty" style="grid-column:1/-1">Loading activity…</div>`;
        try {
          const acts = await fetchJson(`${BASE}/collections/${SYMBOL}/activities?offset=0&limit=50&type=buyNow`);
          const slice = (Array.isArray(acts) ? acts : []).slice(0, ACT_LIMIT);
          if (slice.length === 0) {
            $activity.innerHTML = `<div class="empty" style="grid-column:1/-1">No recent buys yet.</div>`;
            return;
          }
          const out = [];
          for (const a of slice) {
            const mint = a.tokenMint || a.mint;
            let img, name;
            try {
              const meta = await fetchJson(`${BASE}/tokens/${mint}`);
              img = meta.img || meta.image;
              name = meta.name;
            } catch { }
            out.push(card({
              href: `https://magiceden.io/item-details/${mint}`,
              img, name: name || `…${(mint || '').slice(-4)}`,
              price: a.price, sub: timeAgo(a.blockTime) + ' ago'
            }));
          }
          $activity.innerHTML = out.join('');
          ($activity as HTMLElement).dataset.loaded = "1";
        } catch (e) {
          console.error(e);
          $activity.innerHTML = `<div class="empty" style="grid-column:1/-1">Failed to load activity.</div>`;
        }
      }

      function card({ href, img, name, price, sub }: any) {
        return `
          <a class="card" href="${href}" target="_blank" rel="noopener">
            <div class="media">
              ${img ? `<img src="${img}" alt="${name ?? ''}">` : `<span style="color:#666;font:600 12px Inter">No image</span>`}
            </div>
            <div class="body">
              <div class="name">${name ?? ''}</div>
              <div class="meta"><span>${price != null ? price + ' SOL' : '—'}</span><span>${sub ?? ''}</span></div>
            </div>
          </a>`;
      }

      // Initialize
      loadStats();
      loadListings();
    };

    // Run the script after component mounts
    const timer = setTimeout(initWidget, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold neon-text mb-6">
              NFT Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover, collect, and trade unique Dundies NFTs on Magic Eden
            </p>
          </div>

          {/* Magic Eden Widget */}
          <section 
            id="dundies-market" 
            style={{'--pink': '#FF3AAE', '--purple': '#9A5BFF', '--blue': '#00D1FF', '--lime': '#B6FF3B', '--ink': '#000', '--ink2': '#0b0b0b', '--text': '#fff'} as React.CSSProperties}
          >
            <style dangerouslySetInnerHTML={{__html: `
              #dundies-market{background:#000;padding:28px;border:2px solid var(--purple);border-radius:20px;box-shadow:0 0 40px #9A5BFF33}
              #dundies-market *{box-sizing:border-box}
              .dm-head{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:14px}
              .dm-title{font:800 22px/1.1 Fredoka, Baloo, system-ui;color:#fff;letter-spacing:.3px}
              .dm-link{font:600 14px/1 Inter,system-ui;color:#fff;text-decoration:none;padding:10px 14px;border-radius:999px;border:2px solid var(--blue);background:transparent}
              .dm-link:hover{box-shadow:0 0 16px var(--blue)}
              .dm-stats{display:flex;gap:14px;flex-wrap:wrap;margin:8px 0 18px}
              .chip{background:linear-gradient(90deg,#111,#0a0a0a);border:1px solid #2a2a2a;color:#fff;padding:10px 14px;border-radius:999px;font:600 13px/1 Inter,system-ui}
              .chip b{color:var(--lime)}
              .dm-tabs{display:flex;gap:8px;margin-bottom:12px}
              .dm-tab{flex:0 0 auto;background:#0e0e0e;color:#fff;border:2px solid #222;padding:10px 14px;border-radius:14px;font:700 13px Inter,system-ui;cursor:pointer}
              .dm-tab.active{border-color:var(--pink);box-shadow:0 0 18px #ff3aae44}
              .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
              @media (max-width:1000px){.grid{grid-template-columns:repeat(3,1fr)}}
              @media (max-width:700px){.grid{grid-template-columns:repeat(2,1fr)}}
              .card{background:#0b0b0b;border:2px solid #191919;border-radius:16px;overflow:hidden;text-decoration:none}
              .card:hover{border-color:var(--purple);box-shadow:0 0 22px #9A5BFF33}
              .media{aspect-ratio:1/1;background:#111;display:flex;align-items:center;justify-content:center}
              .media img{width:100%;height:100%;object-fit:cover;display:block}
              .body{padding:12px}
              .name{color:#fff;font:700 14px/1.2 Inter,system-ui;margin-bottom:6px}
              .meta{display:flex;align-items:center;justify-content:space-between;color:#9ef;font:600 13px/1 Inter,system-ui;opacity:.9}
              .empty{color:#aaa;padding:24px;border:1px dashed #333;border-radius:14px;text-align:center}
              .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
            `}} />

            <div className="dm-head">
              <div className="dm-title">Dundies — Live Market</div>
              <a className="dm-link" target="_blank" rel="noopener" href="https://magiceden.io/marketplace/dundies">
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;