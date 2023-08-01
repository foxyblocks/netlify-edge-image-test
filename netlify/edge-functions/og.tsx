import React from 'https://esm.sh/react@18.2.0';
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts';
import type { Config } from 'https://edge.netlify.com';

export default async function handler(req: Request) {
  // const BASE_URL = Netlify.env.get('URL');
  // get base path for images from request
  const basePath = req.url.replace(/\/og\/?$/, '');

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
        {/* <img src={`${basePath}/img.png`}></img> */}
        <div style={{ fontSize: 10 }}>Hello!</div>
      </div>
    ),
  );
}

export const config: Config = {
  path: '/og',
};
