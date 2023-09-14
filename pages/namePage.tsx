"use client"
import {useRouter} from "next/router";
import { useState } from "react";

import '../src/app/globals.css'


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
      <h1 className="text-3xl font-bold ">Find People Tool</h1>
            <form onSubmit={handleSubmit}>
              <label className="text-2">Name:</label>
                  <input
                      type="text"
                      className="er border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                      name='route' 
                      onChange={(e)=>{setRoute(e.target.value)}}
                  />
                  <button className="px-4 text-white bg-blue-900 border-l rounded ">
                      Search
                  </button>
                  </form>

      {/* <form onSubmit={handleSubmit}>
                  <input type="text" name='route' onChange={(e)=>{setRoute(e.target.value)}} />
                  <button type="submit">Submit</button>
        </form> */}
      </>);
  }