alert("Potência de 3")
let multiplicacao = 1
let numero 
for (numero = 0; numero <= 15; numero++){ 
    if (numero === 0) {
       multiplicacao = multiplicacao * 1
    }
    else {
      multiplicacao = multiplicacao * 3
    }
    alert(`3 elevado a ${numero} é: ${multiplicacao}`)
}