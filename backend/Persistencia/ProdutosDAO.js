export default class ProdutoDAO {
    constructor() {}

    async gravar(produto,conexao) {
     
        const sql = "INSERT INTO produtos (nome, descricao, preco, estoque, fornecedor_id) VALUES (?, ?, ?, ?, ?)";
        const valores = [produto.nome, produto.descricao, produto.preco, produto.estoque, produto.fornecedorId];

        try {
            const [result] = await conexao.execute(sql, valores);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(produto,conexao) {
 
        const sql = "UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ?, fornecedor_id = ? WHERE codigo = ?";
        const valores = [produto.nome, produto.descricao, produto.preco, produto.estoque, produto.fornecedorId, produto.codigo];

        try {
            await conexao.execute(sql, valores);
        } catch (error) {
            throw error;
        }
    }

    async consultar(conexao) {
    
        const sql = "SELECT * FROM produtos";

        try {
            const [rows] = await conexao.query(sql);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async consultarID(id,conexao) {

        const sql = "SELECT * FROM produtos WHERE codigo = ?";

        try {
            const [rows] = await conexao.query(sql, [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async excluir(produto,conexao) {

        const sql = "DELETE FROM produtos WHERE codigo = ?";

        try {
            await conexao.execute(sql, [produto.codigo]);
        } catch (error) {
            throw error;
        }
    }
}
