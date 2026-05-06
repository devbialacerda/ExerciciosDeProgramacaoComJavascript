alert("Ordem decrescente");
var a = parseFloat(prompt("Digite o valor de a "));
var b = parseFloat(prompt("Digite o valor de b "));
var c = parseFloat(prompt("Digite o valor de c "));
if (a < b) {
  auxiliar = a;
  a = b;
  b = auxiliar;
}
if (a < c) {
  auxiliar = a;
  a = c;
  c = auxiliar;
}
if (b < c) {
  auxiliar = b;
  b = c;
  c = auxiliar;
}
alert(`Os valores em ordem decrescente são: ${a}, ${b}, ${c}`);
