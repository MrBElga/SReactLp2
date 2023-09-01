import Fornecedor from "../Modelo/Fornecedor.js";
import conectar from "../Persistencia/Conexao.js";

export default class FornecedorCTRL {
    async gravar(requisicao, resposta) {
        const conexao =  conectar();
       
      }
    
      // HTTP PUT
      async atualizar(requisicao, resposta) {
        const conexao = await conectar();
       
    }
    
      // HTTP DELETE
      async excluir(requisicao, resposta) {
        const conexao = await conectar();
        
      }
    
      // HTTP GET
      async consultar(requisicao, resposta) {
        const conexao = await conectar();
        
      }
    
      // HTTP GET
      async consultarID(requisicao, resposta) {
        const conexao = await conectar();
        
      }

}