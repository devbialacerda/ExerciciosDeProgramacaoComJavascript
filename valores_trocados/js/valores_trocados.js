alert("Valores trocados");
var A = parseFloat(prompt("Digite o valor de A"));
var B = parseFloat(prompt("Digite o valor de B"));
auxiliar = A;
A = B;
B = auxiliar;
alert(`O valor de A agora é ${A}`);
alert(`O valor de B agora é ${B}`);
