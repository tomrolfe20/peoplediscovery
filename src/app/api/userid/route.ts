import prisma from '@../../../lib/prisma';

export async function GET() {
  const query = await prisma.EmployeeTable.findMany();
  return new Response(JSON.stringify(query));
}
