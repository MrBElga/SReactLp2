import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const clienteSlice = createSlice({
    name:'cliente',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaClientes:[]
    },
    reducers:{
        
        adicionar:(state, action)=>{
            state.listaClientes.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
        },
        atualizar:(state,action)=>{
            const listaTemporariaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
            state.listaClientes = [...listaTemporariaClientes, action.payload];
        }

    }
});
export const {adicionar,remover,atualizar} = clienteSlice.actions; 
export default clienteSlice.reducer;