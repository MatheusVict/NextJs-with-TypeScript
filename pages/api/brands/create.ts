// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type ErrorData = {
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method == 'POST') {

    try {
      const {name} = req.body

      if(!name) throw new Error('Propiedade name ausente')

      res.status(201).json({ name: 'Brands' })
    } catch (error) {
      res.status(500).json({error: 'internal Server Error'})
    }

  } else { 
    res.status(400).json({error: 'BadRequest Error'})
  }
}
