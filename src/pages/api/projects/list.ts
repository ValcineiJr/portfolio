// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllProjects } from '@/database/firebase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === `GET`) {
    const result = await getAllProjects();

    res.status(200).json(result);
  }
}
