import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const categoriaSlice = createSlice({
    name: 'categoria',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaCategorias: []
    },
    reducers: {
        adicionar: (state, action) => {
            state.listaCategorias.push(action.payload);
        },
        remover: (state, action) => {
            state.listaCategorias = state.listaCategorias.filter(categoria => categoria.nome !== action.payload.nome);
        },
        atualizar: (state, action) => {
            const listaTemporariaCategorias = state.listaCategorias.filter(categoria => categoria.nome !== action.payload.nome);
            state.listaCategorias = [...listaTemporariaCategorias, action.payload];
        }
    }
});

export const { adicionar, remover, atualizar } = categoriaSlice.actions;
export default categoriaSlice.reducer;
