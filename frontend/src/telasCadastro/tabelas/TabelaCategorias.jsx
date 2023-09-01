import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {
  return (
    <Container>
      <Table striped bordered hover>
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
          {/* Adicione mais linhas conforme necessário para exibir outras categorias */}
        </tbody>
      </Table>
    </Container>
  );
}
