let sexo = prompt("Qual seu sexo? Digite F (feminino) ou M (masculino)").toUpperCase();
if (sexo == "F") {
  let altura = parseFloat(prompt("Digite sua altura"));
  let peso_mulher = altura * 62.1 - 44.7;
  alert(`Seu peso ideal é ${peso_mulher}`);
} else if (sexo == "M") {
  let altura = parseFloat(prompt("Digite sua altura"));
  let peso_homem = altura * 72.7 - 58;
  alert(`Seu peso ideal é ${peso_homem}`);
}
