alert("Ler nome e definir o sexo");
var nome = prompt("Digite seu nome");
var sexo = prompt(
  "Digite seu sexo. Por gentileza, utilize F (feminino) ou M (masculino)",
).toUpperCase();
if (sexo === "F") {
  alert(`Seja bem vinda ${nome}`);
} else if (sexo === "M") {
  alert(`Seja bem vindo ${nome}`);
} else {
  alert(`Sexo inválido, por favor digite F (feminino) ou M (masculino)`);
}
