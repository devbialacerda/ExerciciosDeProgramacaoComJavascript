alert("Valor Maçãs");
let quantidade = parseInt(prompt("Quantas maçãs você comrpou?"));
if (quantidade < 12) {
  let valor_total = quantidade * 1.3;
  alert(`O valor total das maçãs é R$ ${valor_total}`);
} else {
  let valor_total = quantidade * 1;
  alert(`O valor total das maçãs é R$ ${valor_total}`);
}
