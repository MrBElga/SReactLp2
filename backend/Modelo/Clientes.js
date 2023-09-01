import ClientesDAO from "../Resistencia/ClientesDAO.js";

class Clientes {
    #codigo;
    #cpf;
    #nome;
    #endereco;
    #numero;
    #bairro;
    #cidade;
    #uf;
    #cep;
    #email;

    constructor(cpf, nome, endereco, numero, bairro, cidade, uf, cep, email, codigo = 0) {
        this.#codigo = codigo;
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#cep = cep;
        this.#email = email;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            cpf: this.#cpf,
            nome: this.#nome,
            endereco: this.#endereco,
            numero: this.#numero,
            bairro: this.#bairro,
            cidade: this.#cidade,
            uf: this.#uf,
            cep: this.#cep,
            email: this.#email
        };
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(codigo) {
        this.#codigo = codigo;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
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

    toString() {
        return `Cliente - Código: ${this.#codigo}, Nome: ${this.#nome}, CPF: ${this.#cpf}, Endereço: ${this.#endereco}, Número: ${this.#numero}, Bairro: ${this.#bairro}, Cidade: ${this.#cidade}, UF: ${this.#uf}, CEP: ${this.#cep}, Email: ${this.#email}`;
    }

    async gravar() {
        const clientesDAO = new ClientesDAO();
        const id = await clientesDAO.gravar(this);
        this.#codigo = id;
    }

    async atualizar() {
        const clientesDAO = new ClientesDAO();
        await clientesDAO.atualizar(this);
    }

    async excluir() {
        const clientesDAO = new ClientesDAO();
        await clientesDAO.excluir(this);
    }

    async consultar() {
        const clientesDAO = new ClientesDAO();
        return await clientesDAO.consultar(this);
    }

    async consultarID(id) {
        const clientesDAO = new ClientesDAO();
        return await clientesDAO.consultarId(id);
    }
}

export default Clientes;
