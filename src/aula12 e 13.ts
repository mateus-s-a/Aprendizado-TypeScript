/* Aprendendo sobre Funções em Typescript (Aula 12 e 13)

Sintaxe:
function nomeFuncao(parametro1: tipo1, parametro2: tipo2): tipoRetorno {
    // corpo da função
} */

// AULA 12
function funcaoSemRetorno(): void {
    console.log("Função sem retorno.");
}
funcaoSemRetorno();

function soma(n1: number, n2: number): void {
    console.log(n1 + n2);
}
soma(10, 20);

function logar(user: string, senha: string): void {
    console.log(`Usuário...: ${user}`);
    console.log(`Senha.....: ${senha}`);
}
logar("Matthew", "123456");



function funcaoRetornaDivisao(n1: number, n2: number): number {
    return n1 / n2;
}
const num12_1: number = 10;
const num12_2: number = 2;
console.log(`A divisão de ${num12_1} por ${num12_2} é: ${funcaoRetornaDivisao(num12_1, num12_2)}`);

let sres12 = funcaoRetornaDivisao(num12_1, num12_2).toString();
console.log(sres12);
console.log(typeof sres12);



/* AULA 13 --- Parâmetros Padrões e Opcionais
Parâmetro Padrão = Um parâmetro que assume um valor default se nenhum valor for fornecido.
Parâmetro Opcional = Um parâmetro que pode ser omitido ao chamar a função, indicado pelo símbolo `?`.
*/
function subtracao(n1: number = -2, n2: number = 3): number { // --- assumindo valores padrão para 'n1' e 'n2' caso não forem informados
    return n1 - n2;
}
console.log(subtracao());

function novoUser(user: string, senha: string, nome?: string): void {
    console.log(`Usuário...: ${user}`);
    console.log(`Senha.....: ${senha}`);
    if(nome)
        console.log(`Nome......: ${nome}\n`); // --- verificando se o parâmetro 'nome' foi informado
    else
        console.log(`Nome......: Nenhum nome informado.\n`); // --- caso não tenha sido informado
}
novoUser("Matthew", "123456");
novoUser("Foyer", "7891", "Cauã");