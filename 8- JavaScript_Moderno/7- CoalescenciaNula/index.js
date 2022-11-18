const a = 0;
const b = null;
const c = "teste";

// Operador lógico OU (||)
console.log(a || b || c);
// Operador de coalescência nula (??)
console.log(a ?? b ?? c);
console.log(c ?? b ?? a);
console.log(a ?? b);
console.log(b ?? a);

// Com relação a considerar um operando "false"
let x = false;
let y = 42;

let z = x || y;
let w = x ?? y;
let t = b || y;
let u = b ?? y;
console.log(z);
console.log(w);
console.log(t);
console.log(u);
