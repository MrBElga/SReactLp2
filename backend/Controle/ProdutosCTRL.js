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

    async excluir(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "DELETE") {
            if (requisicao.is("application/json")) {
                const { id } = requisicao.params;

                if (id) {
                    const produto = new Produto();
                    produto.codigo = id;
                    produto.excluir(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Produto excluído com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao excluir o produto: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Especifique na URL o código do produto que deseja excluir!"
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
                "mensagem": "Para excluir um produto utilize o método DELETE!"
            });
        }
    }

    async consultar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const produto = new Produto();
            produto.consultar(conexao)
                .then((produtos) => {
                    resposta.json(produtos);
                })
                .catch((erro) => {
                    resposta.json({
                        "status": false,
                        "mensagem": "Erro ao consultar produtos: " + erro.message
                    });
                });
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar produtos utilize o método GET!"
            });
        }
    }

    async consultarID(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const { codigo } = requisicao.params;

            if (codigo) {
                const produto = new Produto(codigo);
                produto.consultarID(conexao)
                    .then((produtoConsultado) => {
                        resposta.json(produtoConsultado);
                    })
                    .catch((erro) => {
                        resposta.json({
                            "status": false,
                            "mensagem": "Erro ao consultar produto por código: " + erro.message
                        });
                    });
            } else {
                resposta.json({
                    "status": false,
                    "mensagem": "Especifique na URL o código do produto que deseja consultar!"
                });
            }
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar um produto por código utilize o método GET!"
            });
        }
    }
}
