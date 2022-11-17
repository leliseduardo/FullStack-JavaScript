// Objeto
const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

// Desestruturando objeto
const { name, job, parents } = person;
console.log(`Nome: ${name}, job: ${job}, pais: ${parents}`);

// Desestruturando um array
const [pai, mae] = parents;
console.log(`Pai: ${pai}, Mãe: ${mae}`);

// Desestruturando um objeto passando-o como parâmetro de função
function criaPessoa({ name, job, parents }) {
  let id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = criaPessoa(person);

console.log(luke);
