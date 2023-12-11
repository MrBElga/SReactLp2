import Venda from "../Modelo/Venda.js";

export default class VendaDAO {

  async gravar(venda, conexao) {
    if (venda instanceof Venda) {
      const sql =
        "INSERT INTO vendas (prod_codigo, cli_codigo) VALUES (?, ?)";
      const valores = [
        venda.produto,
        venda.cliente,
      ];

      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    }
  }

  async atualizar(venda, conexao) {
    console.log(venda.produto,
        venda.cliente)
    if (venda instanceof Venda) {
      const sql = "UPDATE vendas SET cli_codigo = ? WHERE ven_codigo = ?";
      const valores = [
        venda.produto,
        venda.cliente,
      ];

      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
    }
  }

  async consultar(conexao) {
    const sql = `SELECT v.ven_codigo, p.prod_codigo, p.prod_nome, c.cli_codigo, c.cli_nome
                 FROM vendas v
                 INNER JOIN produtos p ON v.prod_codigo = p.prod_codigo
                 INNER JOIN clientes c ON v.cli_codigo = c.cli_codigo
                 ORDER BY v.ven_codigo;`;

    try {
      const [rows] = await conexao.query(sql);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async consultarID(id, conexao) {
    const sql = "SELECT * FROM vendas WHERE ven_codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      if (rows.length > 0) {
      
        return rows;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async excluir(venda, conexao) {
  
      const sql = "DELETE FROM vendas WHERE ven_codigo = ?";

      try {
        await conexao.execute(sql, [venda]);
      } catch (error) {
        throw error;
      }
      
  }
}
