import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const fornecedorSlice = createSlice({
    name: 'fornecedor',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaFornecedores: []
    },
    reducers: {
        adicionarFornecedor: (state, action) => {
            state.listaFornecedores.push(action.payload);
        },
        removerFornecedor: (state, action) => {
            state.listaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.id !== action.payload.id);
        },
        atualizarFornecedor: (state, action) => {
            const listaTemporariaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.id !== action.payload.id);
            state.listaFornecedores = [...listaTemporariaFornecedores, action.payload.fornecedor];
        }
    }
});

export const { adicionarFornecedor, removerFornecedor, atualizarFornecedor } = fornecedorSlice.actions;
export default fornecedorSlice.reducer;
