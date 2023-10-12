function eliminarVocales (str) {
    let resultado = str.replace(/[aAeEiIoOuU]/g, '')
    return resultado
}
const prueba = "Esto es una prueba en Javascript para saber si ha funcionado";
  const aVerSiFunciona = eliminarVocales(prueba);
console.log(aVerSiFunciona);

  