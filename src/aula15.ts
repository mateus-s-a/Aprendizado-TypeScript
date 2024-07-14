/* Aprendendo sobre parâmetros REST com SPREAD em Typescript

Parâmetros REST = um parâmetro que permite que o usuário defina o número de parâmetros que você deseja.
Sintaxe:

Parâmetros REST com SPREAD = um parâmetro que permite que o usuário passe um array como parâmetro.
*/

function soma15(n1: number, n2: number, n3: number): number { return n1 + n2 + n3; }
console.log(soma15(12, 21, 23));

function soma15Rest(...numeros: number[]): number {
    let s: number = 0;
    for(let el of numeros) { s += el; }

    return s;
}
console.log(soma15Rest(13, 11, 31));