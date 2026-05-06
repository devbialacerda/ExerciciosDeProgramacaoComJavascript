alert("Reajuste Salarial");
var salario = parseInt(prompt("Digite o valor total do seu salário."));
var duvida = prompt("Seu reajuste foi um valor inteiro ou porcentagem?");
if (duvida == "valor inteiro") {
  var reajuste = parseInt(prompt("Digite o valor do reajuste"));
  reajuste_salarial = reajuste + salario;
  alert(`Seu salário com ajuste é: ${reajuste_salarial}`);
} else {
  var reajuste = parseInt(prompt("Digite o valor do reajuste"));
  reajuste_salarial = (reajuste / 100) * salario + salario;
  alert(`Seu salário com ajuste é: ${reajuste_salarial}`);
}
