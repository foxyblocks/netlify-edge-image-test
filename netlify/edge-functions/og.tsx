import React from 'https://esm.sh/react@18.2.0';
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts';
import type { Config } from 'https://edge.netlify.com';

const BASE_URL = Netlify.env.URL || 'http://localhost:3000';
const imgPromise = fetch(`${BASE_URL}/img.png`).then((file) => file.arrayBuffer());
export default async function handler(req: Request) {
  const img = await imgPromise;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 128,
          background: 'lavender',
        }}
      >
        <img src={img}></img>
        <div style={{ fontSize: 10 }}>Hello! URL: {BASE_URL}</div>
      </div>
    ),
  );
}

export const config: Config = {
  path: '/og',
};
