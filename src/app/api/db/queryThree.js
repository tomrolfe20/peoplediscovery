async function searchEmployees(filter) {
  const query = await prisma.EmployeeTable.findMany({
    where: {
      empAssociate: {
        some: {
          cohortAssociate: {
            cohortID: filter,
          },
        },
      },
    },
  });
  return query;
}

export default searchEmployees;
