alert("Número sempre positivo");
var numero = parseFloat(prompt("Digite um número"));
if (numero < 0) {
  resultado = numero * -1;
  alert(`${resultado}`);
} else {
  alert(`${numero}`);
}
