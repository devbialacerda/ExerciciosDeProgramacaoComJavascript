alert("Dias Vividos");
var ano = parseInt(prompt("Quantos anos completos você tem?"));
var mes = parseInt(prompt("Quantos meses completos você tem?"));
var dia = parseInt(prompt("Quantos dias completos você tem?"));
let resultado = ano * 365 + mes * 30 + dia;
alert(`Você ja viveu ${resultado} dias`);
