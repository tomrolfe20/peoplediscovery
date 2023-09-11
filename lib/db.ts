// db.js
import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: 'username',
    password: 'Greg4min',
    host: 'people-discovery.cot7tchlsltq.eu-west-2.rds.amazonaws.com',
    port: 5432,
    database: 'posts',
  });
}

export default conn ;