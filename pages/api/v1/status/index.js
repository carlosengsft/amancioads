import database from "infra/database.js";
async function status(request, response) {
  const resultado = await database.query("SELECT 1 + 1 as sum;");
  response.status(200).json(`Teste de  criação de api!`);
}
export default status;
