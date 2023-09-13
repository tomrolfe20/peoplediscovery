
import Image from 'next/image';
import axios from 'axios';
import React, { useState } from "react";

//import handler from '../../pages/api/db/getUser'



async function getPeople () {
  //console.log('start main');
  const data = await fetch('http://localhost:3000//api/db/getUser');
  //console.log(data);
  const blogData = await data.json();
  return blogData;
}
    
 

export default async function Home() {
  
  const emp = await getPeople();
  
  return (
    <>
      <h1>Hello Hamish!!</h1>
      {emp.message.map((user:any) => <p>{user.firstName}</p>)}

    </>
  );
}
