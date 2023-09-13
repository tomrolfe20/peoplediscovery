import Link from 'next/link';
export default function Data({ data }: { data: any }) {
  return (
    <>
      <ul className='grid grid-cols-4 mx-auto max-w-[1260px] gap-10'>
        {data.map((emp) => (
          <li>
            <Link href={`/product/filter/${emp.employeeID.toString()}`}>
              {emp.firstName} {emp.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
