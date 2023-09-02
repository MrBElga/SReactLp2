import ProdutoDAO from "../Persistencia/ProdutosDAO.js";

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

    async gravar(conexao) {
        const produtoDAO = new ProdutoDAO();
        const id = await produtoDAO.gravar(this,conexao);
        this.#codigo = id;
    }

    async atualizar(conexao) {
        const produtoDAO = new ProdutoDAO();
        await produtoDAO.atualizar(this,conexao);
    }

    async excluir(conexao) {
        const produtoDAO = new ProdutoDAO();
        await produtoDAO.excluir(this,conexao);
    }

    async consultar(conexao) {
        const produtoDAO = new ProdutoDAO();
        return await produtoDAO.consultar(conexao);
    }

    async consultarID(id,conexao) {
        const produtoDAO = new ProdutoDAO();
        return await produtoDAO.consultarID(id),conexao;
    }
}

export default Produto;
