// 'use client';
// import { useParams } from 'next/navigation';

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
    <p>{repo[0].firstName}</p> 
    );
}

//   console.log('frontend user: ', user?.firstName);
