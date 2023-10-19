import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const categoriaSlice = createSlice({
    name: 'categoria',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaCategorias: []
    },
    reducers: {
        adicionarCategoria: (state, action) => {
            state.listaCategorias.push(action.payload);
        },
        removerCategoria: (state, action) => {
            state.listaCategorias = state.listaCategorias.filter(categoria => categoria.id !== action.payload.id);
        },
        atualizarCategoria: (state, action) => {
            const listaTemporariaCategorias = state.listaCategorias.filter(categoria => categoria.id !== action.payload.id);
            state.listaCategorias = [...listaTemporariaCategorias, action.payload.categoria];
        }
    }
});

export const { adicionarCategoria, removerCategoria, atualizarCategoria } = categoriaSlice.actions;
export default categoriaSlice.reducer;
