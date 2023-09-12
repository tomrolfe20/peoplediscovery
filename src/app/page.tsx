export default async function Home() {
  const user = await import('./db/query');
  let show = await user.default();
  return (
    <>
      <h1>Good afternoon Hamish</h1>
      <div>
        {show.map((x) => (
          <p>Good afternoon {x}</p>
        ))}
      </div>
    </>
  );
}
