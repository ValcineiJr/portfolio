// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Project } from '@/@types/any';
import { addProject, getProjects } from '@/database/firebase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 } from 'uuid';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === `POST`) {
    const { title, image, links, description, techs } = req.body;
    const data: Project = { id: v4(), title, image, links, description, techs };

    const result = await addProject(data);

    res.status(200).json(result);
  }
}
