// db.js
//import { Pool } from "pg";
import pg from 'pg';
const { Client } = pg;
const client = new Client({
  //.Client({
  //max: 300,
  connectionTimeoutMillis: 10000,
  user: 'username',
  host: 'people-discovery.cot7tchlsltq.eu-west-2.rds.amazonaws.com',
  database: 'posts',
  password: 'Greg4min',
  port: 5432,
//  ssl: true,
});
client.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});
export default client;
//let conn;

// if (!conn) {
//   conn = new Pool({
//     user: 'username',
//     password: 'Greg4min',
//     host: 'people-discovery.cot7tchlsltq.eu-west-2.rds.amazonaws.com',
//     port: 5432,
//     database: 'posts',
//   });
// }

// export default conn ;