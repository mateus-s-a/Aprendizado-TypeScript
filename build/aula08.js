"use strict";
let dados08 = {
    nome: "Matthew",
    idade: 20,
    status: "ativo",
    ola: () => { console.log("Olá, Mundo!"); },
    info: (p) => { console.log(`Olá, ${p}.`); }
};
console.log(dados08);
console.log(typeof dados08);
console.log(dados08.nome);
console.log(dados08.idade);
console.log(dados08.status);
dados08.nome = "Foyer";
console.log(dados08.nome);
dados08.ola();
dados08.info("Triz");
dados08.info(dados08.nome);
