const dayjs = require("dayjs");

function aniversario(date) {
  const aniversario = dayjs(date);
  const hoje = dayjs();

  const idade = hoje.diff(aniversario, "year");
  const proxAniversario = aniversario.add(idade + 1, "year");
  const diasProxAniversario = proxAniversario.diff(hoje, "day") + 1;

  console.log(`Idade: ${idade}`);
  console.log(`Próximo aniversário: ${proxAniversario.format("DD/MM/YYYY")}`);
  console.log(`Dias até completar ${idade + 1} anos:  ${diasProxAniversario}`);
}

aniversario("1994-/05/05");
