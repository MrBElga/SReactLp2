import Cliente from '../Modelo/Clientes.js'
export default class ClientesDAO {
  constructor() {}

  async gravar(cliente, conexao) {
    if(cliente instanceof Cliente)
    {
      const sql =
        "INSERT INTO clientes (cli_cpf, cli_nome, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
  }

  async atualizar(cliente, conexao) {
    
    if(cliente instanceof Cliente)
    {
      const sql = 
        "UPDATE clientes SET cli_cpf = ?, cli_nome = ?, cli_telefone = ?, cli_celular = ?, cli_endereco = ?, cli_numero = ?, cli_bairro = ?, cli_cidade = ?, cli_uf = ?, cli_cep = ?, cli_email = ?, usu_prior = ? WHERE cli_codigo = ?";
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
        cliente.codigo
      ];

      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
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

  async consultarId(id, conexao) {
    const sql = "SELECT * FROM clientes WHERE cli_codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluir(cliente, conexao) {
    if(cliente instanceof Cliente)
    {
      const sql = "DELETE FROM clientes WHERE cli_codigo = ?";

      try {
        await conexao.execute(sql, [cliente.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
