import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
    return (
        <Container>
          
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000.000.000-00</td>
                        <td>Maria Aparecida Fake</td>
                        <td>Rua das Flores, n° 2569</td>
                        <td>Presidente Prudente/SP</td>
                        <td>19015-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}