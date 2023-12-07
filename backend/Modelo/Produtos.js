import ProdutoDAO from "../Persistencia/ProdutosDAO.js";

class Produto {
  #codigo;
  #nome;
  #descricao;
  #preco;
  #estoque;
  #categoria;

  constructor(nome, descricao, preco, estoque, categoria, codigo = 0) {
    this.#codigo = codigo;
    this.#nome = nome;
    this.#descricao = descricao;
    this.#preco = preco;
    this.#estoque = estoque;
    this.#categoria = categoria;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      nome: this.#nome,
      descricao: this.#descricao,
      preco: this.#preco,
      estoque: this.#estoque,
      categoria: this.#categoria,
    };
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(codigo) {
    if (codigo > 0) this.#codigo = codigo;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get descricao() {
    return this.#descricao;
  }

  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get preco() {
    return this.#preco;
  }

  set preco(preco) {
    this.#preco = preco;
  }

  get estoque() {
    return this.#estoque;
  }

  set estoque(estoque) {
    this.#estoque = estoque;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  toString() {
    return `Produto - Código: ${this.#codigo}, Nome: ${
      this.#nome
    }, Descrição: ${this.#descricao}, Preço: ${this.#preco}`;
  }

  async gravar(conexao) {
    try {
      const produtoDAO = new ProdutoDAO();
    const id = await produtoDAO.gravar(this, conexao);
    this.#codigo = id;
    } catch (error) {
      console.log(error)
    }
    
  }

  async atualizar(conexao) {
    const produtoDAO = new ProdutoDAO();
    await produtoDAO.atualizar(this,conexao);
  }

  async excluir(conexao) {
    const produtoDAO = new ProdutoDAO();
    await produtoDAO.excluir(this, conexao);
  }

  async consultar(conexao) {
    const produtoDAO = new ProdutoDAO();
    return await produtoDAO.consultar(conexao);
  }

  async consultarID(id, conexao) {
    const produtoDAO = new ProdutoDAO();
    return await produtoDAO.consultarID(id, conexao);
  }

  async consultarA(termo,conexao) {
    const produtoDAO = new ProdutoDAO();
    return await produtoDAO.consultarA(termo,conexao);
  }
}

export default Produto;
