import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/fornecedor";

// Thunks
export const buscarFornecedores = createAsyncThunk('buscarFornecedores', async () => {

  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();
    console.log(dados)
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Erro ao recuperar fornecedores:" + erro.message,
      listaFornecedores: []
    };
  }
});

export const incluirFornecedor = createAsyncThunk('incluirFornecedor', async (fornecedor) => {
  try {
    const resposta = await fetch(urlBase, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fornecedor)
    });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível cadastrar o fornecedor: " + erro.message
    };
  }
});

export const excluirFornecedor  = createAsyncThunk('excluirFornecedor', async (fornecedor) => {
  console.log(fornecedor)
  try {
    const resposta = await fetch(`${urlBase}/${fornecedor.codigo}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fornecedor)
    });

    const dados = await resposta.json();
    console.log(dados)
    if (dados.status) {
      return {
        status: dados.status,
        fornecedor,
        mensagem: dados.mensagem
      };
    } else {
      return {
        status: dados.status,
        mensagem: dados.mensagem
      };
    }
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível excluir o fornecedor: " + erro.message
    };
  }
});

export const atualizarFornecedor = createAsyncThunk('atualizarFornecedor', async (fornecedor) => {
  try {
    const resposta = await fetch(`${urlBase}/${fornecedor.codigo}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fornecedor)
    });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível atualizar o fornecedor: " + erro.message
    };
  }
});

const fornecedorSlice = createSlice({
  name: 'fornecedor',
  initialState: {
    status: ESTADO.OCIOSO,
    mensagem: '',
    listaFornecedores: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarFornecedores.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Buscando fornecedores...';
      })
      .addCase(buscarFornecedores.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = "Fornecedores recuperados do backend!";
          state.listaFornecedores = action.payload.listaFornecedores;
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
          state.listaFornecedores = [];
        }
      })
      .addCase(buscarFornecedores.rejected, (state, action) => {
        state.status = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
        state.listaFornecedores = [];
      })
      .addCase(incluirFornecedor.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(incluirFornecedor.fulfilled, (state, action) => {
        if (action.payload.status) {
          console.log(action.payload.fornecedor)
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaFornecedores.push(action.payload.fornecedor);
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirFornecedor.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(excluirFornecedor.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
      
          state.listaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.cnpj !== action.payload.fornecedor.cnpj);
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      
      .addCase(atualizarFornecedor.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(atualizarFornecedor.fulfilled, (state, action) => {
        if (action.payload.status) {
          console.log(action.payload.fornecedor)
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          const listaTemporariaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.cnpj !== action.payload.fornecedor.cnpj);
          state.listaFornecedores = [...listaTemporariaFornecedores, action.payload.fornecedor];
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      
  }
});

export default fornecedorSlice.reducer;
