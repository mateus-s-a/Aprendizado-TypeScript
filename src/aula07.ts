// Tuplas em TypeScript, uma tupla é um array com tipos definidos para posições diferentes

// let coisas07:[string, number, boolean] = [10, true, "String"]; // --- desta forma não funciona
let coisas07: [string, number, boolean] = ["String", 10, true]; // --- declara o array com os tipos definidos e posições específicas
console.log(coisas07);
console.log(coisas07[0]);

coisas07[2] = false;
console.log(coisas07[2]);

coisas07.push("TypeScript", 20, true); // --- adiciona o valor 'TypeScript' no final do array
console.log(coisas07);
// console.log(coisas07[3]); // --- aqui retorna um erro porque a posição '3' do array não existe