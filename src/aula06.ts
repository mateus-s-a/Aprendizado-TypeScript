let numeros06 = [20, 30, 40]; // --- automaticamente declara o tipo como 'number' quando inicializa o array com valores numéricos
let numeros06_2: Array<number> = [50, 60, 70]; // --- declara o tipo como 'Array<number>'
let numeros06_3: (number|string)[] = [80, 90, 100]; // --- declara o tipo como '(number|string)[]'
let numeros06_4: number[] = [110, 120, 130]; // --- declara o tipo como 'number[]'

numeros06_4.push(140, 160); // --- adiciona o valor '140' e '160' no final do array
numeros06_4.unshift(150, 100); // --- adiciona o valor '150' e '100' no começo do array
numeros06_4.pop(); // --- remove o último valor do array
numeros06_4.shift(); // --- remove o primeiro valor do array

console.log(numeros06_4);

let numeros_ro06: ReadonlyArray<number> = [1, 2, 3, 4, 5]; // --- declara o array como 'ReadonlyArray<number>'
// numeros_ro.push(6); // --- não podemos adicionar valores no array 'ReadonlyArray<number>'
let numeros_dobrados06 = numeros_ro06.map((el) => el * 2); // --- multiplica cada valor do array por 2
console.log(numeros_dobrados06);