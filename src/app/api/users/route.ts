import prisma from '@../../../lib/prisma';

export async function GET() {
  try {
    const query = await prisma.EmployeeTable.findMany();
    return new Response(JSON.stringify(query));
  } catch {
    return new Response('');
  }
}
