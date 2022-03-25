// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import NFTGenerator from '../../scripts/nft-generator'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Content-Type", "image/png");
  // res.status(200).json({ name: 'John Doe' })
  // res.writeHead(200, { 'Content-Type': 'image/png' });
  try{
    const result = await NFTGenerator(res);
    console.log(result)
    
    result.pipe(res);
  } catch(e) {
    console.log(e)
    res.status(500).send(e)
  }
}
