import client from '../../lib/db'
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
}(req:NextApiRequest, res:NextApiResponse) => {
    try {
        console.log("req nom", req.body)
        const query = 'SELECT * FROM "employeeTable"'
        const values = [req.body.content]
      const result = client.query(
          query,
          values
        );
      console.log( "ttt",result );
  } catch ( error ) {
      console.log( error );
  }
  
  
  };