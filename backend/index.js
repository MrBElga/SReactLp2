import express from "express";
import cors from 'cors';
import categoriaRoutes from './Rotas/rotaCategoria.js'; 
import clientesRoutes from './Rotas/rotaCliente.js';
import fornecedorRoutes from './Rotas/rotaFornecedor.js'; 
import produtosRoutes from './Rotas/rotaProduto.js'; 

const host = 'localhost';
const porta = 4000;

const servidorHTTP = express();

servidorHTTP.use(cors({
    origin:'*'
}));
servidorHTTP.use(express.json());
servidorHTTP.use('/', categoriaRoutes);
servidorHTTP.use('/', clientesRoutes);
servidorHTTP.use('/', fornecedorRoutes);
servidorHTTP.use('/', produtosRoutes);

servidorHTTP.listen(porta,host, () => {
    console.log("Servidor escutando em http://" + host + ":" +porta);
});
