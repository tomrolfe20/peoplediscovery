import { PrismaClient } from '@prisma/client';
let prisma: PrismaClient | undefined;

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

// const result = await prisma.EmployeeTable.findMany();
// console.log(result);

export default prisma;
