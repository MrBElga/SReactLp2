import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
import categoriaSlice from './categoriaReducer'
import fornecedorSlice from './fornecedorReducer'
import produtoSlice from './produtoReducer'
import vendaSlice from './vendaReducer'

const store = configureStore({
    reducer:{
        cliente: clienteSlice,
        categoria: categoriaSlice,
        fornecedor: fornecedorSlice,
        produto: produtoSlice,
        venda: vendaSlice,
    }
});

export default store;