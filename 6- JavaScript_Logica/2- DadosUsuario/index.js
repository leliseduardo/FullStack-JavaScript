alert("Bem vindo! \nA seguir pediremos que informe alguns dados.");

const nome = prompt("Informe seu nome: ");
const idade = prompt("Informe sua idade: ");

// let confirmaIdade = confirm(
//   "Você confirma sua idade? \nidade informada: " + idade
// );

let confirmaIdade = prompt(
  "Você confirma sua idade?(Sim/Nao) \nidade informada: " + idade
);

alert(
  "Dados informados: " +
    "\nNome: " +
    nome +
    "\nIdade: " +
    idade +
    "\nConfirmação de idade: " +
    confirmaIdade
);
