import analyzer from "./analyzer.js";

const textareas = document.getElementsByName("user-input");
const userInput = textareas[0];
userInput.addEventListener("keyup", function () {
  const text = userInput.value;

  const caracteresSinEspacioSinPuntos = document.querySelector(
    'li[data-testid="character-no-spaces-count"]'
  );
  caracteresSinEspacioSinPuntos.textContent =
    analyzer.getCharacterCountExcludingSpaces(text);

  const recuentoCaracteres = document.querySelector(
    'li[data-testid="character-count"]'
  );
  recuentoCaracteres.textContent = analyzer.getCharacterCount(text);

  const recuentoPalabras = document.querySelector(
    'li[data-testid="word-count"]'
  );
  recuentoPalabras.textContent = analyzer.getWordCount(text);

  const soloNumeros = document.querySelector('li[data-testid="number-count"]');
  soloNumeros.textContent = analyzer.getNumberCount(text);

  const promedioPalabras = document.querySelector(
    'li[data-testid="word-length-average"]'
  );
  promedioPalabras.textContent = analyzer.getAverageWordLength(text);

  const sumaNumeros = document.querySelector('li[data-testid="number-sum"]');
  sumaNumeros.textContent = analyzer.getNumberSum(text);
});
document.getElementById("reset-button").addEventListener("click", function () {
  const métricas = document.querySelectorAll(".lista");
  métricas.forEach(function (elementosLista) {
    elementosLista.textContent = "0";

    const textareas = document.getElementsByName("user-input");
    textareas.forEach(function (textareas) {
      textareas.value = "";
    });
  });
});
