alert("Percentual Desconto");
var valor_produto = parseInt(prompt("Digite o valor do produto"));
var desconto = parseInt(prompt("Digite o valor do desconto em porcentagem"));
desconto = desconto / 100 * valor_produto;
resultado = valor_produto - desconto;
alert(`O valor do desconto é de: R$${desconto}`);
alert(`O valor do produto com desconto é: R$ ${resultado}`);
