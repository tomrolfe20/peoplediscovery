import Link from 'next/link';

export default function Data({ data }: { data: any }) {
  return (
    <>
      <div className='my-20'>
        <ul className='grid grid-cols-4 mx-auto max-w-[1260px] gap-10'>
          {data.map((emp) => (
            <div className='transition duration-300 flex justify-center items-center hover:bg-bjssPink rounded-full'>
              <Link
                className='font-bold'
                href={`/product/filter/${emp.employeeID.toString()}`}
              >
                {emp.firstName} {emp.lastName}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
