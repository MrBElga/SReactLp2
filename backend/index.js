import express from "express";
import cors from 'cors';
const host = 'localhost';
const porta = 4000;

const servidorHTTP = express();

servidorHTTP.use(cors({
    origin:'*'
}));
servidorHTTP.use(express.json());

servidorHTTP.listen(porta,host, () => {
    console.log("Servidor escutando em http://" + host + ":" +porta);
});