alert("Prestação em atraso");
var valor_prestacao = parseFloat(prompt("Digite o valor da prestação"));
var tempo_atraso = parseInt(
  prompt("Digite o tempo que a prestação está atrasada"),
);
var taxa = parseInt(prompt("Digite o valor da taxa em porcentagem"));
var resultado = (taxa / 100) * tempo_atraso * valor_prestacao + valor_prestacao;
alert(`O valor da prestação com a taxa de atraso é: ${resultado}`);
