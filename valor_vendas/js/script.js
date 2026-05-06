let salario_fixo = parseInt(prompt("Qual o valor do seu salário fixo?"));
let valor_vendas = parseInt(prompt("Qual o valor total das vendas?"));
if (valor_vendas <= 1500) {
  let valor_vendas_acrescimo = valor_vendas * 0.03 + salario_fixo;
  alert(`Seu salário é de ${valor_vendas_acrescimo}`);
} else {
  let valor_vendas_acrescimo = valor_vendas * 0.05 + salario_fixo;
  alert(`Seu salário é de ${valor_vendas_acrescimo}`);
}
