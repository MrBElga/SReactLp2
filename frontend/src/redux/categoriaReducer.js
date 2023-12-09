import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/categorias";

// Thunks
export const buscarCategorias = createAsyncThunk('categoria/buscarCategorias', async () => {
  try { 
      const resposta = await fetch(urlBase, { method: 'GET' });
      const dados = await resposta.json();
      console.log(dados)
      if (dados.status) {
          return {
              status: true,
              listaCategorias: dados.listaCategorias,
              mensagem: ''
          }
      }
      else {
          return {
              status: false,
              listaCategorias: [],
              mensagem: 'Ocorreu um erro ao recuperar as categorias da base de dados.'
          }
      }
  } catch (erro) {
      return {
          status: false,
          listaCategorias: [],
          mensagem: 'Ocorreu um erro ao recuperar as categorias da base de dados:' + erro.message
      }
  }
});

export const incluirCategoria = createAsyncThunk('gravar', async (categoria) => {
 
  const resposta = await fetch(urlBase, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoria)
  }).catch(erro => {
      return {
          status: false,
          mensagem: 'Ocorreu um erro ao adicionar a categoria:' + erro.message
      }
  });

  if (resposta.ok) {
      const dados = await resposta.json();
 
      return {
          status: dados.status,
          mensagem: dados.mensagem,
          categoria
      }
  }
  else {
      return {
          status: false,
          mensagem: 'Ocorreu um erro ao adicionar a categoria.',
          categoria
      }
  }
});

export const excluirCategoria = createAsyncThunk('excluirCategoria', async (categoria) =>  {
  console.log(categoria.cat_codigo)
  const resposta = await fetch(`${urlBase}/${categoria.cat_codigo}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoria)
  }).catch(erro => {
      return {
          status: false,
          mensagem: 'Ocorreu um erro ao remover a categoria:' + erro.message,
          categoria
      }
  });
  if (resposta.ok) {
      const dados = await resposta.json();
      return {
          status: dados.status,
          mensagem: dados.mensagem,
          categoria
      }
  }
  else {
      return {
          status: false,
          mensagem: 'Ocorreu um erro ao remover a categoria.',
          categoria
      }
  }
});

export const atualizarCategoria = createAsyncThunk('atualizarCategoria', async (categoria) => {
  try {
    const resposta = await fetch(`${urlBase}/${categoria.cat_codigo}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoria)
    });
    const dados = await resposta.json();
    console.log(dados)
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
          state.listaCategorias = state.listaCategorias.filter(categoria => categoria.cat_codigo !== action.payload.cat_codigo);
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
          console.log(action.payload)
          state.status = ESTADO.OCIOSO;
          state.mensagem = action.payload.mensagem;
          
         
          const listaTemporariaCategorias = state.listaCategorias.filter(categoria => categoria.cat_nome !== action.payload.categoria.cat_nome);
          
  
          state.listaCategorias = [...listaTemporariaCategorias, action.payload.listaCategorias];
        } else {
          state.status = ESTADO.ERRO;
          state.mensagem = action.payload.mensagem;
        }
      })

  }
});

export default categoriaSlice.reducer;
