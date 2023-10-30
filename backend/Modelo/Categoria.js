import CategoriaDAO from "../Persistencia/CategoriaDAO.js";

class Categoria {
    #codigo;
    #nome;
    #descricao;

    constructor(nome, descricao, codigo = 0) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#descricao = descricao;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nome: this.#nome,
            descricao: this.#descricao
        };
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(Cod) {
        if (Cod > 0) 
            this.#codigo = Cod;
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

    set descricao(desc) {
        this.#descricao = desc;
    }

    toString() {
        return this.#nome + " " + this.#descricao + " " + this.#codigo;
    }

    async gravar(conexao) {
        const categoriaDAO = new CategoriaDAO();
        const id = await categoriaDAO.gravar(this,conexao); 
        this.#codigo = id;
    }

    async atualizar(conexao) {
        const categoriaDAO = new CategoriaDAO();
        await categoriaDAO.atualizar(this,conexao);
    }

    async excluir(conexao) {
        const categoriaDAO = new CategoriaDAO();
        await categoriaDAO.excluir(this,conexao); 
    }

    async consultar(conexao) {
        const categoriaDAO = new CategoriaDAO();
        return await categoriaDAO.consultar(conexao); 
    }

    async consultarID(id,conexao) {
        const categoriaDAO = new CategoriaDAO();
        return await categoriaDAO.consultarId(id,conexao);
    }
}

export default Categoria;
