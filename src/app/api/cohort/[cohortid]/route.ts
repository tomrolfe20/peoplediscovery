import prisma from '@../../../lib/prisma';

export async function GET(request: Request, { params }) {
  const id = params.cohortid;
  const query = await prisma.EmployeeTable.findMany({
    where: {
      empAssociate: {
        some: {
          cohAssociate: {
            cohortID: id,
          },
        },
      },
    },
  });
  return new Response(JSON.stringify(query));
}
