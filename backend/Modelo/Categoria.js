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

    async gravar() {
        const categoriaDAO = new CategoriaDAO();
        const id = await categoriaDAO.gravar(this); 
        this.#codigo = id;
    }

    async atualizar() {
        const categoriaDAO = new CategoriaDAO();
        await categoriaDAO.atualizar(this);
    }

    async excluir() {
        const categoriaDAO = new CategoriaDAO();
        await categoriaDAO.excluir(this); 
    }

    async consultar() {
        const categoriaDAO = new CategoriaDAO();
        return await categoriaDAO.consultar(this); 
    }

    async consultarID(id) {
        const categoriaDAO = new CategoriaDAO();
        return await categoriaDAO.consultarId(id);
    }
}

export default Categoria;
