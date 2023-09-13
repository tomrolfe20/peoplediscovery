import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    console.log('start find all req');
    const users = await prisma.EmployeeTable.findMany();
    console.log(users);
    try {
        res.json({ message:users });
    } catch (error) {
        res.json({ error: error.message});
    }
}