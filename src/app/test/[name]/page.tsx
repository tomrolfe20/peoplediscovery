// 'use client';
// import { useParams } from 'next/navigation';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type User = {
  employeeID: string;
  firstName: string;
  lastName: string;
};

export const getServerSideProps = (async (context) => {
  //   const searchName = useParams()?.name;
  console.log('making call');
  const res = await fetch('http://localhost:3000/api/db/SelectName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ name: searchName }),
    body: JSON.stringify({ name: 'Barry' }),
  });
  const repo = await res.json();
  console.log(repo);
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: User;
}>;

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('rendered');
  console.log(repo);
  return repo;
}

//   console.log('frontend user: ', user?.firstName);
