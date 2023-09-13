export default async function Home() {
  type User = {
    employeeID: string;
    firstName: string;
    lastName: string;
  };

  const data = await fetch('http://localhost:3000/api/db/GetInfo');
  const users: Array<User> = await data.json();
  console.log(users);

  return (
    <>
      <h1>Hello Hamish!!</h1>

      {users.map((user) => (
        <h1 key={user.employeeID}>
          Hello {user.firstName} {user.lastName}!!
        </h1>
      ))}
    </>
  );
}
