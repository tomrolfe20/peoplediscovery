import SearchPage from './testing/page';

type User = {
  employeeID: string;
  firstName: string;
  lastName: string;
};

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/db/GetInfo');
  const users: Array<User> = await data.json();
  console.log(users);
  return { props: { users } };
}

export default async function Home() {
  return (
    <>
      <h1>Hello Hamish!!</h1>
      <SearchPage />
    </>
  );
}
