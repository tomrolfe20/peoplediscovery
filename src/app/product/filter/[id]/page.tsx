async function getData(search: string) {
  const res = await fetch(`http://localhost:3000/api/hello/${search}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}
export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <p>
      {data[0].firstName} {data[0].lastName}
    </p>
  );
}
