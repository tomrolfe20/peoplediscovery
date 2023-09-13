import prisma from '../../../lib/prisma.js';

export default async function GetInfo(req, res) {
  const result = await prisma.EmployeeTable.findMany();
  // console.log(result);
  res.status(200).json(result);
}
