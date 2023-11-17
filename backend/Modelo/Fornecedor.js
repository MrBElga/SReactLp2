import FornecedorDAO from "../Persistencia/FornecedoresDAO.js";

class Fornecedor {
  #codigo;
  #cnpj;
  #nome;
  #telefone;
  #celular;
  #endereco;
  #numero;
  #bairro;
  #cidade;
  #uf;
  #cep;
  #email;
  #prior;

  constructor(
    cnpj,
    nome,
    telefone,
    celular,
    endereco,
    numero,
    bairro,
    cidade,
    uf,
    cep,
    email,
    prior,
    codigo = 0,
  ) {
    this.#codigo = codigo;
    this.#cnpj = cnpj;
    this.#nome = nome;
    this.#telefone = telefone;
    this.#celular = celular;
    this.#endereco = endereco;
    this.#numero = numero;
    this.#bairro = bairro;
    this.#cidade = cidade;
    this.#uf = uf;
    this.#cep = cep;
    this.#email = email;
    this.#prior = prior;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      cnpj: this.#cnpj,
      nome: this.#nome,
      telefone: this.#telefone,
      celular: this.#celular,
      endereco: this.#endereco,
      numero: this.#numero,
      bairro: this.#bairro,
      cidade: this.#cidade,
      uf: this.#uf,
      cep: this.#cep,
      email: this.#email,
      prior: this.#prior,
    };
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(codigo) {
    if (codigo > 0) this.#codigo = codigo;
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(cnpj) {
    this.#cnpj = cnpj;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get telefone() {
    return this.#telefone;
  }

  set telefone(telefone) {
    this.#telefone = telefone;
  }

  get celular() {
    return this.#celular;
  }

  set celular(celular) {
    this.#celular = celular;
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(endereco) {
    this.#endereco = endereco;
  }

  get numero() {
    return this.#numero;
  }

  set numero(numero) {
    this.#numero = numero;
  }

  get bairro() {
    return this.#bairro;
  }

  set bairro(bairro) {
    this.#bairro = bairro;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(cidade) {
    this.#cidade = cidade;
  }

  get uf() {
    return this.#uf;
  }

  set uf(uf) {
    this.#uf = uf;
  }

  get cep() {
    return this.#cep;
  }

  set cep(cep) {
    this.#cep = cep;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }

  get prior() {
    return this.#prior;
  }

  set prior(prior) {
    this.#prior = prior;
  }

  toString() {
    return `Fornecedor - Código: ${this.#codigo}, Nome: ${this.#nome}, cnpj: ${
      this.#cnpj
    }, Email: ${this.#email}`;
  }

  async gravar(conexao) {
    const fornecedorDAO = new FornecedorDAO();
    const id = await fornecedorDAO.gravar(this, conexao);
    this.#codigo = id;
  }

  async atualizar(conexao) {
    const fornecedorDAO = new FornecedorDAO();
    await fornecedorDAO.atualizar(this, conexao);
  }

  async excluir(conexao) {
    const fornecedorDAO = new FornecedorDAO();
    await fornecedorDAO.excluir(this, conexao);
  }

  async consultar(conexao) {
    const fornecedorDAO = new FornecedorDAO();
    return await fornecedorDAO.consultar(conexao);
  }

  async consultarID(id, conexao) {
    const fornecedorDAO = new FornecedorDAO();
    return await fornecedorDAO.consultarID(id, conexao);
  }
}

export default Fornecedor;
