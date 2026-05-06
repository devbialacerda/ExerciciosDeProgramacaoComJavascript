alert("Soma dos cem primeiros números");
let soma = 0;
for (let numero = 1; numero <= 100; numero++) {
  soma = numero + soma;
}
alert(`O total da soma é ${soma}`);
