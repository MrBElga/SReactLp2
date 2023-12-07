import Produto from "../Modelo/Produtos.js";
import Categoria from "../Modelo/Categoria.js";
export default class ProdutoDAO {
  constructor() {}

  async gravar(produto, conexao) {

    if (produto instanceof Produto) {
      const sql =
        "INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES (?, ?, ?, ?, ?)";
      const valores = [
        produto.nome,
        produto.descricao,
        parseFloat(produto.preco),
        parseInt(produto.estoque),
        parseInt(produto.categoria),
      ];

      console.log(valores)
      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        console.log(error)
        throw error;
      }
    }
  }

  async atualizar(produto, conexao) {
    if (produto instanceof Produto) {
      
      const sql = `UPDATE produtos
      SET prod_nome = ?, prod_descricao = ?, prod_preco = ?, prod_estoque = ?, cat_codigo = ?
      WHERE prod_codigo = ?;`;

      const valores = [
        produto.nome,
        produto.descricao,
        parseFloat(produto.preco),
        parseInt(produto.estoque),
        parseInt(produto.categoria.cat_codigo),
        produto.codigo,
      ];

      try {
        await conexao.execute(sql, valores);
      } catch (error) {
        throw error;
      }
    }
  }

  async consultar(conexao) {
    const sql = `SELECT p.prod_codigo, p.prod_nome, p.prod_descricao, p.prod_estoque, p.prod_preco, c.cat_codigo, c.cat_descricao 
    FROM produtos p 
    INNER JOIN categorias c ON p.cat_codigo = c.cat_codigo
    ORDER BY p.cat_codigo;`;

    try {
      const [rows] = await conexao.query(sql);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async consultarA(termo, conexao) {
    const parametros = [];

    let sql = `SELECT p.prod_codigo,p.prod_nome, p.prod_descricao, p.prod_preco, p.prod_estoque, p.cat_codigo, c.cat_nome, c.cat_descricao
               FROM produtos p INNER JOIN categorias c ON p.cat_codigo = c.cat_codigo`;

    if (termo) {
      if (!isNaN(Number(termo))) {
        sql += ` WHERE p.prod_codigo = ? ORDER BY p.prod_descricao`;
      } else {
        sql += ` WHERE p.prod_descricao LIKE ? ORDER BY p.prod_descricao`;
        parametros.push(`%${termo}%`);
      }
    }

    try {
      const [registros, campos] = await conexao.execute(sql, parametros);
      let listaProdutos = [];

      for (const registro of registros) {
        const categoria = new Categoria(
          registro.cat_nome,
          registro.cat_descricao,
          registro.cat_codigo
        );
        const produto = new Produto(
          registro.prod_nome,
          registro.prod_descricao,
          registro.prod_preco,
          registro.prod_estoque,
          categoria,
          registro.prod_codigo,
        );
        listaProdutos.push(produto);
      }

      return listaProdutos;
    } catch (error) {
      throw error;
    }
  }

  async consultarID(id, conexao) {
    console.log(id);
    const sql = "SELECT * FROM produtos WHERE prod_codigo = ?";

    try {
      const [rows] = await conexao.query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async excluir(produto, conexao) {
    console.log(produto)
    if (produto instanceof Produto) {
      const sql = "DELETE FROM produtos WHERE prod_codigo = ?";

      try {
        await conexao.execute(sql, [produto.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
