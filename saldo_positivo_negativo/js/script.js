let conta = parseInt(prompt("Qual o número da sua conta?"));
let saldo = parseInt(prompt("Qual o valor do seu saldo atual?"));
let debitos = parseInt(prompt("Qual o valor do seus débitos totais?"));
let creditos = parseInt(prompt("Qual o valor do seus créditos totais?"));
let saldo_total = saldo - debitos + creditos;
alert(`Seu saldo total é de ${saldo_total}`);
if (saldo_total < 0) {
  alert(`SALDO NEGATIVO`);
} else if (saldo_total == 0) {
  alert(`SEM SALDO`);
} else {
  alert(`SALDO POSITIVO`);
}
