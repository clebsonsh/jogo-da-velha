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
  const sequecias = [
    // ganhar com as 3 casas na horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // ganhar com as 3 casas na vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // ganhar com as 3 casas na transversal
    [0, 4, 8],
    [2, 4, 6],
  ];
  sequecias.map((sequencia) => {
    if (
      checarSequencia(
        quadrados[sequencia[0]],
        quadrados[sequencia[1]],
        quadrados[sequencia[2]]
      )
    ) {
      mudarCorQuadradosVencedor(
        quadrados[sequencia[0]],
        quadrados[sequencia[1]],
        quadrados[sequencia[2]]
      );
      jogadorVencedor.textContent = quadrados[sequencia[0]].textContent;
    }
  });
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

  quadrados.map((quadrado) => {
    quadrado.style.backgroundColor = "#628e52";
    quadrado.style.color = "#1e1e1e";
  });
}
