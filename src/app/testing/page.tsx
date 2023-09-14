'use client';
// import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
type User = {
  employeeID: string;
  firstName: string;
  lastName: string;
};

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/db/GetInfo');
//   const users: Array<User> = await res.json();
//   console.log('data called');

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return users;
// }

export default function SearchPage() {
  // const data = await getData();
  // console.log(data);
  const [searchName, setSearchName] = useState<string>('');
  const [searchedUser, setSearchedUser] = useState<User[]>();

  const handleSearch = async () => {
    const res = await fetch('http://localhost:3000/api/db/SelectName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: searchName }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    setSearchedUser(data);
    console.log('searched user returned: ', data);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('running search for: ', searchName);
    handleSearch();
  };

  return (
    <>
      <h1>Search Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchedUser?.map((user) => (
        <h1 key={user.employeeID}>
          <Link href={`http://localhost:3000/test/${user.employeeID}`}>
            Hello {user.firstName} {user.lastName}!!{' '}
          </Link>
        </h1>
      ))}
    </>
  );
}
