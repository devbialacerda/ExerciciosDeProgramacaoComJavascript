alert("Custo consumidor");
var custo_de_fabrica = parseInt(prompt("Digite o valor do custo de fábrica"));
percentual_distribuidor = (28 / 100) * custo_de_fabrica;
percentual_impostos = (45 / 100) * custo_de_fabrica;
custo_consumidor =
  percentual_distribuidor + percentual_impostos + custo_de_fabrica;
alert(`O valor final para o consumidor é: ${custo_consumidor}`);
