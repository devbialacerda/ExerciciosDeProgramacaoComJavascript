alert("Comparação de áreas entre área do quadrado e área do círculo");
var lado = parseFloat(prompt("Digite o valor do lado do quadrado"));
let area_quadrado = lado * lado;
var raio = parseFloat(prompt("Digite o valor do raio do círculo"));
let area_circulo = 3.14 * (raio * raio);
alert(`A área do quadrado é ${area_quadrado} e do círculo é ${area_circulo}`);
if (area_quadrado > area_circulo) {
  alert(`A área do quadrado é maior`);
} else {
  alert(`A área do círculo é maior`);
}
