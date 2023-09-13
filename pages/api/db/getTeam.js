//import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    console.log('Get academy people');
    
    const teamName = "Academy";
    console.log(teamName);
    let teamid = await prisma.$queryRaw`SELECT "teamID" FROM "Team" WHERE "teamName" = ${teamName} `;
    teamid = teamid[0].teamID;
    //console.log(teamid);
    const associationid = await prisma.$queryRaw`SELECT "employeeID" FROM "employeeAssociation" WHERE "teamID" = ${teamid} `;
    let arr = [];
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