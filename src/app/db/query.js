import prisma from '@../../../lib/prisma.js';

const something = await prisma.EmployeeTable.findMany();

export default async function handler() {
  const newUer = await prisma.EmployeeTable.findMany();
  let arr = [];
  for (let i = 0; i < newUer.length; i++) {
    arr.push(newUer[i].firstName + ' ' + newUer[i].lastName);
  }
  return arr;
}
