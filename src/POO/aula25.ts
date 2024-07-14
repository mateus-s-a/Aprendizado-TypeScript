/* Métodos GETTER & SETTER em POO.
São nada mais do que métodos que permitem o acesso aos atributos privados de uma classe.

GETTER = obtem o valor de um atributo;
SETTER = altera o valor de um atributo.
*/

class Conta_25 { // --- classe 'Conta' contém propriedades e métodos
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
    
    get saldo(): number { // --- metodo GETTER, obtem o valor de um atributo
        return this.saldo_conta;
    }
    set saldo(p_saldo_conta: number) { // --- metodo SETTER, altera o valor de um atributo. SETTER não retorna.
        this.saldo_conta = p_saldo_conta;
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

class ContaPF_25 extends Conta_25 { // --- classe 'ContaPF' herda as propriedades e métodos da classe 'Conta', usando o operador 'extends'
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

class ContaPJ_25 extends Conta_25 { // --- o mesmo aqui
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

const conta1_25 = new ContaPF_25(123456789, "Matthew");
const conta2_25 = new ContaPJ_25(987654321, "Wehttam"); 

conta1_25.depositar(800);
conta1_25.depositar(800);

conta1_25.saldo = 250; // --- chama o metodo SETTER, atribui o valor 250 para o atributo 'saldo_conta'
console.log(conta1_25.saldo); // --- chama o metodo GETTER, não há necessidade dos parâmetros, e agora ele é identificado como uma propriedade em vez de um método

// conta2_25.depositar(15800);
// console.log(conta2_25.saldo());

// conta1_25.sacar(750);
// conta1_25.sacar(750);
// conta1_25.sacar(750);


// conta1_25.infoPF();
// conta2_25.infoPJ();