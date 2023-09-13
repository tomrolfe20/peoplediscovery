export default function Data({ data }: { data: any }) {
  type Employee = {
    firstName: string;
    lastName: string;
    employeeID: number;
  };

  return (
    <>
      <ul className='grid grid-cols-4 mx-auto max-w-[1260px] gap-10'>
        {data.map((emp) => (
          <li>
            <h3>{emp.firstName}</h3>
            <p>{emp.lastName}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
