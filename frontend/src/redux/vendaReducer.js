import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/venda";

export const buscarVendas = createAsyncThunk("buscarVendas", async () => {
  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();

    if (dados.status) {
      return {
        status: dados.status,
        mensagem: "",
        listaVendas: dados.listaVendas,
      };
    } else {
      return {
        status: dados.status,
        mensagem: dados.mensagem,
        listaVendas: [],
      };
    }
  } catch (erro) {
    return {
      status: false,
      mensagem: "Erro ao recuperar vendas:" + erro.message,
      listaVendas: [],
    };
  }
});

export const incluirVenda = createAsyncThunk("incluirVenda", async (venda) => {
    const obj = {cliente: venda.cliente.codigo,
                 produto: venda.produto.codigo}
    console.log(obj)
  try {
    const resposta = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const dados = await resposta.json();

    if (dados.status) {
      const { codigoGerado, mensagem } = dados;
      venda.codigo = codigoGerado;

      return {
        status: true,
        venda,
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
      mensagem: "Não foi possível cadastrar a venda: " + erro.message,
    };
  }
});

export const atualizarVenda = createAsyncThunk(
    "atualizarVenda",
    async (venda) => {
      try {
        const resposta = await fetch(`${urlBase}/${venda.codigo}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(venda),
        });
        const dados = await resposta.json();
  
        return dados;
      } catch (erro) {
        return {
          status: false,
          mensagem: "Não foi possível atualizar a venda: " + erro.message,
        };
      }
    }
  );
  
  export const excluirVenda = createAsyncThunk("excluirVenda",async (venda) => {
    
      try {
        const resposta = await fetch(`${urlBase}/${venda.ven_codigo}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(venda),
        });
        const dados = await resposta.json();
        console.log(dados);
        if (dados.status) {
          return {
            status: dados.status,
            venda,
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
          mensagem: "Não foi possível excluir a venda: " + erro.message,
        };
      }
    }
  );
  

const estadoInicial = {
  estado: ESTADO.OCIOSO,
  mensagem: "",
  listaVendas: [],
};

const vendaSlice = createSlice({
  name: "venda",
  initialState: estadoInicial,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(buscarVendas.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Buscando vendas...";
      })
      .addCase(buscarVendas.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = "Vendas recuperadas do backend!";
          state.listaVendas = action.payload.listaVendas;
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
          state.listaVendas = [];
        }
      })
      .addCase(buscarVendas.rejected, (state, action) => {
        state.estado = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
        state.listaVendas = [];
      })
      .addCase(incluirVenda.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Processando a requisição...";
      })
      .addCase(incluirVenda.fulfilled, (state, action) => {
        const { status, venda, mensagem } = action.payload;
        state.estado = status ? ESTADO.OCIOSO : ESTADO.ERRO;
        state.mensagem = mensagem;

        if (status) {
          state.listaVendas = [...state.listaVendas, venda];
        }
      })

      .addCase(atualizarVenda.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Atualizando venda...";
      })
      .addCase(atualizarVenda.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          const updatedVenda = action.payload.venda;
          if (updatedVenda) {
            const indice = state.listaVendas.findIndex(
              (venda) => venda.codigo === updatedVenda.codigo
            );
            if (indice !== -1) {
              state.listaVendas[indice] = updatedVenda;
            }
          }
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirVenda.pending, (state) => {
        state.estado = ESTADO.PENDENTE;
        state.mensagem = "Processando a requisição...";
      })
      .addCase(excluirVenda.fulfilled, (state, action) => {
        console.log(action.payload)
        if (action.payload.status) {
          state.estado = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaVendas = state.listaVendas.filter(
            (venda) => venda.codigo !== action.payload.venda.codigo
          );
        } else {
          state.estado = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirVenda.rejected, (state, action) => {
        console.log(action.payload)
        state.estado = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
      });
  },
});

export default vendaSlice.reducer;
