import prisma from '@../../../lib/prisma.js';

async function showEmployees() {
  const query = await prisma.EmployeeTable.findMany();
  let modifiedQuery = [];

  for (let i = 0; i < query.length; i++) {
    modifiedQuery.push(query[i].firstName + ' ' + query[i].lastName);
  }

  return modifiedQuery;
}

export default showEmployees;
