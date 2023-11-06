import Admin from "../Modelo/Admin.js";
import conectar from "../Persistencia/Conexao.js";

export default class AdminCTRL {

    async gravar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) {
                
                const {nome,senha,prior } = requisicao.body;
                console.log(nome,senha,prior)

                if (nome && senha &&prior) {
                    const adm = new Admin(nome,senha,prior);
                    adm.gravar(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "adm gravado com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao gravar o adm: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Verifique a documentação da API e informe todos os dados necessários de um adm!"
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
                "mensagem": "Para registrar um adm utilize o método POST!"
            });
        }
    }

    async atualizar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");

        if (requisicao.method === "PUT") {
            if (requisicao.is("application/json")) {
                const dados = requisicao.body;
                const adm = new Admin(
                    dados.nome,
                    dados.senha,
                    dados.prior
                );
                adm.codigo = requisicao.params.id;
                try {
                    await adm.atualizar(conexao);
                    resposta.json({
                        "status": true,
                        "mensagem": "adm atualizado com sucesso!"
                    });
                } catch (error) {
                    resposta.json({
                        "status": false,
                        "mensagem": "Erro ao atualizar o adm: " + error.message
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
                "mensagem": "Para atualizar um adm utilize o método PUT!"
            });
        }
    }

    async excluir(requisicao, resposta) {
        const conexao = await conectar();
        resposta.setHeader("Content-Type", "application/json");
    
        if (requisicao.method === "DELETE") {
            if (requisicao.is("application/json")) {
                const idadm = requisicao.params.id; 
    
                if (idadm) {
                    const adm = new Admin();
                    adm.codigo = idadm;
                    adm.excluir(conexao)
                        .then(() => {
                            resposta.json({
                                "status": true,
                                "mensagem": "adm excluído com sucesso!"
                            });
                        })
                        .catch((erro) => {
                            resposta.json({
                                "status": false,
                                "mensagem": "Erro ao excluir o adm: " + erro.message
                            });
                        });
                } else {
                    resposta.json({
                        "status": false,
                        "mensagem": "Especifique na URL o ID do adm que deseja excluir!"
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
                "mensagem": "Para excluir um adm utilize o método DELETE!"
            });
        }
    }
    

    async consultar(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const adm = new Admin();
            adm.consultar(conexao)
                .then((adms) => {
                    resposta.json(adms);
                })
                .catch((erro) => {
                    resposta.json({
                        "status": false,
                        "mensagem": "Erro ao consultar adms: " + erro.message
                    });
                });
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar adms utilize o método GET!"
            });
        }
    }

    async consultarID(requisicao, resposta) {
        const conexao = await conectar();
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const { nome } = requisicao.params;

            if (npme) {
                const adm = new Admin(nome);
                adm.consultarID(conexao)
                    .then((admConsultado) => {
                        resposta.json(admConsultado);
                    })
                    .catch((erro) => {
                        resposta.json({
                            "status": false,
                            "mensagem": "Erro ao consultar adm por CPF: " + erro.message
                        });
                    });
            } else {
                resposta.json({
                    "status": false,
                    "mensagem": "Especifique na URL o CPF do adm que deseja consultar!"
                });
            }
        } else {
            resposta.json({
                "status": false,
                "mensagem": "Para consultar um adm por CPF utilize o método GET!"
            });
        }
    }
}
