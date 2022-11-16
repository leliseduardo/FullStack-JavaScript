// Variáveis do programa
const statusJogo = document.getElementById("status-game");
const nome = document.getElementById("name");
const btnSetup = document.getElementById("setup-btn");
const jogadorX = document.getElementById("jogador-x");
const jogadorO = document.getElementById("jogador-o");
const btn = document.querySelectorAll(".btn-game");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const tema = document.getElementById("btn-theme");
const root = document.querySelector(":root");

let control = 0;
let time = 0;
let cont = 0;
let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;
let b5 = 0;
let b6 = 0;
let b7 = 0;
let b8 = 0;
let b9 = 0;

btnSetup.addEventListener("click", inicioJogo);

function inicioJogo() {
  if (control === 0) {
    if (jogadorX.innerText === "-") {
      jogadorX.innerText = nome.value;
      statusJogo.innerText = "Digite o nome do jogador O";
      nome.value = "";
    } else if (jogadorO.innerText === "-") {
      jogadorO.innerText = nome.value;
      btnSetup.innerText = "Iniciar";
      statusJogo.innerText = "Iniciar";
      nome.value = "";
    } else {
      statusJogo.innerText = "Jogador da vez: X";
      control = 1;
      time = "x";
      nome.value = "";
    }

    if (btnSetup.innerText === "Reiniciar") {
      statusJogo.innerText = "Digite o nome do jogador X";
      jogadorX.innerText = "-";
      jogadorO.innerText = "-";
      btnSetup.innerText = "Salvar";
      control = 0;
      let aux = 0;
      btn.forEach(function (item) {
        aux++;
        item.innerText = "1" + aux;
        item.style.color = "transparent";
      });
    }
  }
}

btn1.addEventListener("click", function () {
  if (control === 1) {
    if (b1 === 0) {
      b1 = 1;
      cont++;
      btn1.style.color = "#ff5e00";

      if (time === "x") {
        btn1.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn1.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn2.addEventListener("click", function () {
  if (control === 1) {
    if (b2 === 0) {
      b2 = 1;
      cont++;
      btn2.style.color = "#ff5e00";

      if (time === "x") {
        btn2.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn2.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn3.addEventListener("click", function () {
  if (control === 1) {
    if (b3 === 0) {
      b3 = 1;
      cont++;
      btn3.style.color = "#ff5e00";

      if (time === "x") {
        btn3.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn3.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn4.addEventListener("click", function () {
  if (control === 1) {
    if (b4 === 0) {
      b4 = 1;
      cont++;
      btn4.style.color = "#ff5e00";

      if (time === "x") {
        btn4.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn4.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn5.addEventListener("click", function () {
  if (control === 1) {
    if (b5 === 0) {
      b5 = 1;
      cont++;
      btn5.style.color = "#ff5e00";

      if (time === "x") {
        btn5.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn5.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn6.addEventListener("click", function () {
  if (control === 1) {
    if (b6 === 0) {
      b6 = 1;
      cont++;
      btn6.style.color = "#ff5e00";

      if (time === "x") {
        btn6.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn6.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn7.addEventListener("click", function () {
  if (control === 1) {
    if (b7 === 0) {
      b7 = 1;
      cont++;
      btn7.style.color = "#ff5e00";

      if (time === "x") {
        btn7.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn7.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }
    if (cont === 9) resultado();
  }
});

btn8.addEventListener("click", function () {
  if (control === 1) {
    if (b8 === 0) {
      b8 = 1;
      cont++;
      btn8.style.color = "#ff5e00";

      if (time === "x") {
        btn8.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn8.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

btn9.addEventListener("click", function () {
  if (control === 1) {
    if (b9 === 0) {
      b9 = 1;
      cont++;
      btn9.style.color = "#ff5e00";

      if (time === "x") {
        btn9.innerText = "X";
        time = "o";
        statusJogo.innerText = "Jogador da vez: O";
        resultado();
      } else {
        btn9.innerText = "O";
        time = "x";
        statusJogo.innerText = "Jogador da vez: X";
        resultado();
      }
    }

    if (cont === 9) resultado();
  }
});

function resultado() {
  if (btn1.innerText === btn2.innerText && btn1.innerText === btn3.innerText) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn1.innerText === btn4.innerText &&
    btn1.innerText === btn7.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn1.innerText === btn5.innerText &&
    btn1.innerText === btn9.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn3.innerText === btn6.innerText &&
    btn3.innerText === btn9.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn3.innerText === btn5.innerText &&
    btn3.innerText === btn7.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn5.innerText === btn2.innerText &&
    btn5.innerText === btn8.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn4.innerText === btn5.innerText &&
    btn4.innerText === btn6.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (
    btn7.innerText === btn8.innerText &&
    btn7.innerText === btn9.innerText
  ) {
    const winner = btn1.innerText;
    statusJogo.innerText = "Jogador " + winner + " venceu!";
    zera();
  } else if (cont === 9) {
    statusJogo.innerText = "O jogo empatou!";
    zera();
  }
}

function zera() {
  control = 0;
  time = 0;
  b1 = 0;
  b2 = 0;
  b3 = 0;
  b4 = 0;
  b5 = 0;
  b6 = 0;
  b7 = 0;
  b8 = 0;
  b9 = 0;
  cont = 0;

  btnSetup.innerText = "Reiniciar";
}

tema.addEventListener("click", function () {
  if (tema.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#ff5e00");
    tema.dataset.theme = "light";
    tema.innerText = "Tema escuro";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#ff5e00");
    tema.dataset.theme = "dark";
    tema.innerText = "Tema claro";
  }
});
