alert("Dólar para real");
var dolar = parseFloat(prompt("Qual o valor do dólar hoje?"));
var valor_real_total = parseFloat(
  prompt("Quantos reais você quer converter para dólar?"),
);
let resultado = valor_real_total / dolar;
alert(`A conversão de R$${valor_real_total} para dólar é U$${resultado}`);
