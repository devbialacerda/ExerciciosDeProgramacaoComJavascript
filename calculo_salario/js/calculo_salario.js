alert("Cálculo Salário");
var valor_hora = parseInt(
  prompt("Digite o valor de quanto você recebe por hora trabalhada"),
);
var hora_mes = parseInt(prompt("Digite quantas horas você trabalha por mês"));
resultado = valor_hora * hora_mes;
alert(`O valor total do seu salário é: R$ ${resultado}`);
