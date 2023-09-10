const analyzer = {
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const caracteresSinEspacioSinPuntos = text.replace(/[\s,.!?;:()-]/g, "");
    return caracteresSinEspacioSinPuntos.length;
  },

  getWordCount: (text) => {
    const conteoPalabras = text.match(/\b(?!\d+\b)\w+\b/g);
    return conteoPalabras ? conteoPalabras.length: 0;
  },

  getNumberCount: (text) => {
    const conteoNumeros = /\b[-+]?\d+(\.\d+)?\b/g;
    const soloNumeros = text.match(conteoNumeros);
    if (soloNumeros === null) {
      return 0;
    } else {
      return soloNumeros.length;
    }
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(" ");
    let totalLongitud = 0;
    for (let i = 0; i < palabras.length; i++) {
      totalLongitud += palabras[i].length;
    }
    const promedio = totalLongitud / palabras.length;
    const promedioRedondeado = promedio.toFixed(2);
    const promedioNumero = Number(promedioRedondeado);
    return promedioNumero;
  },

  getNumberSum: (text) => {
    const numeroSolo = /(?<=^|\s)-?\d+(\.\d+)?(?=\s|$)/g;
    const numeros = text.match(numeroSolo) || [];
    if (numeros.length === 0) {
      return 0;
    }
    const suma = numeros.reduce((acumulador, valor) => acumulador + parseFloat(valor), 0);
    return suma;
  },
};
export default analyzer;
