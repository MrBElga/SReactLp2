import Cliente from '../Modelo/Clientes.js'
export default class ClientesDAO {
  constructor() {}

  async gravar(cliente, conexao) {
    if(cliente instanceof Cliente)
    {
      const sql =
        "INSERT INTO clientes (cli_cpf, cli_nome, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const valores = [
        cliente.cli_cpf,
        cliente.cli_nome,
        cliente.cli_endereco,
        cliente.cli_numero,
        cliente.cli_bairro,
        cliente.cli_cidade,
        cliente.cli_uf,
        cliente.cli_cep,
        cliente.cli_email,
        cliente.cli_prior,
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
    console.log(   
      cliente.cli_cpf,
      cliente.cli_nome,
      cliente.cli_endereco,
      cliente.cli_numero,
      cliente.cli_bairro,
      cliente.cli_cidade,
      cliente.cli_uf,
      cliente.cli_cep,
      cliente.cli_email,
      cliente.cli_prior,
      cliente.cli_codigo)
    if(cliente instanceof Cliente)
    {
      const sql = 
        "UPDATE clientes SET cli_cpf = ?, cli_nome = ?, cli_endereco = ?, cli_numero = ?, cli_bairro = ?, cli_cidade = ?, cli_uf = ?, cli_cep = ?, cli_email = ?, usu_prior = ? WHERE cli_codigo = ?";
      const valores = [
        cliente.cli_cpf,
        cliente.cli_nome,
        cliente.cli_endereco,
        cliente.cli_numero,
        cliente.cli_bairro,
        cliente.cli_cidade,
        cliente.cli_uf,
        cliente.cli_cep,
        cliente.cli_email,
        cliente.cli_prior,
        cliente.cli_codigo
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

      const sql = "DELETE FROM clientes WHERE cli_codigo = ?";

      try {
        await conexao.execute(sql, [cliente]);
      } catch (error) {
        throw error;
      }
    }
}
