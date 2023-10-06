import { Container, Table, Button } from "react-bootstrap";
import "./tabela.css";

export default function TabelaFornecedores(props) {
  function excluirFornecedor(fornecedor) {
    if (window.confirm("Deseja realmente excluir esse cliente?")) {
      props.setListaFornecedores(
        props.listaFornecedores.filter(
          (itemLista) => itemLista.cnpj !== fornecedor.cnpj
        )
      );
    }
  }
  function editarFornecedor(fornecedor){

    props.setFornecedorPAraEdicao(fornecedor);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
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
        Novo Fornecedor
      </Button>
      <Table className="table-custom" striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Fornecedor</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Cidade/UF</th>
            <th>CEP</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listaFornecedores.map((fornecedor) => {
            return (
              <tr key={fornecedor.cnpj}>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.cnpj}</td>
                <td>{fornecedor.endereco}</td>
                <td>{fornecedor.numero}</td>
                <td>
                  {fornecedor.cidade}/{fornecedor.uf}
                </td>
                <td>{fornecedor.cep}</td>
                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      excluirFornecedor(fornecedor);
                    }}
                  >
                    Excluir
                  </Button>
                
                <Button className="btn-editar"  onClick={()=>{ editarFornecedor(fornecedor);}}>Editar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
