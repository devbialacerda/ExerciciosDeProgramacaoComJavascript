let angulo = parseInt(prompt("Qual o ângulo do seu triângulo?"))
if (angulo < 90){
    alert(`Seu triângulo é um obtusângulo`)
}
else if(angulo == 90){
    alert(`Seu triângulo é retângulo`)
}
else{
    alert(`Seu triângulo é acutângulo`)
}
