'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

type User = {
  employeeID: string;
  firstName: string;
  lastName: string;
};

export default function Page() {
  const [returnedUser, setReturnedUser] = useState<User>();
  const id = useParams()?.id;

  async function LoadUser() {
    if (id) {
      console.log('making call');
      const res = await fetch('http://localhost:3000/api/db/SelectId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
        // body: JSON.stringify({ name: 'Barry' }),
      });
      const data = await res.json();
      console.log('returned user: ', data[0]);

      setReturnedUser(data[0]);
    }
  }

  useEffect(() => {
    LoadUser();
  }, []);

  return (
    <div>
      <h1>
        Profile:{' '}
        {returnedUser
          ? `${returnedUser.firstName} ${returnedUser.lastName}`
          : 'Loading...'}
      </h1>
      <Link href={`http://localhost:3000/`}>Back</Link>
    </div>
  );
}
