import Fornecedor from "../Modelo/Fornecedor.js";
import conectar from "./Conexao.js";

export default class FornecedorDAO {
    constructor() {}

    async gravar(fornecedor) {
        const conexao = conectar();
        const sql = "INSERT INTO fornecedores (cpf, nome, telefone, celular, endereco, numero, bairro, cidade, uf, cep, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const valores = [fornecedor.cpf, fornecedor.nome, fornecedor.telefone, fornecedor.celular, fornecedor.endereco, fornecedor.numero, fornecedor.bairro, fornecedor.cidade, fornecedor.uf, fornecedor.cep, fornecedor.email];

        try {
            const [result] = await conexao.execute(sql, valores);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(fornecedor) {
        const conexao = conectar();
        const sql = "UPDATE fornecedores SET cpf = ?, nome = ?, telefone = ?, celular = ?, endereco = ?, numero = ?, bairro = ?, cidade = ?, uf = ?, cep = ?, email = ? WHERE codigo = ?";
        const valores = [fornecedor.cpf, fornecedor.nome, fornecedor.telefone, fornecedor.celular, fornecedor.endereco, fornecedor.numero, fornecedor.bairro, fornecedor.cidade, fornecedor.uf, fornecedor.cep, fornecedor.email, fornecedor.codigo];

        try {
            await conexao.execute(sql, valores);
        } catch (error) {
            throw error;
        }
    }

    async consultar() {
        const conexao = conectar();
        const sql = "SELECT * FROM fornecedores";

        try {
            const [rows] = await conexao.query(sql);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async consultarID(id) {
        const conexao = conectar();
        const sql = "SELECT * FROM fornecedores WHERE codigo = ?";

        try {
            const [rows] = await conexao.query(sql, [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async excluir(fornecedor) {
        const conexao = conectar();
        const sql = "DELETE FROM fornecedores WHERE codigo = ?";

        try {
            await conexao.execute(sql, [fornecedor.codigo]);
        } catch (error) {
            throw error;
        }
    }
}
