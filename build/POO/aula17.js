"use strict";
class Computador17 {
    nome;
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu, ligado) {
        console.log("Constructor sendo executado...");
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}
const comp17_1 = new Computador17("Lento", 4, 2, true);
console.log(`Nome: ${comp17_1.nome}\nRam: ${comp17_1.ram}GB\nCPU: ${comp17_1.cpu} cores\nLigado: ${comp17_1.ligado}`);
const comp17_2 = new Computador17("Rápido", 32, 12, true);
console.log(`Nome: ${comp17_2.nome}\nRam: ${comp17_2.ram}GB\nCPU: ${comp17_2.cpu} cores\nLigado: ${comp17_2.ligado}`);
const comp17_3 = new Computador17("Gamer", 16, 8, true);
console.log(`Nome: ${comp17_3.nome}\nRam: ${comp17_3.ram}GB\nCPU: ${comp17_3.cpu} cores\nLigado: ${comp17_3.ligado}`);
