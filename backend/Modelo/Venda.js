import VendaDAO from "../Persistencia/VendaDAO.js"

class Venda {
    #codigo;
    #produto;
    #cliente;
  
    constructor(produto, cliente, codigo = 0) {
      this.#codigo = codigo;
      this.#produto = produto;
      this.#cliente = cliente;
    }
  
    toJSON() {
      return {
        codigo: this.#codigo,
        produto: this.#produto.toJSON(),
        cliente: this.#cliente.toJSON(),
      };
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      if (codigo > 0) this.#codigo = codigo;
    }
  
    get produto() {
      return this.#produto;
    }
  
    set produto(produto) {
      this.#produto = produto;
    }
  
    get cliente() {
      return this.#cliente;
    }
  
    set cliente(cliente) {
      this.#cliente = cliente;
    }

    async gravar(conexao) {
        try {
          const vendaDAO = new VendaDAO();
          const id = await vendaDAO.gravar(this, conexao);
          this.#codigo = id;
        } catch (error) {
          console.log(error);
        }
      }
    
      async atualizar(conexao) {
        const vendaDAO = new VendaDAO();
        await vendaDAO.atualizar(this, conexao);
      }
    
      async excluir(id,conexao) {
        const vendaDAO = new VendaDAO();
        await vendaDAO.excluir(id, conexao);
      }
    
      async consultar(conexao) {
        const vendaDAO = new VendaDAO();
        return await vendaDAO.consultar(conexao);
      }
    
      async consultarID(id, conexao) {
        const vendaDAO = new VendaDAO();
        return await vendaDAO.consultarID(id, conexao);
      }
    
 
  }
  
  export default Venda;
  