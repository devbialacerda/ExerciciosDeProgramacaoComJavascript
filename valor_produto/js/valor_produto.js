alert("Valor total de um produto");
var quantidade = parseFloat(
  prompt("Qual a quantidade do produto que você comprou?"),
);
var valor = parseFloat(prompt("Qual o valor deste produto?"));
let resultado = quantidade * valor;
alert(`O valor total da compra é de: ${resultado}`);
