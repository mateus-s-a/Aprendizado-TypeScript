"use strict";
class Computador18 {
    nome;
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu) {
        console.log("Constructor sendo executado...");
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
    }
    info() {
        console.log(`Nome..: ${this.nome}\nRam...: ${this.ram}GB\nCPU...: ${this.cpu} cores\nLigado: ${this.ligado ? "Sim" : "Não"}\n-------------------------------`);
    }
    setLigar() { this.ligado = true; }
    setDesligar() { this.ligado = false; }
}
const comp18_1 = new Computador18("Lento", 4, 2);
comp18_1.setLigar();
comp18_1.info();
const comp18_2 = new Computador18("Rápido", 32, 12);
comp18_2.info();
const comp18_3 = new Computador18("Gamer", 16, 8);
comp18_3.setLigar();
comp18_3.info();
comp18_3.setDesligar();
comp18_3.info();
