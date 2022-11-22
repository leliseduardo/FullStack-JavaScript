const dist = prompt("Qual a distância em anos luz?");

const conv = prompt(
  "Converter para:" +
    "\n1- Parsec (pc)" +
    "\n2- Unidade astronômica (AU)" +
    "\n3- Quilômetros (km)"
);

switch (conv) {
  case "1":
    const pc = dist / 0.306601;
    alert("Distancia em Anos-Luz: " + dist + "\nDistancia em Parsec: " + pc);
    break;
  case "2":
    const au = dist / 63241.1;
    alert("Distancia em Anos-Luz: " + dist + "\nDistancia em AU: " + au);
    break;
  case "3":
    const km = dist * Math.pow(10, 12);
    alert("Distancia em Anos-Luz: " + dist + "\nDistancia em km: " + km);
    break;
  default:
    alert(
      "Distancia em Anos-Luz: " +
        dist +
        "\nUnidade não identificada: Conversão fora do escopo"
    );
}
