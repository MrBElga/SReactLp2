import Fornecedor from "../Modelo/Fornecedor.js";
import conectar from "../Persistencia/Conexao.js";

export default class FornecedorCTRL {

    async gravar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) {
                const { cnpj, razaoSocial, nomeFantasia, telefone, email, endereco, numero, bairro, cidade, uf, cep } = requisicao.body;

                if (cnpj && razaoSocial && nomeFantasia && telefone && email && endereco && numero && bairro && cidade && uf && cep) {
                    const fornecedor = new Fornecedor(cnpj, razaoSocial, nomeFantasia, telefone, email, endereco, numero, bairro, cidade, uf, cep);
                    fornecedor.gravar(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Fornecedor gravado com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao gravar o fornecedor: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Verifique a documentação da API e informe todos os dados necessários de um fornecedor!"
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
                "mensagem": "Para registrar um fornecedor utilize o método POST!"
            });
        }
    }

    async atualizar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "PUT") {
            if (requisicao.is("application/json")) {
                const { cnpj } = requisicao.params;
                const { razaoSocial, nomeFantasia, telefone, email, endereco, numero, bairro, cidade, uf, cep } = requisicao.body;

                if (cnpj && razaoSocial && nomeFantasia && telefone && email && endereco && numero && bairro && cidade && uf && cep) {
                    const fornecedor = new Fornecedor(cnpj, razaoSocial, nomeFantasia, telefone, email, endereco, numero, bairro, cidade, uf, cep);
                    fornecedor.atualizar(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Fornecedor atualizado com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao atualizar o fornecedor: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Verifique a documentação da API e informe todos os dados necessários de um fornecedor!"
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
                "mensagem": "Para atualizar um fornecedor utilize o método PUT!"
            });
        }
    }

    async excluir(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "DELETE") {
            if (requisicao.is("application/json")) {
                const { cnpj } = requisicao.params;

                if (cnpj) {
                    const fornecedor = new Fornecedor(cnpj);
                    fornecedor.excluir(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Fornecedor excluído com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao excluir o fornecedor: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Especifique na URL o CNPJ do fornecedor que deseja excluir!"
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
                "mensagem": "Para excluir um fornecedor utilize o método DELETE!"
            });
        }
    }

    async consultar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const fornecedor = new Fornecedor();
            fornecedor.consultar(conexao)
                .then((fornecedores) => {
                    resposta.json(fornecedores);
                })
                .catch((erro) => {
                    resposta.json({
                        "status": false,
                        "mensagem": "Erro ao consultar fornecedores: " + erro.message
                    });
                });
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar fornecedores utilize o método GET!"
            });
        }
    }

    async consultarID(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const { cnpj } = requisicao.params;

            if (cnpj) {
                const fornecedor = new Fornecedor(cnpj);
                fornecedor.consultarID(conexao)
                    .then((fornecedorConsultado) => {
                        resposta.json(fornecedorConsultado);
                    })
                    .catch((erro) => {
                        resposta.json({
                            "status": false,
                            "mensagem": "Erro ao consultar fornecedor por CNPJ: " + erro.message
                        });
                    });
            } else {
                resposta.json({
                    "status": false,
                    "mensagem": "Especifique na URL o CNPJ do fornecedor que deseja consultar!"
                });
            }
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar um fornecedor por CNPJ utilize o método GET!"
            });
        }
    }
}
