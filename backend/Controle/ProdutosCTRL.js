import Produto from "../Modelo/Produtos.js";
import conectar from "../Persistencia/Conexao.js";

export default class ProdutoCTRL {

    async gravar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) {
                const {nome, descricao, preco, estoque,fornecedorId } = requisicao.body;

                if (nome && descricao && preco && estoque && fornecedorId) {
                    const produto = new Produto(nome, descricao, preco, estoque,fornecedorId);
                    produto.gravar(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Produto gravado com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao gravar o produto: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Verifique a documentação da API e informe todos os dados necessários de um produto!"
                    });
                }
            } else {
                resposta.json({
                    "status": false,
                    "mensagem": "A requisição deve possuir um payload application/json"
                });
            }
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para registrar um produto utilize o método POST!"
            });
        }
    }

    async atualizar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "PUT") {
            if (requisicao.is("application/json")) {
                const { id } = requisicao.params;
                const { nome, descricao, preco, estoque,fornecedor_id } = requisicao.body;

                if (id && nome && descricao && preco && estoque && fornecedor_id ) {
                    const produto = new Produto( nome, descricao, preco, estoque,fornecedor_id);
                    produto.codigo = id;
                    produto.atualizar(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Produto atualizado com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao atualizar o produto: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Verifique a documentação da API e informe todos os dados necessários de um produto!"
                    });
                }
            } else {
                resposta.json({
                    "status": false,
                    "mensagem": "A requisição deve possuir um payload application/json"
                });
            }
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para atualizar um produto utilize o método PUT!"
            });
        }
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
