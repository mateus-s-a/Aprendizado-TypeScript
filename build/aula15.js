"use strict";
function soma15(n1, n2, n3) { return n1 + n2 + n3; }
console.log(soma15(12, 21, 23));
function soma15Rest(...numeros) {
    let s = 0;
    for (let el of numeros) {
        s += el;
    }
    return s;
}
console.log(soma15Rest(13, 11, 31));
