import Categoria from '../Modelo/Categoria.js'
export default class CategoriaDAO {
  constructor() {}

  async gravar(categoria, conexao) {
    if(categoria instanceof Categoria)
    {
      const sql = "INSERT INTO categorias (cat_nome, cat_descricao) VALUES (?, ?)";
      const valores = [categoria.nome, categoria.descricao];

      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    }
  }

  async atualizar(categoria, conexao) {
    if(categoria instanceof Categoria)
    {
      const sql =
        "UPDATE categorias SET cat_nome = ?, cat_descricao = ? WHERE cat_codigo = ?";
      const valores = [categoria.nome, categoria.descricao, categoria.codigo];

      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
    }  
  }

  async consultar(conexao) {
      const sql = "SELECT * FROM categorias";

      try {
        const [rows] = await conexao.query(sql);
        return rows;
      } catch (error) {
        throw error;
      }  
  }

  async consultarId (id, conexao) {
    const sql = "SELECT * FROM categorias WHERE cat_codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluir(categoria, conexao) {
    if(categoria instanceof Categoria)
    {
      const sql = "DELETE FROM categorias WHERE cat_codigo = ?";

      try {
        await conexao.execute(sql, [categoria.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
