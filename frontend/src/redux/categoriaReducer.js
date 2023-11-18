import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/categoria";

// Thunks
export const buscarCategorias = createAsyncThunk('buscarCategorias', async () => {
  try {
    const resposta = await fetch(urlBase, { method: "GET" });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Erro ao recuperar categorias:" + erro.message,
      listaCategorias: []
    };
  }
});

export const incluirCategoria = createAsyncThunk('incluirCategoria', async (categoria) => {
  try {
    const resposta = await fetch(urlBase, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoria)
    });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível cadastrar a categoria: " + erro.message
    };
  }
});

export const excluirCategoria = createAsyncThunk('excluirCategoria', async (nomeCategoria) => {
  try {
    const resposta = await fetch(`${urlBase}/${nomeCategoria}`, { method: "DELETE" });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível excluir a categoria: " + erro.message
    };
  }
});

export const atualizarCategoria = createAsyncThunk('atualizarCategoria', async (categoria) => {
  try {
    const resposta = await fetch(`${urlBase}/${categoria.nomeCategoria}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoria)
    });
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    return {
      status: false,
      mensagem: "Não foi possível atualizar a categoria: " + erro.message
    };
  }
});

const categoriaSlice = createSlice({
  name: 'categoria',
  initialState: {
    status: ESTADO.OCIOSO,
    mensagem: '',
    listaCategorias: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarCategorias.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Buscando categorias...';
      })
      .addCase(buscarCategorias.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = "Categorias recuperadas do backend!";
          state.listaCategorias = action.payload.listaCategorias;
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
          state.listaCategorias = [];
        }
      })
      .addCase(buscarCategorias.rejected, (state, action) => {
        state.status = ESTADO.ERRO;
        state.mensagem = action.payload.mensagem;
        state.listaCategorias = [];
      })
      .addCase(incluirCategoria.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(incluirCategoria.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaCategorias.push(action.payload.categoria);
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(excluirCategoria.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(excluirCategoria.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          state.listaCategorias = state.listaCategorias.filter(categoria => categoria.nomeCategoria !== action.payload.nomeCategoria);
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
      .addCase(atualizarCategoria.pending, (state) => {
        state.status = ESTADO.PENDENTE;
        state.mensagem = 'Processando a requisição...';
      })
      .addCase(atualizarCategoria.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          const listaTemporariaCategorias = state.listaCategorias.filter(categoria => categoria.nomeCategoria !== action.payload.nomeCategoria);
          state.listaCategorias = [...listaTemporariaCategorias, action.payload.categoria];
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })
  }
});

export default categoriaSlice.reducer;
