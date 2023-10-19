import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';

const store = configureStore({
    reducer:{
        cliente: clienteSlice,
    }
});

export default store;