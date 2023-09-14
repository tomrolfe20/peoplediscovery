import prisma from '@../../../lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { user: string } }
) {
  const user = params.user;
  const query = await prisma.EmployeeTable.findMany({
    where: { employeeID: user },
  });
  return new Response(JSON.stringify(query));
}
