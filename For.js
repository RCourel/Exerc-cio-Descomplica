// Classe base Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo); 
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
  }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo); 
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

// Criando instâncias dos funcionários
const funcionario1 = new Gerente('Alice', 45, 'Gerente', 'Recursos Humanos');
const funcionario2 = new Desenvolvedor('Bob', 30, 'Desenvolvedor', 'JavaScript');
const funcionario3 = new Gerente('Carlos', 50, 'Gerente', 'Vendas');
const funcionario4 = new Desenvolvedor('Diana', 28, 'Desenvolvedor', 'Python');
const funcionario5 = new Gerente('Eve', 40, 'Gerente', 'Marketing');
const funcionario6 = new Desenvolvedor('Frank', 35, 'Desenvolvedor', 'Java');
const funcionario7 = new Gerente('Grace', 38, 'Gerente', 'Financeiro');
const funcionario8 = new Desenvolvedor('Hannah', 29, 'Desenvolvedor', 'C++');

// Chamando os métodos para cada funcionário
funcionario1.seApresentar();
funcionario1.gerenciar();
console.log();

funcionario2.seApresentar();
funcionario2.programar();
console.log();

funcionario3.seApresentar();
funcionario3.gerenciar();
console.log();

funcionario4.seApresentar();
funcionario4.programar();
console.log();

funcionario5.seApresentar();
funcionario5.gerenciar();
console.log();

funcionario6.seApresentar();
funcionario6.programar();
console.log();

funcionario7.seApresentar();
funcionario7.gerenciar();
console.log();

funcionario8.seApresentar();
funcionario8.programar();
console.log();
