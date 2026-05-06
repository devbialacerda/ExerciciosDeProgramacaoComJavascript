alert("Tabuada com repetição 'para'")
let numero = parseInt(prompt("Digite um número para a tabuada"))
for (let tabuada=1; tabuada<=10; tabuada++){
let resultado = tabuada * numero
alert(`A tabuada do número ${numero} é: ${resultado}`)
}