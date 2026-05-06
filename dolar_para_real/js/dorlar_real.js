alert("Dólar para real");
var dolar = parseFloat(prompt("Qual o valor do dólar hoje?"));
var valor_dolar_total = parseFloat(
  prompt("Quantos dólares você quer converter para real?"),
);
let resultado = dolar * valor_dolar_total;
alert(`A conversão de U$${valor_dolar_total} para real é R$${resultado}`);
