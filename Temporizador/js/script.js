alert("Cronômetro");
let minutos = parseInt(prompt("Digite os minutos"))
let segundos = parseInt(prompt("Digite os segundos"))
const temporizador = setInterval(() => {
  segundos += -1;
  if (segundos === 0) {
    segundos = 59;
    minutos += -1;
  }
  console.log(`${minutos} : ${segundos}`);
}, 1000);
