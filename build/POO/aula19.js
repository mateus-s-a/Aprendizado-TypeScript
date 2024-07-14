"use strict";
class Computador19 {
    id;
    nome;
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu) {
        console.log("Constructor sendo executado...");
        this.id = 0;
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
    }
    info() {
        console.log(`Nome..: ${this.nome}\nRam...: ${this.ram}GB\nCPU...: ${this.cpu} cores\nLigado: ${this.ligado ? "Sim" : "Não"}\n-------------------------------`);
    }
    setLigar() { this.ligado = true; }
    setDesligar() { this.ligado = false; }
    upRAM(qtd) {
        if (qtd > 0 && qtd <= 256)
            this.ram = qtd;
        else
            console.log(`Quantidade ${qtd}GB de RAM inválida!`);
    }
}
const comp19_1 = new Computador19("Lento", 4, 2);
comp19_1.info();
const comp19_2 = new Computador19("Rápido", 32, 12);
comp19_2.info();
const comp19_3 = new Computador19("Gamer", 16, 8);
comp19_3.info();
comp19_1.upRAM(-5);
comp19_1.info();
comp19_2.upRAM(257);
comp19_2.info();
comp19_3.upRAM(24);
comp19_3.info();
