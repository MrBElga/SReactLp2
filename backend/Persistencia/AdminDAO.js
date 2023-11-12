import Admin from '../Modelo/Admin.js'
export default class AdminDAO {
  constructor() {}

  async gravar(adm, conexao) {
    if(adm instanceof Admin)
    {
      const sql =
        "INSERT INTO adm (adm_nome, adm_senha, usu_prior) VALUES (?, ?, ?)";
      const valores = [adm.nome, adm.senha, adm.prior];

      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    }
  }

  async atualizar(adm, conexao) {
    if(adm instanceof Admin)
    {
      const sql =
      
        "UPDATE adm SET adm_nome = ?, adm_senha = ?, usu_prior = ? WHERE codigo = ?";
      const valores = [adm.nome, adm.senha, adm.codigo];

      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
    }
  }

  async consultar(conexao) {
    const sql = "SELECT * FROM adm";

    try {
      const [rows] = await conexao.query(sql);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async consultarID(id, conexao) {
    const sql = "SELECT * FROM adm WHERE codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluir(adm, conexao) {
    if(adm instanceof Admin)
    {
      const sql = "DELETE FROM adm WHERE codigo = ?";

      try {
        await conexao.execute(sql, [adm.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
