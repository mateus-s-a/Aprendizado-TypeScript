/* Arrow Functions e Função Anônima.

Arrow Functions = Funções com uma sintaxe mais curta, não possuem seu próprio `this` e são sempre anônimas.
Funções Anônimas = Funções sem nome atribuídas a variáveis ou usadas como argumentos, podem ser declaradas com a palavra-chave `function`.

Sintaxe de uma Arrow Function:
    const nomeFuncao = (parametro1: tipo1, parametro2: tipo2): tipoRetorno => {
        // corpo da função
    }
*/

const funcaoAnonima = (txt: string): void => {
    console.log(txt);
}
funcaoAnonima("Isso é uma Função Anônima, com sintaxe de uma Arrow Function.");

const soma14 = (n1: number, n2: number): number => { return n1 + n2; }
console.log(soma14(10, 20));

const multiplicacao = (n1: number[]): number => {
    let s: number = 1;
    // n1.map((el) => { s *= el; });
    // OU
    // n1.forEach((el) => { s *= el; });
    // OU
    // for(let i=0; i<n1.length; i++) { s *= n1[i]; }
    // OU
    for(let el of n1) { s *= el; }

    return s;
}

const pi: number = parseFloat(Math.PI.toFixed(2)); // --- pi = 3.14
console.log(multiplicacao([pi, pi]));