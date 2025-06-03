export class Conta {
    private _numero : number;
    private _agencia : number;
    private _tipo : number;
    private _titular : string;
    private _saldo : number;

    constructor(numero : number, agencia : number, tipo : number, titular : string, saldo : number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public setNumero(numero : number) {
        this._numero = numero;
    }

    public getNumero() : number {
        return this._numero;
    }
    
    public setAgencia(agencia : number) {
        this._agencia = agencia;
    }

    public getAgencia() : number {
        return this._agencia;
    }
    
    public setTipo(tipo : number) {
        this._tipo = tipo;
    }

    public getTipo() : number {
        return this._tipo;
    }
    
    public setTitular(titular : string) {
        this._titular = titular;
    }

    public getTitular() : string {
        return this._titular;
    }
    
    public setSaldo(saldo : number) {
        this._saldo = saldo;
    }

    public getSaldo() : number {
        return this._saldo;
    }

    /**
     * 
     * @param valorSaque 
     * @returns 
     */
    public sacar(valorSaque: number) : boolean {
        if (this._saldo < valorSaque) {
            console.log('\n Saldo insuficiente!');
            return false;
        } else if (valorSaque < 0) {
            console.log('\n Valor de Saque inválido.');
        }
        this._saldo -= valorSaque;
        return true;
    }

    /**
     * 
     * @param valorDeposito 
     * @returns 
     */
    public depositar(valorDeposito: number) : boolean {
        if (valorDeposito < 0) {
            console.log('\n Insira um valor válido para depósito.');
            return false;
        }
        this._saldo += valorDeposito;
        return true;
    }

    /**
     * 
     */
    public visualizar() : void {
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }

        console.log(
            "\n\n----------------------------------------------------\n",
            "Dados da Conta:\n",
            "----------------------------------------------------\n",

            `Numero da Conta: ${this._numero}\n`,
            `Agência: ${this._agencia}\n`,
            `Tipo da Conta: ${tipo}\n`,
            `Titular: ${this._titular}\n`,
            `Saldo: ${this._saldo.toFixed(2)}\n`
        );
    }
}