/* Entendendo a HERANÇA em POO(Programação Orientação a Objetos)
Herança é quando se tem uma classe que herda outras características de outra classe.

Exemplo: uma classe pai chamada 'Animal' que tem propriedades e métodos, e uma classe filha chamada 'Cachorro' que herda as propriedades e métodos da classe pai.

Além disso, existe a possibilidade de classes serem privadas, protegidas ou públicas.
private = permite que as propriedades e métodos sejam acessíveis apenas dentro da classe;
protected = permite que as propriedades e métodos sejam acessíveis apenas dentro da classe e das classes filhas;
public = permite que as propriedades e métodos sejam acessíveis de qualquer lugar;
*/

class Conta_20 { // --- classe 'Conta' contém propriedades e métodos
    protected numero: number // --- somente acessível para a classe e as classes filhas
    protected titular: string
    private saldo_conta: number

    constructor(p_titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = p_titular;
        this.saldo_conta = 0;
    }

    // --- métodos
    private gerarNumeroConta(): number { return Math.floor(Math.random() * 899999) + 100000; }
    protected info() {
        console.log(`Titular.: ${this.titular}`);
        console.log(`Número..: ${this.numero}`);
    }
    public saldo(): number {
        return this.saldo_conta;
    }
    protected depositar(p_valor: number) {
        this.saldo_conta += p_valor;
    }
    protected sacar(p_valor: number) {
        if(p_valor <= this.saldo_conta) {
            this.saldo_conta -= p_valor;
            console.log(`Saque de R$${p_valor}.00 realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

class ContaPF_20 extends Conta_20 { // --- classe 'ContaPF' herda as propriedades e métodos da classe 'Conta', usando o operador 'extends'
    cpf: number
    
    constructor(p_cpf: number, p_titular: string) {
        super(p_titular); // --- chama o construtor da classe pai
        this.cpf = p_cpf;
    }
    
    infoPF(): void {
        console.log(`Conta...: PF`);
        super.info();
        console.log(`CPF.....: ${this.cpf}`);
        console.log("-----------------------");
    }
    public depositar(p_valor: number): void {
        if(p_valor > 1000) {
            console.log(`Valor de depósito '${p_valor}' ultrapassa o limite de R$ 1000.00 para este tipo de conta.`);
        } else {
            super.depositar(p_valor); // --- chama o método 'depositar(p_valor)' da classe 'pai'
        }
    }
    public sacar(p_valor: number): void {
        if(p_valor < 0) {
            console.log("Valor inválido.");
            return;
        }
        if(p_valor > 1000) {
            console.log(`Valor de saque '${p_valor}' muito grande para este tipo de conta.`);
        } else {
            super.sacar(p_valor); // --- chama o método 'depositar(p_valor)' da classe 'pai'
        }
    }
}

class ContaPJ_20 extends Conta_20 { // --- o mesmo aqui
    cnpj: number

    constructor(p_cnpj: number, p_titular: string) {
        super(p_titular);
        this.cnpj = p_cnpj;
    }
    
    infoPJ(): void {
        console.log(`Conta...: PJ`);
        super.info();
        console.log(`CNPJ....: ${this.cnpj}`);
        console.log("-----------------------");
    }
    public depositar(p_valor: number): void {
        if(p_valor > 10000) {
            console.log(`Valor de depósito '${p_valor}' ultrapassa o limite de R$ 10000.00 para este tipo de conta.`);
        } else {
            super.depositar(p_valor);
        }
    }

    public sacar(p_valor: number): void {
        if(p_valor > 10000) {
            console.log(`Valor de saque '${p_valor}' muito grande para este tipo de conta.`);
        } else {
            super.sacar(p_valor);
        }
    }
}

const conta1_20 = new ContaPF_20(123456789, "Matthew");
const conta2_20 = new ContaPJ_20(987654321, "Wehttam"); 

conta1_20.depositar(800);
conta1_20.depositar(800);
console.log(conta1_20.saldo());

// conta2_20.depositar(15800);
// console.log(conta2_20.saldo());

conta1_20.sacar(750);
conta1_20.sacar(750);
conta1_20.sacar(750);


// conta1_20.infoPF();
// conta2_20.infoPJ();