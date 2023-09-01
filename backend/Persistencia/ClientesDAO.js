export default class ClientesDAO {
    constructor() {}

    async gravar(cliente, conexao) {
        const sql = "INSERT INTO clientes (cpf, nome, telefone, celular, endereco, numero, bairro, cidade, uf, cep, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const valores = [cliente.cpf, cliente.nome, cliente.telefone, cliente.celular, cliente.endereco, cliente.numero, cliente.bairro, cliente.cidade, cliente.uf, cliente.cep, cliente.email];

        try {
            const [result] = await conexao.execute(sql, valores);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(cliente, conexao) {
        const sql = "UPDATE clientes SET cpf = ?, nome = ?, telefone = ?, celular = ?, endereco = ?, numero = ?, bairro = ?, cidade = ?, uf = ?, cep = ?, email = ? WHERE codigo = ?";
        const valores = [cliente.cpf, cliente.nome, cliente.telefone, cliente.celular, cliente.endereco, cliente.numero, cliente.bairro, cliente.cidade, cliente.uf, cliente.cep, cliente.email, cliente.codigo];

        try {
            await conexao.execute(sql, valores);
        } catch (error) {
            throw error;
        }
    }

    async consultar(conexao) {
        const sql = "SELECT * FROM clientes";

        try {
            const [rows] = await conexao.query(sql);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async consultarID(id, conexao) {
        const sql = "SELECT * FROM clientes WHERE codigo = ?";

        try {
            const [rows] = await conexao.query(sql, [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async excluir(cliente, conexao) {
        const sql = "DELETE FROM clientes WHERE codigo = ?";

        try {
            await conexao.execute(sql, [cliente.codigo]);
        } catch (error) {
            throw error;
        }
    }
}
