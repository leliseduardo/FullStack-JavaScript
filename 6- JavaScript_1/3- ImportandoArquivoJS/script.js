const nomeVelho = prompt("Informa o nome do mais velho.");
const idadeVelho = prompt("Informe a idade do mais velho.");

const nomeNovo = prompt("Informe o nome do mais novo.");
const idadeNovo = prompt("Informe a idade do mais novo.");

let diferencaIdade = idadeVelho - idadeNovo;

alert(
  "O mais velho é: " +
    nomeVelho +
    "\nA idade do mais velho é: " +
    idadeVelho +
    "\nO mais novo é: " +
    nomeNovo +
    "\nA idade do mais novo é: " +
    idadeNovo +
    "\nA diferença de idade é: " +
    diferencaIdade
);
