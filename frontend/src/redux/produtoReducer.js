import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/produtos";

export const buscarProdutos = createAsyncThunk("buscarProdutos", async () => {
  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();
    //console.log(dados)
    if (dados.status) {
      console.log(dados);
      return {
        status: dados.status,
        mensagem: "",
        listaProdutos: dados.listaProdutos,
      };
    } else {
      return {
        status: dados.status,
        mensagem: dados.mensagem,
        listaProdutos: [],
      };
    }
  } catch (erro) {
    return {
      status: false,
      mensagem: "Erro ao recuperar produtos:" + erro.message,
      listaProdutos: [],
    };
  }
});

export const incluirProduto = createAsyncThunk(
  "incluirProduto",
  async (produto) => {
    try {
      const resposta = await fetch(urlBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });
      const dados = await resposta.json();

      if (dados.status) {
        const { codigoGerado, mensagem } = dados;
        produto.codigo = codigoGerado;

        return {
          status: true,
          produto,
          mensagem,
        };
      } else {
        return {
          status: false,
          mensagem: dados.mensagem,
        };
      }
    } catch (erro) {
      return {
        status: false,
        mensagem: "Não foi possível cadastrar o produto: " + erro.message,
      };
    }
  }
);

export const atualizarProduto = createAsyncThunk(
  "atualizarProduto",
  async (produto) => {
    try {
      const resposta = await fetch(`${urlBase}/${produto.codigo}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });
      const dados = await resposta.json();
      console.log(dados);
      return dados;
    } catch (erro) {
      return {
        status: false,
        mensagem: "Não foi possível atualizar o produto: " + erro.message,
      };
    }
  }
);

export const excluirProduto = createAsyncThunk(
  "excluirProduto",
  async (produto) => {
    console.log(produto);
    try {
      const resposta = await fetch(`${urlBase}/${produto.codigo}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });
      const dados = await resposta.json();
      if (dados.status) {
        return {
          status: dados.status,
          produto,
          mensagem: dados.mensagem,
        };
      } else {
        return {
          status: dados.status,
          mensagem: dados.mensagem,
        };
      }
    } catch (erro) {
      return {
        status: false,
        mensagem: "Não foi possível excluir o produto: " + erro.message,
      };
    }
  }
);

const estadoInicial = {
  estado: ESTADO.OCIOSO,
  mensagem: "",
  listaProdutos: [],
};

const produtoSlice = createSlice({
  name: "produto",
  initialState: estadoInicial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarProdutos.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Buscando produtos...";
      })
      .addCase(buscarProdutos.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = "Produtos recuperados do backend!";
          state.listaProdutos = action.payload.listaProdutos;
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
          state.listaProdutos = [];
        }
      })
      .addCase(buscarProdutos.rejected, (state, action) => {
        state.estado = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
        state.listaProdutos = [];
      })
      .addCase(incluirProduto.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Processando a requisição...";
      })
      .addCase(incluirProduto.fulfilled, (state, action) => {
        const { status, produto, mensagem } = action.payload;
        state.estado = status ? ESTADO.OCIOSO : ESTADO.ERRO;
        state.mensagem = mensagem;

        if (status) {
          state.listaProdutos = [...state.listaProdutos, produto];
        }
      })

      .addCase(atualizarProduto.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Atualizando produto...";
      })
      .addCase(atualizarProduto.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          const updatedProduto = action.payload.produto;
          if (updatedProduto) {
            const indice = state.listaProdutos.findIndex(
              (produto) => produto.codigo === updatedProduto.codigo
            );
            if (indice !== -1) {
              state.listaProdutos[indice] = updatedProduto;
            }
          }
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirProduto.pending, (state, action) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Processando a requisição...";
      })
      .addCase(excluirProduto.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaProdutos = state.listaProdutos.filter(
            (produto) => produto.codigo !== action.payload.produto.codigo
          );
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirProduto.rejected, (state, action) => {
        state.estado = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
      });

  },
});

export default produtoSlice.reducer;
