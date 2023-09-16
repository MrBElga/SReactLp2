import { Container, Table, Button } from "react-bootstrap";
import "./tabela.css";

export default function TabelaProdutos(props) {
  function excluirProduto(produto) {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      props.setProdutosCadastrados(
        props.produtosCadastrados.filter(((itemProduto) => itemProduto.nomeProduto !== produto.nomeProduto))
      );
    }
  }

  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          props.exibirFormulario(true);
        }}
        variant="primary"
      >
        Novo Produto
      </Button>
      <Table className="table-custom" striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade em Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.produtosCadastrados.map((produto) => {
            return (
              <tr key={produto.nomeProduto}>
                <td>{produto.nomeProduto}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.preco}</td>
                <td>{produto.quantidade} unidades</td>
                <td>{produto.tipoProduto}</td>
                <td>{produto.numeroIdentificacao}</td>
                <td>{produto.custoUnitario}</td>
                <td>{produto.precoVenda}</td>
                <td>{produto.nomeFornecedor}</td>

                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      excluirProduto(produto);
                    }}
                  >
                    Excluir
                  </Button>
                  <Button className="btn-editar">Editar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
