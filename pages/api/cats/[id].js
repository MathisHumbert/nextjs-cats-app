// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/cats/:id

import { cats } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;

  const cat = cats.find((cat) => cat.id === Number(id));

  res.status(200).json(cat);
}
