alert("Diferentes etapas da divisão no javascript")
let numero = parseFloat(prompt("Digite um número")) 
let numero2 = parseFloat(prompt("Digite um número segundo número")) 
let divisao = numero / numero2
let divisão_numero_inteiro = Math.floor(numero / numero2)
let resto_da_divisao = numero % numero2
alert(`O resultado da divisão é ${divisao}`)
alert(`O resultado INTEIRO da divisão é ${divisão_numero_inteiro}`)
alert(`O resto da divisão é ${resto_da_divisao}`)