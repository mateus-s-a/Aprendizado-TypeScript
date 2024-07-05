/* Diferenças entre NULL, UNDEFINED e UNKNOWN em TypeScript
NULL = 'vazio', um tipo nulo
UNDEFINED = 'indefinido', valor indefinido
UNKNOWN = 'qualquer coisa'
*/

let nome10: string|null = null;
console.log(nome10); // --- retorna 'null'

let idade10;
console.log(idade10); // --- retorna 'undefined'

let pais10: unknown; // unknown só pode ser atribuído em tipos unknown ou any
console.log(pais10); // --- retorna 'undefined'
pais10 = "Brasil";
console.log(pais10); // --- retorna 'Brasil'



// let num10: number = pais10; // --- retorna um erro pois 'unknown' não pode ser atribuido a 'number'
// let texto10: string = pais10; // --- retorna um erro pois 'unknown' não pode ser atribuido a 'string'