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
    <div className='text-center my-20'>
      <form onSubmit={handleSubmit}>
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
          className='bg-black text-white rounded-full px-3 py-2 hover:bg-black/60'
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  );
}
