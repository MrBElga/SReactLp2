import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const produtoSlice = createSlice({
    name: 'produto',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaProdutos: []
    },
    reducers: {
        adicionar: (state, action) => {
            state.listaProdutos.push(action.payload);
        },
        remover: (state, action) => {
            state.listaProdutos = state.listaProdutos.filter(produto => produto.nomeProduto !== action.payload.nomeProduto);
        },
        atualizar: (state, action) => {
            const listaTemporariaProdutos = state.listaProdutos.filter(produto => produto.nomeProduto !== action.payload.nomeProduto);
            state.listaProdutos = [...listaTemporariaProdutos, action.payload];
        }
    }
});

export const { adicionar, remover, atualizar } = produtoSlice.actions;
export default produtoSlice.reducer;
