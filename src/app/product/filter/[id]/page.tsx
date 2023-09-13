export default async function Page({ params }: { params: { id: string } }) {
  type Employee = {
    firstName: string;
    lastName: string;
    employeeID: number;
  };
  const search = await import('../../../api/db/queryThree.js');
  const data = await search.default(params.id);

  return (
    <>
      <div>
        {data.map((employee: Employee) => (
          <p>
            {employee.firstName} {employee.lastName}
          </p>
        ))}
      </div>
    </>
  );
}
