alert("Bhaskara");
var a = parseInt(prompt("Digite o valor de a"));
var b = parseInt(prompt("Digite o valor de b"));
var c = parseInt(prompt("Digite o valor de c"));
delta = b * b - (4 * a * c);
if (delta < 0) {
  alert(`raiz negativa`);
} else {
  alert(`O resultado da raiz de delta é: ${Math.sqrt(delta)}`);
}
if (b < 0) {
  primeira_raiz = ((b + Math.sqrt(delta)) / 2) * a;
  segunda_raiz = ((b - Math.sqrt(delta)) / 2) * a;
  alert(`A primeira raiz é: ${primeira_raiz}`);
  alert(`A segunda raiz é: ${segunda_raiz}`);
} else {
  primeira_raiz = ((-b + Math.sqrt(delta)) / 2) * a;
  segunda_raiz = ((-b - Math.sqrt(delta)) / 2) * a;
  alert(`A primeira raiz é: ${primeira_raiz}`);
  alert(`A segunda raiz é: ${segunda_raiz}`);
}
