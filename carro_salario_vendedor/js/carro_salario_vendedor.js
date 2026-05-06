alert("Salário vendedor de carros")
var salario = parseFloat(prompt("Qual o valor do seu salário?"))
var quantidade_carros_vendidos = parseInt(prompt("Quantos carros você vendeu esse mês?"))
var comissao_fixa = parseFloat(prompt("Qual o valor da comissão por carro?"))
comissao_carros_vendidos = quantidade_carros_vendidos * comissao_fixa
var valor_total_vendas = parseFloat(prompt("Qual o valor total das suas vendas?")) 
valor_total_vendas = (5 / 100) * valor_total_vendas
valor_salario_total = salario + comissao_carros_vendidos + valor_total_vendas
alert(`O valor total do seu salário é de: R$${valor_salario_total}`)