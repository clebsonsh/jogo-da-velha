let jogador = "";
let jogadorSelecionado = document.getElementById("jogador-selecionado");
let jogadorVencedor = document.getElementById("jogador-vencedor");
let quadrados = [...document.getElementsByClassName("quadrado")];

mudarJogador();

function escolherQuadrado(quadrado) {
  if (quadrado.textContent !== "") return;
  if (jogadorVencedor.textContent !== "") return;

  quadrado.textContent = jogador;
  checarVencedor();
  mudarJogador();
}

function mudarJogador() {
  jogador = jogador == "x" ? "o" : "x";
  jogadorSelecionado.textContent = jogador;
}

function reiniciar() {
  quadrados.map((quadrado) => {
    quadrado.textContent = "";
    quadrado.style.backgroundColor = "#1e1e1e";
    quadrado.style.color = "#cecece";
  });
  jogadorVencedor.textContent = "";
  jogador = "x";
  jogadorSelecionado.textContent = jogador;
}

function checarVencedor() {
  // ganhar com as 3 casas na horizontal
  if (checarSequencia(quadrados[0], quadrados[1], quadrados[2])) {
    mudarCorQuadradosVencedor(quadrados[0], quadrados[1], quadrados[2]);
    jogadorVencedor.textContent = quadrados[0].textContent;
  }

  if (checarSequencia(quadrados[3], quadrados[4], quadrados[5])) {
    mudarCorQuadradosVencedor(quadrados[3], quadrados[4], quadrados[5]);
    jogadorVencedor.textContent = quadrados[3].textContent;
  }

  if (checarSequencia(quadrados[6], quadrados[7], quadrados[8])) {
    mudarCorQuadradosVencedor(quadrados[6], quadrados[7], quadrados[8]);
    jogadorVencedor.textContent = quadrados[6].textContent;
  }
  // ganhar com as 3 casas na vertical
  if (checarSequencia(quadrados[0], quadrados[3], quadrados[6])) {
    mudarCorQuadradosVencedor(quadrados[0], quadrados[3], quadrados[6]);
    jogadorVencedor.textContent = quadrados[0].textContent;
  }

  if (checarSequencia(quadrados[1], quadrados[4], quadrados[7])) {
    mudarCorQuadradosVencedor(quadrados[1], quadrados[4], quadrados[7]);
    jogadorVencedor.textContent = quadrados[1].textContent;
  }

  if (checarSequencia(quadrados[2], quadrados[5], quadrados[8])) {
    mudarCorQuadradosVencedor(quadrados[2], quadrados[5], quadrados[8]);
    jogadorVencedor.textContent = quadrados[2].textContent;
  }
  // ganhar com as 3 casas na transversal
  if (checarSequencia(quadrados[0], quadrados[4], quadrados[8])) {
    mudarCorQuadradosVencedor(quadrados[0], quadrados[4], quadrados[8]);
    jogadorVencedor.textContent = quadrados[0].textContent;
  }

  if (checarSequencia(quadrados[2], quadrados[4], quadrados[6])) {
    mudarCorQuadradosVencedor(quadrados[2], quadrados[4], quadrados[6]);
    jogadorVencedor.textContent = quadrados[2].textContent;
  }
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
  return (
    quadrado1.textContent !== "" &&
    quadrado1.textContent === quadrado2.textContent &&
    quadrado1.textContent === quadrado3.textContent
  );
}

function mudarCorQuadradosVencedor(quadrado1, quadrado2, quadrado3) {
  let quadrados = [quadrado1, quadrado2, quadrado3];
  console.log(quadrados);

  quadrados.map((quadrado) => {
    quadrado.style.backgroundColor = "#628e52";
    quadrado.style.color = "#1e1e1e";
  });
}
