function Funcionario(nome, funcao, salario) {
    this.nome = nome;
    this.funcao = funcao;
    this._salario = salario;

    this.getsalario = function() {
        return this._salario;
    }
    
    this.setsalario = function(valor) {
        if (typeof valor === 'number') {
            this._salario = valor;
        }
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000)

    this.aumento = function () {
        const novoSalario = this.getsalario() * 1.07;
        this.setsalario(novoSalario);
    }
}

function funcionarioNormal(nome) {
    Funcionario.call(this, nome, "Funcionario", 5000)

    this.aumento = function () {
        const novoSalario = this.getsalario() * 1.10;
        this.setsalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000)

    this.aumento = function () {
        const novoSalario = this.getsalario() * 1.15;
        this.setsalario(novoSalario);
    }
}

function CEO(nome) {
    Funcionario.call(this, nome, "CEO", 20000)

    this.aumento = function () {
        const novoSalario = this.getsalario() * 1.20;
        this.setsalario(novoSalario);
    }
}

const Funcionario1 = new Estagiario("Pedro");
const Funcionario2 = new funcionarioNormal("Maria");
const Funcionario3 = new Gerente("Paula");
const Funcionario4 = new CEO("Marta");

Funcionario1.aumento();
console.log(Funcionario1.getsalario());
Funcionario2.aumento();
console.log(Funcionario2.getsalario());
Funcionario3.aumento();
console.log(Funcionario3.getsalario());
Funcionario4.aumento();
console.log(Funcionario4.getsalario());