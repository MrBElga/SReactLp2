import { Container, Table } from "react-bootstrap";
import "./tabela.css";

export default function TabelaCategorias(props) {
  return (
    <Container>
      <Table className="table-custom" striped bordered hover>
        <thead>
          <tr>
            <th>Nome da Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Categoria A</td>
            <td>Descrição da Categoria A</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
