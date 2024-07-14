"use strict";
class Conta_25 {
    numero;
    titular;
    saldo_conta;
    constructor(p_titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = p_titular;
        this.saldo_conta = 0;
    }
    gerarNumeroConta() { return Math.floor(Math.random() * 899999) + 100000; }
    info() {
        console.log(`Titular.: ${this.titular}`);
        console.log(`Número..: ${this.numero}`);
    }
    get saldo() {
        return this.saldo_conta;
    }
    set saldo(p_saldo_conta) {
        this.saldo_conta = p_saldo_conta;
    }
    depositar(p_valor) {
        this.saldo_conta += p_valor;
    }
    sacar(p_valor) {
        if (p_valor <= this.saldo_conta) {
            this.saldo_conta -= p_valor;
            console.log(`Saque de R$${p_valor}.00 realizado com sucesso.`);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
}
class ContaPF_25 extends Conta_25 {
    cpf;
    constructor(p_cpf, p_titular) {
        super(p_titular);
        this.cpf = p_cpf;
    }
    infoPF() {
        console.log(`Conta...: PF`);
        super.info();
        console.log(`CPF.....: ${this.cpf}`);
        console.log("-----------------------");
    }
    depositar(p_valor) {
        if (p_valor > 1000) {
            console.log(`Valor de depósito '${p_valor}' ultrapassa o limite de R$ 1000.00 para este tipo de conta.`);
        }
        else {
            super.depositar(p_valor);
        }
    }
    sacar(p_valor) {
        if (p_valor < 0) {
            console.log("Valor inválido.");
            return;
        }
        if (p_valor > 1000) {
            console.log(`Valor de saque '${p_valor}' muito grande para este tipo de conta.`);
        }
        else {
            super.sacar(p_valor);
        }
    }
}
class ContaPJ_25 extends Conta_25 {
    cnpj;
    constructor(p_cnpj, p_titular) {
        super(p_titular);
        this.cnpj = p_cnpj;
    }
    infoPJ() {
        console.log(`Conta...: PJ`);
        super.info();
        console.log(`CNPJ....: ${this.cnpj}`);
        console.log("-----------------------");
    }
    depositar(p_valor) {
        if (p_valor > 10000) {
            console.log(`Valor de depósito '${p_valor}' ultrapassa o limite de R$ 10000.00 para este tipo de conta.`);
        }
        else {
            super.depositar(p_valor);
        }
    }
    sacar(p_valor) {
        if (p_valor > 10000) {
            console.log(`Valor de saque '${p_valor}' muito grande para este tipo de conta.`);
        }
        else {
            super.sacar(p_valor);
        }
    }
}
const conta1_25 = new ContaPF_25(123456789, "Matthew");
const conta2_25 = new ContaPJ_25(987654321, "Wehttam");
conta1_25.depositar(800);
conta1_25.depositar(800);
conta1_25.saldo = 250;
console.log(conta1_25.saldo);
