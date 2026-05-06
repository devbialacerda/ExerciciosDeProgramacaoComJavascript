alert("Calcular área dos cômodos de uma casa ");
let continuar = "SIM";
area_total = 0 
while (continuar.toUpperCase() !== "NÃO" && continuar.toUpperCase() !== "NAO") {
  let comodo = prompt("Qual o nome do cômodo?");
  let comprimento = parseFloat(prompt("Qual o comprimento do cômodo?"));
  let largura = parseFloat(prompt("Qual a largura do cômodo?"));
  let resultado_area_comodo = comprimento * largura;
  area_total = area_total + resultado_area_comodo;
  alert(`A área do(a) ${comodo} é ${resultado_area_comodo} m²`);
  continuar = prompt("Possui mais cômodos? Digite SIM ou NÃO");
}
alert(`A área total é de ${area_total} m²`);
