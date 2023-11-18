import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/cliente";

// Thunks
export const buscarClientes = createAsyncThunk('buscarClientes', async () => {
  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Erro ao recuperar clientes:" + erro.message,
      listaClientes: []
    };
  }
});

export const incluirCliente = createAsyncThunk('incluirCliente', async (cliente) => {
  try {
    const resposta = await fetch(urlBase, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível cadastrar o cliente: " + erro.message
    };
  }
});

export const excluirCliente = createAsyncThunk('excluirCliente', async (cpf) => {
  try {
    const resposta = await fetch(`${urlBase}/${cpf}`, { method: "DELETE" });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível excluir o cliente: " + erro.message
    };
  }
});

export const atualizarCliente = createAsyncThunk('atualizarCliente', async (cliente) => {
  try {
    const resposta = await fetch(`${urlBase}/${cliente.cpf}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível atualizar o cliente: " + erro.message
    };
  }
});

const clienteSlice = createSlice({
  name: 'cliente',
  initialState: {
    status: ESTADO.OCIOSO,
    mensagem: '',
    listaClientes: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarClientes.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Buscando clientes...';
      })
      .addCase(buscarClientes.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = "Clientes recuperados do backend!";
          state.listaClientes = action.payload.listaClientes;
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
          state.listaClientes = [];
        }
      })
      .addCase(buscarClientes.rejected, (state, action) => {
        state.status = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
        state.listaClientes = [];
      })
      .addCase(incluirCliente.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(incluirCliente.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaClientes.push(action.payload.cliente);
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirCliente.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(excluirCliente.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(atualizarCliente.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(atualizarCliente.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          const listaTemporariaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
          state.listaClientes = [...listaTemporariaClientes, action.payload.cliente];
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
  }
});

export default clienteSlice.reducer;
