'use client';
import SearchData from './components/SearchData';
import Data from './components/Data';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/api/hello/');
      const dat = await response.json();
      setData(dat);
    };

    getData();
  }, []);

  return (
    <>
      <SearchData getSearchResults={(results) => setData(results)}></SearchData>
      <Data data={data} />
    </>
  );
}
