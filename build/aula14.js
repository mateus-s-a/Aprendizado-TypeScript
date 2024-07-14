"use strict";
const funcaoAnonima = (txt) => {
    console.log(txt);
};
funcaoAnonima("Isso é uma Função Anônima, com sintaxe de uma Arrow Function.");
const soma14 = (n1, n2) => { return n1 + n2; };
console.log(soma14(10, 20));
const multiplicacao = (n1) => {
    let s = 1;
    for (let el of n1) {
        s *= el;
    }
    return s;
};
const pi = parseFloat(Math.PI.toFixed(2));
console.log(multiplicacao([pi, pi]));
