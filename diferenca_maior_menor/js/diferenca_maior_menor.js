alert("Diferença maior e menor");
var valor1 = parseFloat(prompt("Digite o primeiro valor"));
var valor2 = parseFloat(prompt("Digite o segundo valor"));
valor1_menos_valor2 = valor1 - valor2;
valor2_menos_valor1 = valor2 - valor1;
if (valor1_menos_valor2 > valor2_menos_valor1) {
  alert(`${valor1} é maior que ${valor2}`);
} else {
  alert(`${valor2} é maior que ${valor1}`);
}
