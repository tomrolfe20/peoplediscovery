export default async function Page({ params }: { params: { id: string } }) {
  const search = await import('../../db/queryTwo.js');

  return <h1>{params.id}</h1>;
}
