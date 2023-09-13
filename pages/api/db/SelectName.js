import prisma from '../../../lib/prisma.js';

export default async function SelectName(req, res) {
  const result = await prisma.EmployeeTable.findMany({
    where: {
      firstName: req.body.name,
    },
  });
  console.log('backend name: ', req.body.name);
  console.log('backend result: ', result);

  res.status(200).json(result);
}
