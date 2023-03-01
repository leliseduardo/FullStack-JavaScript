const fs = require("fs");

// Cria e escreve um arquivo
// fs.writeFile("test.txt", "Olá NodeJS", (err) => {
//   console.log(err);
// });

// Escreve itens após o conteúdo já existente
// fs.appendFile("test.txt", "Olá NodeJS", (err) => {
//   console.log(err);
// });

// Renomeia item
// fs.rename("test.txt", "teste.txt", (err) => {
//   console.log(err);
// });

// Exclui item
// fs.rename("test.txt", "teste.txt", (err) => {
//   console.log(err);
// });

// Variável local que devolve o path da pasta do arquivo que está rodando
console.log(__dirname);
