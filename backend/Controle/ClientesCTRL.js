import Cliente from "../Modelo/Clientes.js";
import conectar from "../Persistencia/Conexao.js";

export default class ClienteCTRL {

    async gravar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) {
                
                const { cpf, nome, telefone, celular, endereco, numero, bairro, cidade, uf, cep, email } = requisicao.body;
                console.log(cpf, nome, telefone, celular, endereco, numero, bairro, cidade, uf, cep, email)

                if (cpf && nome && telefone && celular && endereco && numero && bairro && cidade && uf && cep && email) {
                    const cliente = new Cliente(cpf, nome, telefone, celular, endereco, numero, bairro, cidade, uf, cep, email);
                    cliente.gravar(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Cliente gravado com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao gravar o cliente: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Verifique a documentação da API e informe todos os dados necessários de um cliente!"
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
                "mensagem": "Para registrar um cliente utilize o método POST!"
            });
        }
    }

    async atualizar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "PUT") {
            if (requisicao.is("application/json")) {
                const dados = requisicao.body;
                const cliente = new Cliente(
                    dados.cpf,
                    dados.nome,
                    dados.telefone,
                    dados.celular,
                    dados.endereco,
                    dados.numero,
                    dados.bairro,
                    dados.cidade,
                    dados.uf,
                    dados.cep,
                    dados.email
                );
                cliente.codigo = requisicao.params.id;
                try {
                    await cliente.atualizar(conexao);
                    resposta.json({
                        "status": true,
                        "mensagem": "Cliente atualizado com sucesso!"
                    });
                } catch (error) {
                    resposta.json({
                        "status": false,
                        "mensagem": "Erro ao atualizar o cliente: " + error.message
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
                "mensagem": "Para atualizar um cliente utilize o método PUT!"
            });
        }
    }

    async excluir(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");
    
        if (requisicao.method === "DELETE") {
            if (requisicao.is("application/json")) {
                const idCliente = requisicao.params.id; 
    
                if (idCliente) {
                    const cliente = new Cliente();
                    cliente.codigo = idCliente;
                    cliente.excluir(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "Cliente excluído com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao excluir o cliente: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Especifique na URL o ID do cliente que deseja excluir!"
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
                "mensagem": "Para excluir um cliente utilize o método DELETE!"
            });
        }
    }
    

    async consultar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const cliente = new Cliente();
            cliente.consultar(conexao)
                .then((clientes) => {
                    resposta.json(clientes);
                })
                .catch((erro) => {
                    resposta.json({
                        "status": false,
                        "mensagem": "Erro ao consultar clientes: " + erro.message
                    });
                });
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar clientes utilize o método GET!"
            });
        }
    }

    async consultarID(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const { cpf } = requisicao.params;

            if (cpf) {
                const cliente = new Cliente(cpf);
                cliente.consultarID(conexao)
                    .then((clienteConsultado) => {
                        resposta.json(clienteConsultado);
                    })
                    .catch((erro) => {
                        resposta.json({
                            "status": false,
                            "mensagem": "Erro ao consultar cliente por CPF: " + erro.message
                        });
                    });
            } else {
                resposta.json({
                    "status": false,
                    "mensagem": "Especifique na URL o CPF do cliente que deseja consultar!"
                });
            }
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar um cliente por CPF utilize o método GET!"
            });
        }
    }
}
