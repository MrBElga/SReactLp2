import ClientesDAO from "../Persistencia/ClientesDAO.js";

class Clientes {
    #codigo;
    #cpf;
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

    constructor(cpf, nome, telefone, celular, endereco, numero, bairro, cidade, uf, cep, email, codigo = 0) {
        this.#codigo = codigo;
        this.#cpf = cpf;
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
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            cpf: this.#cpf,
            nome: this.#nome,
            telefone: this.#telefone,
            celular: this.#celular,
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

    toString() {
        return `Cliente - Código: ${this.#codigo}, Nome: ${this.#nome}, CPF: ${this.#cpf}, Telefone: ${this.#telefone}, Celular: ${this.#celular}, Endereço: ${this.#endereco}, Número: ${this.#numero}, Bairro: ${this.#bairro}, Cidade: ${this.#cidade}, UF: ${this.#uf}, CEP: ${this.#cep}, Email: ${this.#email}`;
    }

    async gravar(conexao) {
        const clientesDAO = new ClientesDAO();
      
        const id = await clientesDAO.gravar(this,conexao);
        this.#codigo = id;
    }

    async atualizar(conexao) {
        const clientesDAO = new ClientesDAO();
        await clientesDAO.atualizar(this,conexao);
        console.log(this)
    }

    async excluir(conexao) {
        const clientesDAO = new ClientesDAO();
        await clientesDAO.excluir(this,conexao);
    }

    async consultar(conexao) {
        
        const clientesDAO = new ClientesDAO();
        return await clientesDAO.consultar(conexao);
    }

    async consultarID(id,conexao) {
        const clientesDAO = new ClientesDAO();
        return await clientesDAO.consultarId(id,conexao);
    }
}

export default Clientes;
