import prisma from '../../../lib/prisma.ts';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GetInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.EmployeeTable.findMany();
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
