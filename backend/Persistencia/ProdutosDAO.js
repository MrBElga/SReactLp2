import Produto from '../Modelo/Produtos.js'
import Categoria from '../modelo/Categoria.js';
export default class ProdutoDAO {
  constructor() {}

  async gravar(produto, conexao) {
    if(produto instanceof Produto)
    {  
      const sql =
        "INSERT INTO produtos (nome, descricao, preco, estoque, fornecedor_id,cat_codigo) VALUES (?, ?, ?, ?, ?, ?)";
      const valores = [
        produto.nome,
        produto.descricao,
        produto.preco,
        produto.estoque,
        produto.fornecedorId,
      ];
      console.log(valores);
      try {
        const [result] = await conexao.execute(sql, valores);
        return result.insertId;
      } catch (error) {
        throw error;
      }
    }
  }

  async atualizar(produto, conexao) {
    if(produto instanceof Produto)
    {  
      const sql = `UPDATE produto SET prod_descricao = ?, prod_precoCusto = ?, prod_precoVenda = ?, prod_dataValidade = ?, prod_qtdEstoque = ?, cat_codigo = ? WHERE prod_codigo = ?`;

      const valores = [
        produto.nome,
        produto.descricao,
        produto.preco,
        produto.estoque,
        produto.fornecedorId,
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

    if (!termo) {
        termo = "";
    }

    let sql = "";
    if (!isNaN(Number(termo))) {
       
        sql = `SELECT p.prod_codigo, p.prod_descricao, p.prod_preco, p.prod_estoque, p.cat_codigo, c.cat_descricao
              FROM produtos p INNER JOIN categorias c ON p.cat_codigo = c.cat_codigo
              WHERE p.prod_codigo = ? ORDER BY p.prod_descricao`;
        parametros.push(termo);
    } else {
       
        sql = `SELECT p.prod_codigo, p.prod_descricao, p.prod_preco, p.prod_estoque, p.cat_codigo, c.cat_descricao
              FROM produtos p INNER JOIN categorias c ON p.cat_codigo = c.cat_codigo
              WHERE p.prod_descricao LIKE ? ORDER BY p.prod_descricao`;
        parametros.push(`%${termo}%`);
    }

    try {
        const [registros, campos] = await conexao.execute(sql, parametros);
        let listaProdutos = [];

        for (const registro of registros) {
            const categoria = new Categoria(registro.cat_codigo, registro.cat_descricao);
            const produto = new Produto(
                registro.prod_codigo,
                registro.prod_descricao,
                registro.prod_preco,
                registro.prod_estoque,
                categoria
            );
            listaProdutos.push(produto);
        }

        return listaProdutos;
    } catch (error) {
        throw error;
    }
}


  async consultarID(id, conexao) {
  
      const sql = "SELECT * FROM produtos WHERE codigo = ?";

      try {
        const [rows] = await conexao.query(sql, [id]);
        return rows[0];
      } catch (error) {
        throw error;
      }
    
  }

  async excluir(produto, conexao) {
    if(produto instanceof Produto)
    {  
      const sql = "DELETE FROM produtos WHERE codigo = ?";

      try {
        await conexao.execute(sql, [produto.codigo]);
      } catch (error) {
        throw error;
      }
    }
  }
}
