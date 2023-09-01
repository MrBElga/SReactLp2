import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
  return (
    <Container>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Fornecedor</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Cidade/UF</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fornecedor A</td>
            <td>00.000.000/0000-00</td>
            <td>Avenida das Flores</td>
            <td>123</td>
            <td>São Paulo/SP</td>
            <td>01010-000</td>
          </tr>
          {/* Adicione mais linhas conforme necessário para exibir outros fornecedores */}
        </tbody>
      </Table>
    </Container>
  );
}
