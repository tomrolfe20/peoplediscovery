'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SearchCoins({ getSearchResults }) {
  const [query, setQuery] = useState('');
  const [route, setRoute] = useState('/api/users/');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const directory = route + query;
    console.log('the directory', directory);
    const response = await fetch(directory);

    const data = await response.json();

    getSearchResults(data);
  };

  const onDropdownChange = async (e) => {
    const change = e.target.value;
    setRoute(change);
  };

  return (
    <div className=' my-20'>
      <form
        className='flex flex justify-center items-center space-x-4'
        onSubmit={handleSubmit}
      >
        <select name='filter' onChange={onDropdownChange}>
          <option value='/api/users/'>Employee ID</option>
          <option value='/api/cohort/'>Cohort ID</option>
        </select>
        <input
          className='text-black border-2 border-black rounded-full px-3 py-2'
          type='text'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className='transition duration-300 ease-in-out text-black border-2 border-black rounded-full px-3 py-2 hover:bg-bjssPink '
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  );
}
