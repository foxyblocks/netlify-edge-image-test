import { NextApiRequest, NextApiResponse } from 'next';
export const runtime = 'edge';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.json({ name: 'John Doe' });
}
