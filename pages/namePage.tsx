"use client"
import {useRouter} from "next/router";
import { useState } from "react";


export default function Page() {
    const router = useRouter();
    const [route, setRoute] = useState('');
    console.log('rendered');
    console.log();
    const handleSubmit = (e:any) => {
      e.preventDefault()
      router.push("http://localhost:3000/something/" + route)
  }
    
    return (
      <>
      <form onSubmit={handleSubmit}>
                  <input type="text" name='route' onChange={(e)=>{setRoute(e.target.value)}} />
                  <button type="submit">Submit</button>
        </form>
      </>);
  }