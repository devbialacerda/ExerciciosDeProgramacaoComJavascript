let numero1 = parseInt(prompt("Digite o primeiro número"));
let numero2 = parseInt(prompt("Digite o segundo número"));
if (numero1 > numero2) {
  alert(`O ${numero1} é maior que o ${numero2}`);
} else if (numero1 == numero2) {
  alert(`O ${numero1} e o ${numero2} são iguais`);
} else {
  alert(`O ${numero2} é maior que o ${numero1}`);
}
