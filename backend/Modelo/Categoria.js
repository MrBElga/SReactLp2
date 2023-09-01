import CategoriaDAO from "../Resistencia/CategoriaDAO.js";

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
        if (Cod > 0) // Corrigido para Cod
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
        const id = await categoriaDAO.gravar(this); // Corrigido para passar a instância atual
        this.#codigo = id;
    }

    async atualizar() {
        const categoriaDAO = new CategoriaDAO();
        await categoriaDAO.atualizar(this); // Corrigido para passar a instância atual
    }

    async excluir() {
        const categoriaDAO = new CategoriaDAO();
        await categoriaDAO.excluir(this); // Corrigido para passar a instância atual
    }

    async consultar() {
        const categoriaDAO = new CategoriaDAO();
        return await categoriaDAO.consultar(this); // Corrigido para passar a instância atual
    }

    async consultarID(id) {
        const categoriaDAO = new CategoriaDAO();
        return await categoriaDAO.consultarId(id);
    }
}

export default Categoria;
