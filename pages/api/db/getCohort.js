//import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    console.log('start find all req');
    //const date = 2019-03-01T00:00:00.000Z;
    //const date = Date('2019-03-01T00:00:00.000Z');
    //const cohortid = await prisma.$queryRaw`SELECT "cohortID" FROM "Cohort" WHERE "cohortID" BETWEEN ${date} `;
    const cohortid = 1;
    console.log(cohortid)
    const associationid = await prisma.$queryRaw`SELECT "employeeID" FROM "employeeAssociation" WHERE "cohortID" = ${cohortid} `;
    let arr =[];
    associationid.forEach(element => {
        //console.log('element');
        //console.log(element.employeeID);
        arr.push(element.employeeID);
    });
    console.log(associationid)
    console.log(arr)
    //const users = await prisma.$queryRaw`SELECT * FROM "EmployeeTable" WHERE "employeeID" IN ${Prisma.join(arr)} `;
    const users = await prisma.EmployeeTable.findMany({
        where: {
            employeeID:{ in: arr}
        },
    });
    
    console.log(users);
    try {
        res.json({ message:users });
    } catch (error) {
        res.json({ error: error.message});
    }
}