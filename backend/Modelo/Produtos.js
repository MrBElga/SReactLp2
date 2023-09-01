import ProdutoDAO from "../Persistencia/ProdutoDAO.js";

class Produto {
    #codigo;
    #nome;
    #descricao;
    #preco;
    #estoque;
    #fornecedorId;

    constructor(nome, descricao, preco, estoque, fornecedorId, codigo = 0) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#preco = preco;
        this.#estoque = estoque;
        this.#fornecedorId = fornecedorId;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nome: this.#nome,
            descricao: this.#descricao,
            preco: this.#preco,
            estoque: this.#estoque,
            fornecedorId: this.#fornecedorId
        };
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(codigo) {
        this.#codigo = codigo;
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

    get fornecedorId() {
        return this.#fornecedorId;
    }

    set fornecedorId(fornecedorId) {
        this.#fornecedorId = fornecedorId;
    }

    toString() {
        return `Produto - Código: ${this.#codigo}, Nome: ${this.#nome}, Descrição: ${this.#descricao}, Preço: ${this.#preco}`;
    }

    async gravar() {
        const produtoDAO = new ProdutoDAO();
        const id = await produtoDAO.gravar(this);
        this.#codigo = id;
    }

    async atualizar() {
        const produtoDAO = new ProdutoDAO();
        await produtoDAO.atualizar(this);
    }

    async excluir() {
        const produtoDAO = new ProdutoDAO();
        await produtoDAO.excluir(this);
    }

    async consultar() {
        const produtoDAO = new ProdutoDAO();
        return await produtoDAO.consultar(this);
    }

    async consultarID(id) {
        const produtoDAO = new ProdutoDAO();
        return await produtoDAO.consultarID(id);
    }
}

export default Produto;
