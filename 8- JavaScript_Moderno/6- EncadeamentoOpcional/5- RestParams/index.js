// Objeto com objetos dentro
const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// Encadeamento normal
console.log(user.friends[0].name); // Funcional
//console.log(user.friends[0].phone.ddd); // Não funciona pois friends nao tem
// phone nem ddd

// Encadeamento opcional
console.log(user?.friends[0]?.phone?.ddd);
// Encadeamento opcional pergunta se
// o encadeamento existe. Isso evita
// que excessões sejam lançadas e apenas
// retorna o undefined

console.log(user?.brothers?.phone); // Brothers nao existe

console.log(user?.brothers?.[0].phone);
console.log(user?.friends?.[5]?.nome);
// Tenta achar um elemento de um array inexistente
