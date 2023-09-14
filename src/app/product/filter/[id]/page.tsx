async function getData(search: string) {
  const res = await fetch(`http://localhost:3000/api/users/${search}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}
export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <div className='flex justify-center items-center my-20'>
      <p className='font-bold text-3xl'>
        {data[0].firstName} {data[0].lastName}
      </p>
    </div>
  );
}
