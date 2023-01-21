// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method == 'POST') res.status(200).json({ name: 'John Doe' })
  
  res.status(400).json({message: 'Tem q ser post'})
}
