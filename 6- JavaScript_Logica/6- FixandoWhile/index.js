const nave = prompt("Qual o nome da nave?");
let cont = 0;

let confirmacao = confirm("Deseja realizar uma dobra?");

while (confirmacao) {
  cont++;

  confirmacao = confirm("Deseja realizar a próxima dobra?");
}

alert("Nave: " + nave + "\nNúmero de dobras espaciais: " + cont);
