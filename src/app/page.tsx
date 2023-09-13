'use client';
import Search from './components/Search';
import Data from './components/Data';
import { useState, useEffect } from 'react';

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/api/hello/');
      const dat = await response.json();
      setCoins(dat);
    };

    getData();
  }, []);

  return (
    <>
      <Search getSearchResults={(results: any) => setCoins(results)} />
      <Data data={coins} />
    </>
  );
}
