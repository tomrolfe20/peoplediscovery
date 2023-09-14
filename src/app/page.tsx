'use client';
import SearchData from './components/SearchData';
import Data from './components/Data';
import { useState, useEffect } from 'react';

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/api/users/');
      const dat = await response.json();
      setCoins(dat);
    };

    getData();
  }, []);

  return (
    <>
      <SearchData
        getSearchResults={(results) => setCoins(results)}
      ></SearchData>
      <Data data={coins} />
    </>
  );
}
