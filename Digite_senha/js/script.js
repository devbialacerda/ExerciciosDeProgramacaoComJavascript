let senha_correta = 1452
while (senha_digitada !== senha_correta) {
  let senha_digitada = parseInt(prompt("Digite sua senha"));
  if (senha_digitada == senha_correta) {
    alert(`Senha CORRETA`);
    alert(`ACESSO PERMITIDO`);
  } else {
    alert(`Senha INCORRETA`);
    alert(`ACESSO NEGADO`);
  }
}
