/* Type Assertion e Typecast em Typescript:
Type Assertion = Especificar o tipo de uma variável (as | <tipo>)
Typecast = Converter o tipo de uma variável */

let nvalor11: number;
let svalor11: string;
let uvalor11: unknown;

uvalor11 = 10;
console.log(typeof uvalor11);
console.log(uvalor11);

nvalor11 = uvalor11 as number; // --- converte o tipo de 'unknown' para 'number'
console.log(typeof nvalor11);
console.log(nvalor11);

uvalor11 = "String convertida.";
svalor11 = <string> uvalor11; // --- converte o tipo de 'unknown' para 'string'
console.log(typeof svalor11);
console.log(svalor11);

svalor11 = "20";
nvalor11 = Number(svalor11); // --- converte o tipo de 'string' para 'number'
console.log(nvalor11 + 10);
console.log(typeof nvalor11);

svalor11 = String(nvalor11); // --- converte o tipo de 'number' para 'string'
console.log(svalor11 + 10);
console.log(typeof svalor11);