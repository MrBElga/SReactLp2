import Fornecedor from '../Modelo/Fornecedor.js'
export default class FornecedorDAO {
  constructor() {}

  async gravar(fornecedor, conexao) {
    if(fornecedor instanceof Fornecedor )
    {
      const sql = "INSERT INTO fornecedores (forn_cnpj, forn_nome, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email,usu_prior) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const valores = [
        fornecedor.cnpj,
        fornecedor.nome,
        fornecedor.telefone,
        fornecedor.celular,
        fornecedor.endereco,
        fornecedor.numero,
        fornecedor.bairro,
        fornecedor.cidade,
        fornecedor.uf,
        fornecedor.cep,
        fornecedor.email,
        fornecedor.prior
      ];

      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    }
  }

  async atualizar(fornecedor, conexao) {
    if (fornecedor instanceof Fornecedor) {
      const sql =
        "UPDATE fornecedores SET forn_cnpj = ?, forn_nome = ?, forn_telefone = ?, forn_celular = ?, forn_endereco = ?, forn_numero = ?, forn_bairro = ?, forn_cidade = ?, forn_uf = ?, forn_cep = ?, forn_email = ?, usu_prior = ? WHERE forn_codigo = ?";
      const valores = [
        fornecedor.cnpj,
        fornecedor.nome,
        fornecedor.telefone,
        fornecedor.celular,
        fornecedor.endereco,
        fornecedor.numero,
        fornecedor.bairro,
        fornecedor.cidade,
        fornecedor.uf,
        fornecedor.cep,
        fornecedor.email,
        fornecedor.prior,
        fornecedor.codigo,
      ];
  
      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
    }
  }
  
  async consultar(conexao) {
    const sql = "SELECT * FROM fornecedores";

    try {
      const [rows] = await conexao.query(sql);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async consultarID(id, conexao) {
    const sql = "SELECT * FROM fornecedores WHERE forn_codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluir(fornecedor, conexao) {
    if(fornecedor instanceof Fornecedor )
    {
      const sql = "DELETE FROM fornecedores WHERE codigo = ?";

      try {
        await conexao.execute(sql, [fornecedor.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
