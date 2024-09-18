import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "postgres",
  });
  await client.connect();
  const resultado = await client.query(queryObject);
  await client.end();
  return resultado;
}
export default {
  query: query,
};
