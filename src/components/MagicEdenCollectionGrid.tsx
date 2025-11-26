import React, { useEffect, useState } from "react";
import "../App.css";

const COLLECTION_SYMBOL = "dundies"; // e.g. "okay_bears"

// --- Types ------------------------------------------------------------------

interface MagicEdenToken {
  name?: string;
  image?: string;
  img?: string;
}

interface MagicEdenListing {
  tokenMint?: string;
  mintAddress?: string;
  price?: number;
  priceSol?: number;
  priceAmount?: number;
  priceLamports?: number;
  title?: string;
  tokenName?: string;
  token?: MagicEdenToken;
  extra?: {
    img?: string;
  };
  image?: string;
}

// ---------------------------------------------------------------------------

export const MagicEdenCollectionGrid: React.FC = () => {
  const [listings, setListings] = useState<MagicEdenListing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function loadListings() {
      try {
        setLoading(true);
        setError("");

        const isDev = window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1");
        const baseUrl = isDev ? "/api/magiceden" : "/magiceden-proxy";

        const res = await fetch(`${baseUrl}/${COLLECTION_SYMBOL}/listings?limit=100&offset=0`);

        if (!res.ok) {
          throw new Error(`Magic Eden API error: ${res.status}`);
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setListings(data as MagicEdenListing[]);
        } else {
          setListings([]);
        }
      } catch (err) {
        console.error(err);
        setError("Could not load listings from Magic Eden.");
      } finally {
        setLoading(false);
      }
    }

    loadListings();
  }, []);

  if (loading) return <div>Loading collection listings…</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!listings.length) return <div>No active listings found.</div>;

  return (
    <div className="me-grid">
      {listings.map((listing, idx) => {
        const tokenMint = listing.tokenMint || listing.mintAddress || `idx-${idx}`;

        const price = listing.price ?? listing.priceSol ?? listing.priceAmount ?? listing.priceLamports;

        const name = listing.title || listing.tokenName || listing.token?.name || `Item #${idx + 1}`;

        const img = listing.extra?.img || listing.image || listing.token?.image || listing.token?.img || "";

        return (
          <a
            key={tokenMint}
            href={`https://magiceden.io/item-details/${tokenMint}`}
            target="_blank"
            rel="noopener noreferrer"
            className="me-card"
          >
            <div className="me-card-inner">
              {img && <img className="me-card-img" src={img} alt={name} loading="lazy" />}
              <div className="me-card-body">
                <div className="me-card-name">{name}</div>
                <div className="me-card-price">{price !== undefined ? `${price} SOL` : "—"}</div>
                <div className="me-card-src">View on Magic Eden</div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
