import { Container, Table } from "react-bootstrap";
import "./tabela.css";

export default function TabelaFornecedores(props) {
  return (
    <Container>
    
      <Table className="table-custom" striped bordered hover>
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
        </tbody>
      </Table>
    </Container>
  );
}
