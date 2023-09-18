import { Container, Table, Button } from "react-bootstrap";
import "./tabela.css";

export default function TabelaCategorias(props) {
  function excluirCategoria(categoria) {
    if (window.confirm("Deseja realmente excluir esse Fornecedor?")) {
      props.setListaCategoria(
        props.listaCategoria.filter(
          (itemLista) => itemLista.nomeCategoria !== categoria.nomeCategoria
        )
      );
    }
  }
  function editarCategoria(categoria){

    props.setCategoriaParaEdicao(categoria);
    props.setModoEdicao(true)
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
            <th>Nome da Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {props.listaCategoria.map((categoria) => {
            return (
              <tr key={categoria.nomeCategoria}>
                <td>{categoria.nomeCategoria}</td>
                <td>{categoria.descricao}</td>

                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      excluirCategoria(categoria);
                    }}
                  >
                    Excluir
                  </Button>
                  <Button className="btn-editar" onClick={()=>{ editarCategoria(categoria)}} >Editar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
