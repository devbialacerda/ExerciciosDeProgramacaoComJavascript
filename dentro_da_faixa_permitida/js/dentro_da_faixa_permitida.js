alert("Dentro da faixa permitida ou não");
var numero = parseInt(prompt("Digite um número entre 1 a 9"));
if (numero >= 1 && numero < 9) {
  alert(`O valor está dentro da faixa permitida`);
} else {
  alert("O valor está fora da faixa permitida");
}
