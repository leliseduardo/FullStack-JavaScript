const process = require("process");

// console.log(process.argv); // Mostra os argumentos passados parar este código

console.log("Qual seu nome?");

process.stdin.on("data", (Keyboard) => {
  process.stdout.write(`O nome do usuário é: ${Keyboard}`);
  process.exit();
});
