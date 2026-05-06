alert("Aprovado ou Reprovado");
var nota1 = parseFloat(prompt("Digite a primeira nota do aluno"));
var nota2 = parseFloat(prompt("Digite a segunda nota do aluno"));
var nota3 = parseFloat(prompt("Digite a terceira nota do aluno"));
var nota4 = parseFloat(prompt("Digite a quarta nota do aluno"));
resultado = (nota1 + nota2 + nota3 + nota4) / 4;
if (resultado >= 7) alert(`O aluno foi APROVADO com média ${resultado}`);
else {
  alert(
    `O aluno foi REPROVADO, é necessário a realização de uma prova recuperativa`,
  );
  var prova_recuperativa = parseInt(
    prompt("Digite a nota da prova recuperativa "),
  );
  resultado_prova_recuperativa =
    (nota1 + nota2 + nota3 + nota4 + prova_recuperativa) / 5;
  if (resultado_prova_recuperativa >= 5) {
    alert(`O aluno foi APROVADO com média ${resultado_prova_recuperativa}`);
  } else {
    alert(`O aluno foi REPROVADO com média ${resultado_prova_recuperativa}`);
  }
}
