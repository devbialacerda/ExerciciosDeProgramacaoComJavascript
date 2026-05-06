alert("Números divisíveis por 4 do 1 ao 200");
let contadora = 0;
for (numero = 1; numero <= 200; numero++) {
  contadora = contadora + 1;
  if (contadora % 4 == 0) {
    alert(`O número ${numero} é divisível por 4`);
  }
}
