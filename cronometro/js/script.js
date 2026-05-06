alert("Cronômetro");
let minutos = 0;
let segundos = 0;
const cronometro = setInterval(() => {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  console.log(`${minutos} : ${segundos}`);
}, 500);
