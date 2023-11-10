export default class ClientesDAO {
  constructor() {}

  async gravar(cliente, conexao) {
    const sql =
      "INSERT INTO clientes (cli_cpf, cli_nome, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_ep, cli_email, usu_prior) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const valores = [
      cliente.cpf,
      cliente.nome,
      cliente.telefone,
      cliente.celular,
      cliente.endereco,
      cliente.numero,
      cliente.bairro,
      cliente.cidade,
      cliente.uf,
      cliente.cep,
      cliente.email,
      cliente.prior,
    ];

    try {
      const [result] = await conexao.execute(sql, valores);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(cliente, conexao) {
    const sql =
      "UPDATE clientes SET cli_cpf = ?, cli_nome = ?, cli_telefone = ?, cli_celular = ?, cli_endereco = ?, cli_numero = ?, cli_bairro = ?, cli_cidade = ?, cli_uf = ?, cli_cep = ?, cli_email = ?, usu_prior = ? WHERE codigo = ?";
    const valores = [
      cliente.cpf,
      cliente.nome,
      cliente.telefone,
      cliente.celular,
      cliente.endereco,
      cliente.numero,
      cliente.bairro,
      cliente.cidade,
      cliente.uf,
      cliente.cep,
      cliente.email,
      cliente.codigo,
      cliente.prior,
    ];

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
    const sql = "SELECT * FROM clientes WHERE cli_codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluir(cliente, conexao) {
    const sql = "DELETE FROM clientes WHERE cli_codigo = ?";

    try {
      await conexao.execute(sql, [cliente.codigo]);
    } catch (error) {
      throw error;
    }
  }
}
