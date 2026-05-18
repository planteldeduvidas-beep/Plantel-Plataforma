
// conexaoBanco.js = ponte entre Node e MySQL <- !!!

const mysql = require("mysql2/promise");
require("dotenv").config();

const conexaoBanco = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = conexaoBanco;

//O que esse arquivo faz?

//Ele cria a conexão entre o backend e o banco.

//O backend vai usar esse arquivo sempre que precisar buscar, criar, editar ou deletar dados.
