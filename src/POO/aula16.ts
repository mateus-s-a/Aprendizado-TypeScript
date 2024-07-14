/* Aprendendo sobre P.O.O. Classes #P1 em Typescript

P.O.O. = Programação Orientada a Objetos
Classes = Conjunto de atributos e métodos que permitem a construção de objetos de uma maneira similar à programação procedural
*/

class Computador {
    nome: string = "Computador 1";
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;
}

const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();

comp1.nome = "Lento";
comp2.nome = "Rápido";
comp3.nome = "Gamer";
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);