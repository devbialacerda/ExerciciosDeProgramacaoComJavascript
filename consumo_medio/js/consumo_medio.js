alert("Consumo médio");
var distancia = parseFloat(prompt("Qual a distância percorrida em km?"));
var combustivel = parseFloat(prompt("Qual a quantidade de combustível gasto?"));
var resultado = distancia / combustivel;
alert(`O consumo médio é de: ${resultado} km/l`);
