// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/cats/pumpkin

import { cats } from '../../../data';

export default function handler(req, res) {
  res.status(200).json({ hello: 'pumpkin' });
}
