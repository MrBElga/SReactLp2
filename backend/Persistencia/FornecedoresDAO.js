import Fornecedor from "../Modelo/Fornecedor.js";
export default class FornecedorDAO {
  constructor() {}

  async gravar(fornecedor, conexao) {
    if (fornecedor instanceof Fornecedor) {
      const sql =
        "INSERT INTO fornecedores (forn_cnpj, forn_nome, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email,usu_prior) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
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

      const fornecedores = rows.map((fornecedor) => ({
        cnpj: fornecedor.forn_cnpj,
        nome: fornecedor.forn_nome,
        telefone: fornecedor.forn_telefone,
        celular: fornecedor.forn_celular,
        endereco: fornecedor.forn_endereco,
        numero: fornecedor.forn_numero,
        bairro: fornecedor.forn_bairro,
        cidade: fornecedor.forn_cidade,
        uf: fornecedor.forn_uf,
        cep: fornecedor.forn_cep,
        email: fornecedor.forn_email,
        prior: fornecedor.usu_prior,
        codigo: fornecedor.forn_codigo,
      }));

      return fornecedores;
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

  async excluir(id, conexao) {
    const sql = "DELETE FROM fornecedores WHERE forn_codigo = ?";
    try {
      await conexao.execute(sql, [id]);
    } catch (error) {
      throw error;
    }
  }
}
