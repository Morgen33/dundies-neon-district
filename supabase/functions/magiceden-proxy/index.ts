import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const MAGIC_EDEN_API = "https://api-mainnet.magiceden.dev/v2/collections";

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    const url = new URL(req.url);
    const path = url.pathname.replace('/magiceden-proxy', '');
    const queryString = url.search;
    
    const magicEdenUrl = `${MAGIC_EDEN_API}${path}${queryString}`;
    
    const response = await fetch(magicEdenUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
});
