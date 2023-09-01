import Categoria from "../Modelo/Categoria.js";
import conectar from "./Conexao.js";

export default class CategoriaDAO {
    constructor() {}

    async gravar(categoria) {
        const conexao = conectar();
        const sql = "INSERT INTO categorias (nome, descricao) VALUES (?, ?)";
        const valores = [categoria.nome, categoria.descricao];

        try {
            const [result] = await conexao.execute(sql, valores);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(categoria) {
        const conexao = conectar();
        const sql = "UPDATE categorias SET nome = ?, descricao = ? WHERE codigo = ?";
        const valores = [categoria.nome, categoria.descricao, categoria.codigo];

        try {
            await conexao.execute(sql, valores);
        } catch (error) {
            throw error;
        }
    }

    async consultar() {
        const conexao = conectar();
        const sql = "SELECT * FROM categorias";

        try {
            const [rows] = await conexao.query(sql);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async consultarID(id) {
        const conexao = conectar();
        const sql = "SELECT * FROM categorias WHERE codigo = ?";

        try {
            const [rows] = await conexao.query(sql, [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async excluir(categoria) {
        const conexao = conectar();
        const sql = "DELETE FROM categorias WHERE codigo = ?";

        try {
            await conexao.execute(sql, [categoria.codigo]);
        } catch (error) {
            throw error;
        }
    }
}
