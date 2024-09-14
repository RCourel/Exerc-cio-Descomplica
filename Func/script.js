// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando.`;
    }
  }
  
  // Classe Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  // Classe Desenvolvedor que herda de Funcionario
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  // Função para exibir erros
  function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
  }
  
  // Função para adicionar funcionários
  function adicionarFuncionario() {
    try {
      const nome = document.getElementById('nome').value.trim();
      const idade = parseInt(document.getElementById('idade').value.trim());
      const cargo = document.getElementById('cargo').value.trim();
      const departamento = document.getElementById('departamento').value.trim();
      const linguagem = document.getElementById('linguagem').value.trim();
  
      if (!nome || isNaN(idade) || idade <= 0 || !cargo) {
        throw new Error('Todos os campos obrigatórios devem ser preenchidos corretamente.');
      }
  
      let funcionario;
      if (departamento) {
        funcionario = new Gerente(nome, idade, cargo, departamento);
      } else if (linguagem) {
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
      } else {
        throw new Error('Para criar um funcionário, forneça um departamento (para Gerente) ou uma linguagem de programação (para Desenvolvedor).');
      }
  
      const informacoes = `
        ${funcionario.seApresentar()}
        ${departamento ? funcionario.gerenciar() : funcionario.programar()}
      `;
      document.getElementById('informacoes').textContent = informacoes;
      document.getElementById('erro').textContent = '';
  
    } catch (error) {
      exibirErro(error.message);
    }
  }