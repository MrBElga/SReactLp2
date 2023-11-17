import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recurso/estado";

const urlBase = "http://localhost:4000/produtos"

export const incluirProdutos = createAsyncThunk('incluirProdutos', async(produto)=>{
    try {
        const resposta = await fetch(urlBase, {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:produto
        });
        const dados = await resposta.json();
        if(dados.status)
        {
            produto.codigo = dados.codigoGerado;
            return{
                status: dados.status,
                produto,
                mensagem: dados.mensagem
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    } catch (error) {
        return{
            status:false,
            mensagem:"Erro ao cadastrar produtos: " + error.mensagem
        }
    }
})

export const atualizarProdutos = createAsyncThunk('atualizarProdutos', async(produto)=>{
    try {
        const resposta = await fetch(urlBase, {
            method:"PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body:produto
        });
        const dados = await resposta.json();
        if(dados.status)
        {
            produto.codigo = dados.codigoGerado;
            return{
                status: dados.status,
                produto,
                mensagem: dados.mensagem
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    } catch (error) {
        return{
            status:false,
            mensagem:"Erro ao atualizar produtos: " + error.mensagem
        }
    }
})

export const excluirProdutos = createAsyncThunk('atualizarProdutos', async(produto)=>{
    try {
        const resposta = await fetch(urlBase, {
            method:"DELETE",
            headers: {
                'Content-Type':'application/json'
            },
            body:produto
        });
        const dados = await resposta.json();
        if(dados.status)
        {
            produto.codigo = dados.codigoGerado;
            return{
                status: dados.status,
                produto,
                mensagem: dados.mensagem
            }
        }
        else{
            return{
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    } catch (error) {
        return{
            status:false,
            mensagem:"Erro ao DELETAR produtos: " + error.mensagem
        }
    }
})

export const buscarProdutos = createAsyncThunk('buscarProdutos',async() => {
    try {
        const resposta = await fetch(urlBase, {method:"GET"});
        const dados = await resposta.json();
        if (dados.status)
        {
            return{
                status:dados.status,
                mensagem:"",
                listaProdutos:[]
            }
        }
        else
        {
            return{
                status:dados.status,
                mensagem:dados.mensagem,
                listaProdutos: []
            }
        }
    } catch (error) {
        return{
            status:false,
            mensagem:"Erro ao recuperar produtos: " + error.mensagem,
            listaProdutos: []
        }
    }
});

const estadoInicial = {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        produto:[],
    }

const produtoSlice = createSlice({
    name: 'produto',
    status: ESTADO.OCIOSO,
    initialState:estadoInicial,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(buscarProdutos.pending, (state, actions)=>{
            state.estado = ESTADO.PENDENTE;
            state.mensagem = 'Buscando produtos...';
        })
        .addCase(buscarProdutos.fulfilled, (state, actions)=>{
            if (actions.payload.status) 
            { 
                state.estado = ESTADO.OCIOSO;
                state.mensagem = 'Produtos recuperados com sucesso!';
                state.produto = actions.payload.listaProdutos;
            }
            else
            {
                state.estado = ESTADO.ERRO;
                state.mensagem = actions.payload.mensagem;
                state.produto = [];
            }
        })
        .addCase(buscarProdutos.rejected,(state,actions)=>{
            state.estado = ESTADO.ERRO;
            state.mensagem = actions.payload.mensagem;
            state.produto = [];
        })
        .addCase(incluirProdutos.pending,(state,actions)=>{
            state.estado = ESTADO.PENDENTE;
            state.mensagem = 'Buscando produtos...';
        })
        .addCase(incluirProdutos.fulfilled,(state,actions)=>{
            if (actions.payload.status) 
            { 
                state.estado = ESTADO.OCIOSO;
                state.mensagem = actions.payload.mensagem;
                state.produto.push(actions.payload.produto);
            }
            else
            {
                state.estado = ESTADO.ERRO;
                state.mensagem = actions.payload.mensagem;
                
            }
        })
        .addCase(incluirProdutos.rejected,(state,actions)=>{
            state.estado = ESTADO.ERRO;
            state.mensagem = actions.payload.mensagem
        })
        .addCase(atualizarProdutos.pending,(state,actions)=>{
            state.estado = ESTADO.PENDENTE;
            state.mensagem = 'Buscando produtos...';
        })
        .addCase(atualizarProdutos.fulfilled,(state,actions)=>{
            if (actions.payload.status) 
            { 
                state.estado = ESTADO.OCIOSO;
                state.mensagem = actions.payload.mensagem;
                const indice = state.produto.findIndex((produto)=>{produto.codigo === actions.payload.produto.codigo});
                state.produto[indice] = actions.payload.produto;
            }
            else
            {
                state.estado = ESTADO.ERRO;
                state.mensagem = actions.payload.mensagem;
                
            }
        })
        .addCase(atualizarProdutos.rejected,(state,actions)=>{
            state.estado = ESTADO.ERRO;
            state.mensagem = actions.payload.mensagem
        })
        .addCase(excluirProdutos.pending,(state,actions)=>{
            state.estado = ESTADO.PENDENTE;
            state.mensagem = 'Buscando produtos...';
        })
        .addCase(excluirProdutos.fulfilled,(state,actions)=>{
            if (actions.payload.status) 
            { 
                state.estado = ESTADO.OCIOSO;
                state.mensagem = actions.payload.mensagem;
                const indice = state.produto.filter((produto)=>{produto.codigo !== actions.payload.produto.codigo});
                state.produto[indice] = actions.payload.produto;
            }
            else
            {
                state.estado = ESTADO.ERRO;
                state.mensagem = actions.payload.mensagem;
                
            }
        })
        .addCase(excluirProdutos.rejected,(state,actions)=>{
            state.estado = ESTADO.ERRO;
            state.mensagem = actions.payload.mensagem
        })
    }
    
});

export const { adicionar, remover, atualizar } = produtoSlice.actions;
export default produtoSlice.reducer;
