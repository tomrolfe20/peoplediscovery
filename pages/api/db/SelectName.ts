import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function SelectName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name } = req.body;

    const result = await prisma.EmployeeTable.findMany({
      where: {
        OR: [
          {
            firstName: {
              contains: name,
              mode: 'insensitive',
            },
          },
          {
            lastName: {
              contains: name,
              mode: 'insensitive',
            },
          },
        ],
      },
    });

    console.log('backend name: ', name);
    console.log('backend result: ', result);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
