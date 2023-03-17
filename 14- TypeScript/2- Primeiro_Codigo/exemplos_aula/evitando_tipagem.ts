// Diretiva "?"
function sendSpaceshit(spaceship: { pilot: string; copilot?: string }) {} // ? diz
// que o copilot não é obrigatório

sendSpaceshit({ pilot: "Beeblebroxx", copilot: "Chewbacca" });

sendSpaceshit({ pilot: "Arthur" });

// unknown -> Não define tipo certo
let input: unknown;

input = "teste";
input = 20;
input = [];

let text: string;
input = text;

// any -> Desabilita TypeScript
let input2: any;

text = input2;

// never -> Essa variável nunca deveria existir, logo, não é possível atribuir
// nenhum tipo a essa variável com o tipo "never"
function verification(text) {
  if (text) {
  } else {
    let _check: never;
    return _check;
  }
}
