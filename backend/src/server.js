// server.js = botão de ligar

// Importa a instância do aplicativo Express definida em app.js.
const app = require("./app");



// Define a porta em que o servidor irá escutar.
// Esse valor pode ser alterado conforme o ambiente ou necessidade do projeto.
const porta = 3001;




// Inicia o servidor HTTP e escuta requisições na porta informada.
// A callback é executada quando o servidor estiver pronto.
app.listen(porta, () => {
  // Exibe uma mensagem no console para indicar que o backend está rodando.
  console.log(`Servidor rodando em http://localhost:${porta}`);
});