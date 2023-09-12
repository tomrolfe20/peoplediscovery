async function searchEmployees(search) {
  const query = await prisma.EmployeeTable.findMany({
    where: (firstName = search),
  });
  return query;
}

export default searchEmployees;
