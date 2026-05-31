
// app.js = configuração principal do backend <- !!!

// Importa o framework Express para criar o aplicativo e gerenciar rotas HTTP.
const express = require("express");
// Importa o middleware CORS para permitir que o backend responda a requisições de outros domínios.
const cors = require("cors");

// Importa a configuração da conexão com o banco de dados.
// Espera-se que esse módulo exporte um objeto que permita executar queries SQL.
const conexaoBanco = require("./config/conexaoBanco");

// Cria a instância da aplicação Express.
const app = express();

// Adiciona o middleware CORS para habilitar requisições de origens diferentes.
app.use(cors());
// Adiciona o middleware que converte o corpo das requisições JSON em um objeto JavaScript.
// Isso permite acessar `req.body` quando o cliente envia JSON.
app.use(express.json());

// Define a rota GET no caminho raiz "/".
// Quando o cliente acessar essa URL, a callback será executada.
app.get("/", (req, res) => {
  // Retorna um objeto JSON com uma mensagem de funcionamento do backend.
  return res.json({
    mensagem: "Backend do Plantel funcionando!",
  });
});

// Define a rota GET para verificar o status da conexão com o banco de dados.
app.get("/status-banco", async (req, res) => {
  try {
    // Executa uma query simples no banco para testar a conexão.
    const [resultado] = await conexaoBanco.query("SELECT 1 + 1 AS resultado");

    // Retorna o resultado da conexão e o valor calculado pelo banco.
    return res.json({
      mensagem: "Backend conectado ao banco com sucesso!",
      teste: resultado[0].resultado,
    });
  } catch (erro) {
    // Em caso de falha na conexão ou na query, envia um status 500 com detalhes do erro.
    return res.status(500).json({
      mensagem: "Erro ao conectar com o banco",
      erro: erro.message,
    });
  }
});

// Exporta a instância do aplicativo para que possa ser utilizada em outro arquivo, como o servidor principal.
module.exports = app;