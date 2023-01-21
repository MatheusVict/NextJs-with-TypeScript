// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Brand } from '@prisma/client';



type ErrorData = {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Brand | ErrorData>
) {
  if (req.method == 'POST') {

    try {
      const {name} = req.body

      if(!name) throw new Error('Propiedade name ausente')

      const createBrands = await prisma.brand.create({
        data: {
          name
        }
      })

      res.status(201).json(createBrands)
    } catch (error) {
      res.status(500).json({error: 'internal Server Error'})
    }

  } else { 
    res.status(400).json({error: 'BadRequest Error'})
  }
}
