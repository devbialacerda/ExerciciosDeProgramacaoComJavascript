alert(
  "Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.",
);
var a = parseInt(prompt("Digite o valor de a"));
var b = parseInt(prompt("Digite o valor de b"));
var c = parseInt(prompt("Digite o valor de c"));
var d = parseInt(prompt("Digite o valor de d"));

if (a % 2 === 0 && a % 3 === 0) {
  alert(`O número ${a} é divisível por 2 e 3`);
} else {
  alert(`O número ${a} não é divisível por 2 e 3`);
}
if (b % 2 === 0 && b % 3 === 0) {
  alert(`O número ${b} é divisível por 2 e 3`);
} else {
  alert(`O número ${b} não é divisível por 2 e 3`);
}
if (c % 2 === 0 && c % 3 === 0) {
  alert(`O número ${c} é divisível por 2 e 3`);
} else {
  alert(`O número ${c} não é divisível por 2 e 3`);
}
if (d % 2 === 0 && d % 3 === 0) {
  alert(`O número ${d} é divisível por 2 e 3`);
} else {
  alert(`O número ${d} não é divisível por 2 e 3`);
}
