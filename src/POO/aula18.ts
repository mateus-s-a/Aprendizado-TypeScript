class Computador18 {
    nome: string;
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;

    constructor(nome: string, ram: number, cpu: number) {
        console.log("Constructor sendo executado...");
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
    }

    // Métodos
    info(): void {
        console.log(`Nome..: ${this.nome}\nRam...: ${this.ram}GB\nCPU...: ${this.cpu} cores\nLigado: ${this.ligado ? "Sim" : "Não"}\n-------------------------------`);
    }

    setLigar(): void { this.ligado = true; }
    setDesligar(): void { this.ligado = false; }
}

// Instanciando o objeto
const comp18_1 = new Computador18("Lento", 4, 2);
comp18_1.setLigar(); // --- ligado = true
comp18_1.info();

const comp18_2 = new Computador18("Rápido", 32, 12);
comp18_2.info(); // --- ligado = false

const comp18_3 = new Computador18("Gamer", 16, 8);
comp18_3.setLigar(); // --- ligado = true
comp18_3.info();
comp18_3.setDesligar(); // --- ligado = false
comp18_3.info();