alert("Aprovação Aluno");
var nota1 = parseFloat(prompt("Digite a primeira nota do aluno"));
var nota2 = parseFloat(prompt("Digite a segunda nota do aluno"));
var nota3 = parseFloat(prompt("Digite a terceira nota do aluno"));
var nota4 = parseFloat(prompt("Digite a quarta nota do aluno"));
let resultado = (nota1 + nota2 + nota3 + nota4) / 4;
if (resultado >= 5) alert(`O aluno foi APROVADO com média ${resultado}`);
else {
  alert(`O aluno foi REPROVADO com média ${resultado}`);
}
