function toca_som(seletor_audio) {
  const elemento = document.querySelector(seletor_audio);

  if (elemento != null && elemento.localName == "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado ou seletor inválido");
  }
}

const lista_de_teclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < lista_de_teclas.length; contador++) {
  const tecla = lista_de_teclas[contador];
  const instrumento = tecla.classList[1];
  const id_audio = `#som_${instrumento}`;

  tecla.onclick = function () {
    toca_som(id_audio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
