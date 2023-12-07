import Categoria from "../Modelo/Categoria.js";
import conectar from "../Persistencia/Conexao.js";

export default class CategoriaCTRL {
  async gravar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");
    if (requisicao.method === "POST" && requisicao.is("application/json")) {
      const dados = requisicao.body;

      if (dados.cat_nome && dados.cat_descricao) {
   
        const categoria = new Categoria(dados.cat_nome,dados.cat_descricao,0);
        //resolver a promise
   
        categoria
          .gravar(conexao)
          .then(() => {
            resposta.status(200).json({
              status: true,
              codigoGerado: categoria.codigo,
              mensagem: "Categoria incluída com sucesso!",
            });
          })
          .catch((erro) => {
            resposta.status(500).json({
              status: false,
              mensagem: "Erro ao registrar a categoria:" + erro.message,
            });
          });
      } else {
        resposta.status(400).json({
          status: false,
          mensagem: "Por favor, informe a descrição da categoria!",
        });
      }
    } else {
      resposta.status(400).json({
        status: false,
        mensagem:
          "Por favor, utilize o método POST para cadastrar uma categoria!",
      });
    }
  }

  async atualizar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.setHeader("Content-Type", "application/json");
    
    if (requisicao.method === "PUT") {
      if (requisicao.is("application/json")) {
        const { id } = requisicao.params;
        const { cat_nome, cat_descricao } = requisicao.body;
        console.log(cat_nome, cat_descricao)
        if (id && cat_nome && cat_descricao) {
          const categoria = new Categoria(cat_nome, cat_descricao);
          categoria.codigo = id;
          categoria
            .atualizar(conexao)
            .then(() => {
              resposta.json({
                status: true,
                listaCategorias,
              })
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao atualizar a categoria: " + erro.message,
              });
            });
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
        mensagem: "Para atualizar uma categoria utilize o método PUT!",
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
          const categoria = new Categoria();
          categoria.codigo = id;
          categoria
            .excluir(conexao)
            .then(() => {
              resposta.json({
                status: true,
                listaCategorias,
              })
            })
            .catch((erro) => {
              resposta.json({
                status: false,
                mensagem: "Erro ao excluir a categoria: " + erro.message,
              });
            });
        } else {
          resposta.json({
            status: false,
            mensagem:
              "Especifique na URL o ID da categoria que deseja excluir!",
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
        mensagem: "Para excluir uma categoria utilize o método DELETE!",
      });
    }
  }

  async consultar(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    if (requisicao.method === "GET") {
      const categoria = new Categoria();
      categoria
        .consultar(conexao)
        .then((listaCategorias) =>
          resposta.json({
            status: true,
            listaCategorias,
          })
        )
        .catch((erro) => {
          resposta.json({
            status: false,
            mensagem: "Erro ao consultar categorias: " + erro.message,
          });
        });
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar categorias utilize o método GET!",
      });
    }
  }

  async consultarID(requisicao, resposta) {
    const conexao = await conectar();
    resposta.type("application/json");

    if (requisicao.method === "GET") {
      const { id } = requisicao.params;

      if (id) {
        const categoria = new Categoria();
        categoria
          .consultarID(id, conexao)
          .then((categoriaConsultada) => {
            resposta.json(categoriaConsultada);
          })
          .catch((erro) => {
            resposta.json({
              status: false,
              mensagem: "Erro ao consultar categoria por ID: " + erro.message,
            });
          });
      } else {
        resposta.json({
          status: false,
          mensagem:
            "Especifique na URL o ID da categoria que deseja consultar!",
        });
      }
    } else {
      resposta.json({
        status: false,
        mensagem: "Para consultar uma categoria por ID utilize o método GET!",
      });
    }
  }
}
