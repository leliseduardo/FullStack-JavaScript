const timeout = setTimeout(() => {
  console.log("SetTimeout executando após 2 segundos");
}, 2000);

// console.log("Não permitindo a execução do setTimeout!");
// clearTimeout(timeout);

let i = 0;
const interval = setInterval(() => {
  i += 2;
  console.log(`Executando após ${i} segundos.`);
  if (i >= 10) clearInterval(interval);
}, 2000);
