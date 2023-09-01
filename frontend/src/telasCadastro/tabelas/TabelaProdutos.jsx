import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {
  return (
    <Container>
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade em Estoque</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Produto A</td>
            <td>Descrição do Produto A</td>
            <td>R$ 100,00</td>
            <td>50 unidades</td>
          </tr>


        </tbody>
      </Table>
    </Container>
  );
}
