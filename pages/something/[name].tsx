// 'use client';
// import { useParams } from 'next/navigation';
import '../../src/app/globals.css'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type User = {
  employeeID: string;
  firstName: string;
  lastName: string;
};
interface PropInterface{
  repo:User[];
}




export const getServerSideProps: GetServerSideProps<{
  repo:User}> = async (context) => {
  //   const searchName = useParams()?.name;
  console.log('making call');
  console.log(context.params)
  const searchName:string = context.params?.name as string || 'Barry';
  console.log(searchName);
  const res = await fetch(`http://localhost:3000/api/db/SelectName/` 
  ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: searchName }),
    //body: JSON.stringify({ name: 'Barry' }),
  }
  );
  
  const repo = await res.json();

  console.log(repo);
  return { props: { repo } };
};


export default function Page({repo}: PropInterface) {
  console.log('rendered');
  console.log(repo);
  
  
  return (
    <> 

    {repo.map((user) => (
      <>
      {/* <p key={user.employeeID} >
        {user.employeeID} - {user.firstName} - {user.lastName}!!

      </p> */}
      
      <div
        key={user.employeeID} className="block rounded-lg bg-white w-60 p-7 m-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {user.firstName} {user.lastName}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          id: {user.employeeID}<br></br>
          skills: one-two-three
        </p>
       </div>
      </>
    ))}
    </>
    );
}

//   console.log('frontend user: ', user?.firstName);
