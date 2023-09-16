import { Container, Table } from "react-bootstrap";
import "./tabela.css";

export default function TabelaProdutos(props) {
  const { produtos } = props; 
  
  return (
    <Container>
      <Table className="table-custom" striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade em Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.nomeProduto}</td>
              <td>{produto.descricao}</td>  
              <td>R$ {produto.preco}</td>
              <td>{produto.quantidade} unidades</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
