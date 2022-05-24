// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Project } from '@/@types/any';
import { getProjects } from '@/database/firebase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === `GET`) {
    const result = await getProjects();

    res.status(200).json(result);
  }
}
