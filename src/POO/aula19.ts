/* Modificadores de Acesso.

public = permite que as propriedades e métodos sejam acessíveis de qualquer lugar
private = permite que as propriedades e métodos sejam acessíveis apenas dentro da classe
protected = permite que as propriedades e métodos sejam acessíveis apenas dentro da classe e das classes filhas
*/

class Computador19 {
    private id: number;
    nome: string; // --- public (mesmo não definido)
    private ram: number = 0;
    private cpu: number = 0;
    protected ligado: boolean = false;

    constructor(nome: string, ram: number, cpu: number) {
        console.log("Constructor sendo executado...");
        this.id = 0;
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

    upRAM(qtd: number): void {
        if(qtd > 0 && qtd <= 256)
            this.ram = qtd;
        else
            console.log(`Quantidade ${qtd}GB de RAM inválida!`);
    }
}

// Instanciando o objeto
const comp19_1 = new Computador19("Lento", 4, 2);
comp19_1.info();
// comp19_1.ligado = null; // --- como ligado é privado, não pode ser alterado/modificado
// comp19_1.cpu = 0;
// comp19_1.ram = -999;

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