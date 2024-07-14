"use strict";
function funcaoSemRetorno() {
    console.log("Função sem retorno.");
}
funcaoSemRetorno();
function soma(n1, n2) {
    console.log(n1 + n2);
}
soma(10, 20);
function logar(user, senha) {
    console.log(`Usuário...: ${user}`);
    console.log(`Senha.....: ${senha}`);
}
logar("Matthew", "123456");
function funcaoRetornaDivisao(n1, n2) {
    return n1 / n2;
}
const num12_1 = 10;
const num12_2 = 2;
console.log(`A divisão de ${num12_1} por ${num12_2} é: ${funcaoRetornaDivisao(num12_1, num12_2)}`);
let sres12 = funcaoRetornaDivisao(num12_1, num12_2).toString();
console.log(sres12);
console.log(typeof sres12);
function subtracao(n1 = -2, n2 = 3) {
    return n1 - n2;
}
console.log(subtracao());
function novoUser(user, senha, nome) {
    console.log(`Usuário...: ${user}`);
    console.log(`Senha.....: ${senha}`);
    if (nome)
        console.log(`Nome......: ${nome}\n`);
    else
        console.log(`Nome......: Nenhum nome informado.\n`);
}
novoUser("Matthew", "123456");
novoUser("Foyer", "7891", "Cauã");
