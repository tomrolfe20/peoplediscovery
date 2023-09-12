export default async function Home() {
  const user = await import('./db/query');
  let show = await user.default();

  return (
    <>
      <div>
        {show.map((employee) => (
          <p>Good afternoon {employee}</p>
        ))}
      </div>
    </>
  );
}
