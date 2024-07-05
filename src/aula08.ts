/* Tipo Object em TypeScript, é um tipo de objeto que não está tipado no momento de sua declaração no arquivo TS
 e pode conter propriedades e métodos de qualquer tipo */

let dados08 = {
    nome: "Matthew",
    idade: 20,
    status: "ativo",

    ola: () => { console.log("Olá, Mundo!"); },
    info: (p:string) => { console.log(`Olá, ${p}.`); }
}

console.log(dados08);
console.log(typeof dados08); // --- 'object'
console.log(dados08.nome);
console.log(dados08.idade);
console.log(dados08.status);

dados08.nome = "Foyer";
console.log(dados08.nome);

dados08.ola();
dados08.info("Triz");
dados08.info(dados08.nome);