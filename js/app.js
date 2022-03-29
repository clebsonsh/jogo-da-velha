let jogador = "";
let jogadorSelecionado = document.getElementById("jogador-selecionado");
let quadrados = [...document.getElementsByClassName("quadrado")];

mudarJogador();

function escolherQuadrado(quadrado) {
  if (quadrado.textContent !== "") return;

  quadrado.textContent = jogador;
  mudarJogador();
}

function mudarJogador() {
  jogador = jogador == "x" ? "o" : "x";
  jogadorSelecionado.textContent = jogador;

  quadrados.map((quadrado) => console.log(quadrado.textContent));
}
