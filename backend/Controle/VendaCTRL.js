import Venda from "../Modelo/Venda.js";
import conectar from "../Persistencia/Conexao.js";

export default class VendaCTRL {
  // HTTP POST
  async gravar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");

    if (requisicao.method === "POST") {
      if (requisicao.is("application/json")) {
        const { produto, cliente } = requisicao.body;
        console.log(produto, cliente)
        if (produto && cliente) {

          const venda = new Venda(produto, cliente);

          venda
            .gravar(conexao)
            .then(() => {
              resposta.json({
                status: true,
                mensagem: "Venda registrada com sucesso!",
              });
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao gravar a venda: " + erro.message,
              });
            });
        } else {
          resposta.json({
            status: false,
            mensagem:
              "Verifique a documentação da API e informe todos os dados necessários para registrar uma venda!",
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
        mensagem: "Para registrar uma venda utilize o método POST!",
      });
    }
  }

  // HTTP PUT
  async atualizar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");

    if (requisicao.method === "PUT") {
      if (requisicao.is("application/json")) {
        const { id } = requisicao.params;
        const { produto, cliente } = requisicao.body;
        if (id && produto && cliente) {
          const venda = new Venda(produto, cliente);
          venda.codigo = id;

          venda
            .atualizar(conexao)
            .then(() => {
              resposta.json({
                status: true,
                mensagem: "Venda atualizada com sucesso!",
              });
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao atualizar a venda: " + erro.message,
              });
            });
        } else {
          resposta.json({
            status: false,
            mensagem:
              "Verifique a documentação da API e informe todos os dados necessários para atualizar uma venda!",
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
        mensagem: "Para atualizar uma venda utilize o método PUT!",
      });
    }
  }

  // HTTP DELETE
  async excluir(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");

    if (requisicao.method === "DELETE") {
      if (requisicao.is("application/json")) {
        const { id } = requisicao.params;
        if (id) {
          const venda = new Venda();
          venda.codigo = id;
          console.log(id
            )
          venda
            .excluir(id,conexao)
            .then(() => {
              resposta.json({
                status: true,
                mensagem: "Venda excluída com sucesso!",
              });
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao excluir a venda: " + erro.message,
              });
            });
        } else {
          resposta.json({
            status: false,
            mensagem: "Especifique na URL o ID da venda que deseja excluir!",
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
        mensagem: "Para excluir uma venda utilize o método DELETE!",
      });
    }
  }

  // HTTP GET
  async consultar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    if (requisicao.method === "GET") {
      const vendas = new Venda();
      vendas
        .consultar(conexao)
        .then((listaVendas) => {
          resposta.json({
            status: true,
            listaVendas,
          });
        })
        .catch((erro) => {
          resposta.json({
            status: false,
            mensagem: "Erro ao consultar vendas: " + erro.message,
          });
        });
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar vendas utilize o método GET!",
      });
    }
  }

  // HTTP GET
  async consultarID(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    if (requisicao.method === "GET") {
      const { id } = requisicao.params;
      if (id) {
        const venda = new Venda();
        venda.codigo = id;

        venda
          .consultarID(id, conexao)
          .then((listaVendas) => {
            resposta.json({
              status: true,
              listaVendas,
            });
          })
          .catch((erro) => {
            resposta.json({
              status: false,
              mensagem: "Erro ao consultar venda por ID: " + erro.message,
            });
          });
      } else {
        resposta.json({
          status: false,
          mensagem: "Especifique na URL o ID da venda que deseja consultar!",
        });
      }
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar uma venda por ID utilize o método GET!",
      });
    }
  }

  // HTTP GET
  async consultarA(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    let { id } = requisicao.params;
    if (!id) {
      id = "";
    }

    if (requisicao.method === "GET") {
      const venda = new Venda();
      venda
        .consultarA(id, conexao)
        .then((listaVendas) => {
          resposta.json({
            status: true,
            listaVendas,
          });
        })
        .catch((erro) => {
          resposta.json({
            status: false,
            mensagem: "Erro ao consultar venda por ID: " + erro.message,
          });
        });
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar uma venda por ID utilize o método GET!",
      });
    }
  }
}
