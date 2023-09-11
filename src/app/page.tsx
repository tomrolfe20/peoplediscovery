
import Image from 'next/image';
import axios from 'axios';
import React, { useState } from "react";
//async function getPeopleold ():Promise<void> {
  //console.log(value)
  //  let data={content : value}
  //let data = await axios.get('./api/sendpost')
  //.then((response) => {
    //console.log(response)
//})
//.catch((e) => { console.log(e)}
//)
// return data}


async function getPeople () {
  //console.log(value)
  //  let data={content : value}
  const data = await fetch('/api/sendpost.ts');
  const blogData = await data.json();
  return blogData;
  
}
    
 

export default async function Home() {
  // let variable = getPeople();
  // const [value, setValue] = useState<string>('');
  
  // setValue(variable);
  const people = await getPeople();
  return (
    <>
      <h1>Hello Hamish!!</h1>
      
      <p>{people}</p>

    </>
  );
}
