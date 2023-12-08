import Cliente from "../Modelo/Clientes.js";
import conectar from "../Persistencia/Conexao.js";

export default class ClienteCTRL {
  async gravar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");

    if (requisicao.method === "POST") {
      if (requisicao.is("application/json")) {
        const {
          cli_cpf,
          cli_nome,
          cli_endereco,
          cli_numero,
          cli_bairro,
          cli_cidade,
          cli_uf,
          cli_cep,
          cli_email,
        } = requisicao.body;
        console.log(
          cli_cpf,
          cli_nome,
          cli_endereco,
          cli_numero,
          cli_bairro,
          cli_cidade,
          cli_uf,
          cli_cep,
          cli_email
        );
        const cli_prior = 3;
        if (
          cli_cpf &&
          cli_nome &&
          cli_endereco &&
          cli_numero &&
          cli_bairro &&
          cli_cidade &&
          cli_uf &&
          cli_cep &&
          cli_email &&
          cli_prior
        ) {
          const cliente = new Cliente(
            cli_cpf,
            cli_nome,
            cli_endereco,
            cli_numero,
            cli_bairro,
            cli_cidade,
            cli_uf,
            cli_cep,
            cli_email,
            cli_prior
          );
          cliente
            .gravar(conexao)
            .then((cliente) => {
              resposta.json({
                status: true,
                codigoGerdao: cliente.cli_codigo,
                mensagem: "Cliente gravado com sucesso!",
              });
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao gravar o cliente: " + erro.message,
              });
            });
        } else {
          resposta.json({
            status: false,
            mensagem:
              "Verifique a documentação da API e informe todos os dados necessários de um cliente!",
          });
        }
      } else {
        resposta.json({
          status: false,
          mensagem: "A requisição deve possuir um payload application/json",
        });
      }
    } else {
      resposta.json({
        status: false,
        mensagem: "Para registrar um cliente utilize o método POST!",
      });
    }
  }

  async atualizar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");

    if (requisicao.method === "PUT") {
      if (requisicao.is("application/json")) {
        const { body, params } = requisicao;
        const { id } = params;
        const cli_prior = 3;

        const {
          cli_cpf,
          cli_nome,
          cli_endereco,
          cli_numero,
          cli_bairro,
          cli_cidade,
          cli_uf,
          cli_cep,
          cli_email,
        } = body;
        if (
          cli_cpf &&
          cli_nome &&
          cli_endereco &&
          cli_numero &&
          cli_bairro &&
          cli_cidade &&
          cli_uf &&
          cli_cep &&
          cli_email
        ) {
          const cliente = new Cliente(
            cli_cpf,
            cli_nome,
            cli_endereco,
            cli_numero,
            cli_bairro,
            cli_cidade,
            cli_uf,
            cli_cep,
            cli_email,
            cli_prior
          );
      

          cliente.cli_codigo = id;

          try {
            await cliente.atualizar(conexao);
            resposta.json({
              status: true,
              cliente,
              mensagem: "Cliente atualizado com sucesso!",
            });
          } catch (error) {
            resposta.json({
              status: false,
              mensagem: "Erro ao atualizar o cliente: " + error.message,
            });
          }
        } else {
          resposta.json({
            status: false,
            mensagem:
              "Verifique a documentação da API e informe todos os dados necessários de uma categoria!",
          });
        }
      } else {
        resposta.json({
          status: false,
          mensagem: "A requisição deve possuir um payload application/json",
        });
      }
    } else {
      resposta.json({
        status: false,
        mensagem: "Para atualizar um cliente utilize o método PUT!",
      });
    }
  }

  async excluir(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");

    if (requisicao.method === "DELETE") {
      if (requisicao.is("application/json")) {
        const id = requisicao.params.id;
        console.log(id);
        if (id) {
          const cliente = new Cliente();
          cliente
            .excluir(id,conexao)
            .then(() => {
              resposta.json({
                status: true,
                cliente,
                mensagem: "Cliente excluído com sucesso!",
              });
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao excluir o cliente: " + erro.message,
              });
            });
        } else {
          resposta.json({
            status: false,
            mensagem: "Especifique na URL o ID do cliente que deseja excluir!",
          });
        }
      } else {
        resposta.json({
          status: false,
          mensagem: "A requisição deve possuir um payload application/json",
        });
      }
    } else {
      resposta.json({
        status: false,
        mensagem: "Para excluir um cliente utilize o método DELETE!",
      });
    }
  }

  async consultar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    if (requisicao.method === "GET") {
      const cliente = new Cliente();
      cliente
        .consultar(conexao)
        .then((listaClientes) => {
          resposta.json({
            status: true,
            listaClientes,
          });
        })
        .catch((erro) => {
          resposta.json({
            status: false,
            mensagem: "Erro ao consultar clientes: " + erro.message,
          });
        });
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar clientes utilize o método GET!",
      });
    }
  }

  async consultarID(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    if (requisicao.method === "GET") {
      const { id } = requisicao.params;

      if (id) {
        const cliente = new Cliente(id);
        cliente
          .consultarId(id, conexao)
          .then((clienteConsultado) => {
            resposta.json(clienteConsultado);
          })
          .catch((erro) => {
            resposta.json({
              status: false,
              mensagem: "Erro ao consultar cliente por id: " + erro.message,
            });
          });
      } else {
        resposta.json({
          status: false,
          mensagem: "Especifique na URL o id do cliente que deseja consultar!",
        });
      }
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar um cliente por id utilize o método GET!",
      });
    }
  }
}
