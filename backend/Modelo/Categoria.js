import CategoriaDAO from "../Persistencia/CategoriaDAO.js";

class Categoria {
  #codigo;
  #nomeCategoria;
  #descricao;

  constructor(nomeCategoria='', descricao='', codigo = 0) {
    this.#codigo = codigo;
    this.#nomeCategoria = nomeCategoria;
    this.#descricao = descricao;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      nomeCategoria: this.#nomeCategoria,
      descricao: this.#descricao,
    };
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(codigo) {
    if (codigo > 0) this.#codigo = codigo;
  }

  get nomeCategoria() {
    return this.#nomeCategoria;
  }

  set nomeCategoria(nomeCategoria) {
    this.#nomeCategoria = nomeCategoria;
  }

  get descricao() {
    return this.#descricao;
  }

  set descricao(descricao) {
    this.#descricao = descricao;
  }

  toString() {
    return this.#nomeCategoria + " " + this.#descricao + " " + this.#codigo;
  }

  async gravar(conexao) {
    try {
      const categoriaDAO = new CategoriaDAO();
      const id = await categoriaDAO.gravar(this, conexao);
      this.#codigo = id;
    } catch (error) {
      console.log(error)
    }
    
  }

  async atualizar(conexao) {
    try {
      const categoriaDAO = new CategoriaDAO();
      await categoriaDAO.atualizar(this, conexao);
    } catch (error) {
      console.log(error)
    }
   
  }

  async excluir(conexao) {
    const categoriaDAO = new CategoriaDAO();
    await categoriaDAO.excluir(this, conexao);
  }

  async consultar(conexao) {
    const categoriaDAO = new CategoriaDAO();
    return await categoriaDAO.consultar(conexao);
  }

  async consultarID(id, conexao) {
    const categoriaDAO = new CategoriaDAO();
    return await categoriaDAO.consultarId(id, conexao);
  }
}

export default Categoria;
