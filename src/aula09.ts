/* ENUM em TypeScript, permite definir um conjunto de constantes numéricas e nominais de um tipo */

enum dias09 {
    domingo = 0,
    segunda = 1,
    terça = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

console.log(typeof dias09); // --- 'object'
console.log(dias09.domingo); // --- retorna o valor '1' da chave 'domingo'
console.log(dias09['segunda']); // --- retorna o valor '2' da chave 'segunda'
console.log(dias09[3]); // --- retorna a chave 'terça'

const d09 = new Date();
console.log(d09.getDate());
console.log(d09.getDay());
console.log(dias09[d09.getDay()]);



enum cores {
    branco = '#fff',
    vermelho = '#f00',
    verde = '#0f0',
    azul = '#00f',
    preto = '#000'
}

console.log(cores.branco);
console.log(cores['branco']);



enum tipoUsuario {
    USER,
    ADMIN,
    SUPER
}

console.log(tipoUsuario.USER); // --- retorna o valor '0'
console.log(tipoUsuario.ADMIN); // --- retorna o valor '1'
console.log(tipoUsuario.SUPER); // --- retorna o valor '2'

const tp09: tipoUsuario = tipoUsuario.USER;
console.log(tp09); // --- retorna o valor '0'