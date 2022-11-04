// Observações
/* 
  - Não tem a necessidade de se colocar ";" após os comandos, mas pode por
  - As aspas podem ser tanto '', quanto "". Mas é legal ter padrão

*/

// Variáveis 
var a = 3         // Não se usa mais
let b = 5         // Mais recomendado
const c = 10      // Constante

// Operadores aritméticos, de comparação e lógicos
/* 
  +, -, *, /                        -> aritméticos
  >, <, >=, <=, !=, ==, ===         -> comparação
  &&, ||, !                         -> lógicos
*/

// Blocos condicionais
if(a < b)
  a = b
else 
  b = a

switch(a){
  case '1':
    a = b
    break
  case '2':
    b = a
    break
  default:
    b = 10
}


// Blocos iterativos
while(a > 0){
  a--

  //...
}

do{
  a--

  //...
}while(a > 0)

for(let i=0; i < a; i++){
  b++

  //...
}

// Objetos
let pessoa{
  nome,
  idade,
  altura
}

//Funções
function soma(a, b){
  return a + b
}

const somar = function(a, b){return a + b}   //Função anônima

function calcular(a, b, operacao){           // High-order function 
  const result = operacao(a,b)
  return result
}

calcular(4, 5, soma)                         // Chamando a high-order function

calcular(4, 6, function (x, y){              // Outra forma de chamar a função 
  return a-b                                 // calcular, passando agora uma função
})                                           // criada dinamicamente.


// High-order functions e Arrays
/* 
    São high-order functions pré-definidos para arrays.   

    Principais: forEach, map, filter, reduce e sort.
*/

// Objetos globais
/* 
    São objetos padrão do JS.

    Principais: Object, Array, String, Number, Date e Math.
*/