alert("Série de Fibonacci até 15");
atual = 1;
anterior = 0;
for (let numero = 1; numero <= 15; numero++) {
  alert(` A série de Fibonacci até o 15° número é: ${atual}`);
  proximo = atual + anterior;
  anterior = atual;
  atual = proximo;
}
