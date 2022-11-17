const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

// Impressão normal de towns
console.log(towns);
// Spread de towns
console.log(...towns);
// Spread de Prontera = towns[0]
console.log(...towns[0]);

// Copia do array towns - Se alterar a cópia, altera o original
const copiaTowns = towns;
copiaTowns.pop(); // Exclui último elemento
copiaTowns.push("Aldebaran"); // Adiciona na última posição
console.log({ towns, copiaTowns });

// Clone do array towns utlizando Spread - Alteração no clone não altera original
const cloneTowns = [...towns];
cloneTowns.pop();
console.log({ towns, copiaTowns, cloneTowns });

// Criando objeto towns a partir do array towns utilizando Spread
const objetoTowns = { ...towns };
console.log({ objetoTowns });

// Clonando objeto towns com Spread
const cloneObjetoTowns = { ...objetoTowns };
cloneObjetoTowns.texto = "Este é um clone";
console.log({ objetoTowns, cloneObjetoTowns });
