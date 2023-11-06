import AdminDAO from "../Persistencia/AdminDAO.js"

class Admin{
    #codigo;
    #nome;
    #senha;
    #prior;

    constructor(nome, senha, prior, codigo = 0){
        this.#codigo = codigo;
        this.#nome = nome;
        this.#senha = senha;
        this.#prior = prior;
    }

    toJSON(){
        return {
            codigo: this.#codigo,
            nome: this.#nome ,
            senha: this.#senha,
            prior: this.#prior
        };
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(cod){
        if(cod>0)
            this.#codigo = cod;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get senha(){
        return this.#senha;
    }

    set senha(senha){
        this.#senha = senha;
    }

    get prior(){
        return this.#prior;
    }

    set prior(prior){
        this.#prior = prior;
    }

    async gravar(conexao) {
        const adminDAO = new AdminDAO();
        const id = await adminDAO.gravar(this,conexao); 
        this.#codigo = id;
    }

    async atualizar(conexao) {
        const adminDAO = new AdminDAO();
        await adminDAO.atualizar(this,conexao);
    }

    async excluir(conexao) {
        const adminDAO = new AdminDAO();
        await adminDAO.excluir(this,conexao); 
    }

    async consultar(conexao) {
        const adminDAO = new AdminDAO();
        return await adminDAO.consultar(conexao); 
    }

    async consultarID(id,conexao) {
        const adminDAO = new AdminDAO();
        return await adminDAO.consultarId(id,conexao);
    }
}
export default Admin;