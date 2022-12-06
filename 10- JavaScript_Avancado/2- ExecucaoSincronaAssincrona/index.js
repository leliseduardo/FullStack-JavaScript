function passo02() {
  console.log(`Passo 02`);
}

console.log(`Passo 01`);
passo02();
console.log(`Passo 03`);

setTimeout(() => {
  console.log(`Passo 04`);
}, 1000);

console.log(`Passo 05`);
