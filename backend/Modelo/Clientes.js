import ClientesDAO from "../Persistencia/ClientesDAO.js";

class Clientes {
  #cli_codigo;
  #cli_cpf;
  #cli_nome;
  #cli_endereco;
  #cli_numero;
  #cli_bairro;
  #cli_cidade;
  #cli_uf;
  #cli_cep;
  #cli_email;
  #cli_prior;

  constructor(
    cli_cpf='',
    cli_nome='',
    cli_endereco='',
    cli_numero='',
    cli_bairro='',
    cli_cidade='',
    cli_uf='',
    cli_cep='',
    cli_email='',
    cli_prior='',
    cli_codigo = 0
  ) {
    //console.log(cli_cpf, cli_nome, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, cli_prior, cli_codigo);

    this.#cli_codigo = cli_codigo;
    this.#cli_cpf = cli_cpf;
    this.#cli_nome = cli_nome;
    this.#cli_endereco = cli_endereco;
    this.#cli_numero = cli_numero;
    this.#cli_bairro = cli_bairro;
    this.#cli_cidade = cli_cidade;
    this.#cli_uf = cli_uf;
    this.#cli_cep = cli_cep;
    this.#cli_email = cli_email;
    this.#cli_prior = cli_prior;
  }

  toJSON() {
    return {
      cli_codigo: this.#cli_codigo,
      cli_cpf: this.#cli_cpf,
      cli_nome: this.#cli_nome,
      cli_endereco: this.#cli_endereco,
      cli_numero: this.#cli_numero,
      cli_bairro: this.#cli_bairro,
      cli_cidade: this.#cli_cidade,
      cli_uf: this.#cli_uf,
      cli_cep: this.#cli_cep,
      cli_email: this.#cli_email,
      cli_prior: this.#cli_prior,
    };
  }

  get cli_codigo() {
    return this.#cli_codigo;
  }

  set cli_codigo(cli_codigo) {
    if (cli_codigo > 0) this.#cli_codigo = cli_codigo;
  }

  get cli_cpf() {
    return this.#cli_cpf;
  }

  set cli_cpf(cli_cpf) {
    this.#cli_cpf = cli_cpf;
  }

  get cli_nome() {
    return this.#cli_nome;
  }

  set cli_nome(cli_nome) {
    this.#cli_nome = cli_nome;
  }

  get cli_endereco() {
    return this.#cli_endereco;
  }

  set cli_endereco(cli_endereco) {
    this.#cli_endereco = cli_endereco;
  }

  get cli_numero() {
    return this.#cli_numero;
  }

  set cli_numero(cli_numero) {
    this.#cli_numero = cli_numero;
  }

  get cli_bairro() {
    return this.#cli_bairro;
  }

  set cli_bairro(cli_bairro) {
    this.#cli_bairro = cli_bairro;
  }

  get cli_cidade() {
    return this.#cli_cidade;
  }

  set cli_cidade(cli_cidade) {
    this.#cli_cidade = cli_cidade;
  }

  get cli_uf() {
    return this.#cli_uf;
  }

  set cli_uf(cli_uf) {
    this.#cli_uf = cli_uf;
  }

  get cli_cep() {
    return this.#cli_cep;
  }

  set cli_cep(cli_cep) {
    this.#cli_cep = cli_cep;
  }

  get cli_email() {
    return this.#cli_email;
  }

  set cli_email(cli_email) {
    this.#cli_email = cli_email;
  }
  get cli_prior() {
    return this.#cli_prior;
  }

  set cli_prior(cli_prior) {
    this.#cli_prior = cli_prior;
  }

  toString() {
    return `Cliente - Código: ${this.#cli_codigo}, cli_nome: ${this.#cli_nome}, cli_cpf: ${
      this.#cli_cpf
    }, Endereço: ${
      this.#cli_endereco
    }, Número: ${this.#cli_numero}, cli_bairro: ${this.#cli_bairro}, cli_cidade: ${
      this.#cli_cidade
    }, cli_uf: ${this.#cli_uf}, cli_cep: ${this.#cli_cep}, cli_email: ${this.#cli_email}, cli_prior: ${
      this.#cli_prior
    }`;
  }
  

  async gravar(conexao) {
    const clientesDAO = new ClientesDAO();

    const id = await clientesDAO.gravar(this, conexao);
    this.#cli_codigo = id;
  }

  async atualizar(conexao) {
    const clientesDAO = new ClientesDAO();
    await clientesDAO.atualizar(this, conexao);

  }

  async excluir(id,conexao) {
    const clientesDAO = new ClientesDAO();
    await clientesDAO.excluir(id, conexao);
  }

  async consultar(conexao) {
    const clientesDAO = new ClientesDAO();
    return await clientesDAO.consultar(conexao);
  }

  async consultarId(id, conexao) {
    const clientesDAO = new ClientesDAO();
    return await clientesDAO.consultarId(id, conexao);
  }
}

export default Clientes;
