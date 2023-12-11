import { Container, Table, Spinner, Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ESTADO from "../../recurso/estado";
import {
  buscarCategorias,
  excluirCategoria,
} from "../../redux/categoriaReducer";
import "./tabela.css";

export default function TabelaCategorias(props) {
  const { status, mensagem, listaCategorias } = useSelector(
    (state) => state.categoria
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [categoriaToDelete, setCategoriaToDelete] = useState(null);

  useEffect(() => {
    dispatch(buscarCategorias());
  }, [dispatch, categoriaToDelete]);

  const customModalStyle = {
    color: "black",
  };

  function remover(categoria) {
    console.log("Categoria a ser excluída:", categoria);
    setCategoriaToDelete(categoria);
    setShowModal(true);
  }

  function confirmarExclusao() {
    if (categoriaToDelete) {
      dispatch(excluirCategoria(categoriaToDelete)).then(() => {
        setShowModal(false);
        setCategoriaToDelete(null);
      });
    }
  }

  function cancelarExclusao() {
    setShowModal(false);
    setCategoriaToDelete(null);
  }

  function editarCategoria(categoria) {
    console.log("Categoria a ser editada:", categoria);
    props.setCategoriaParaEdicao(categoria);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
  }
  if (status === ESTADO.PENDENTE) {
    toast(
      ({ closeToast }) => (
        <div>
          <Spinner animation="border" role="status"></Spinner>
          <p>Buscando categorias....</p>
        </div>
      ),
      { toastId: status }
    );
  } else if (status === ESTADO.ERRO) {
    toast.error(
      ({ closeToast }) => (
        <div>
          <p>{mensagem}</p>
        </div>
      ),
      { toastId: status }
    );
  } else {
    toast.dismiss();
    return (
      <Container>
        <ToastContainer />

        <Button
          type="button"
          onClick={() => {
            props.exibirFormulario(true);
          }}
          variant="primary"
        >
          Nova Categoria
        </Button>
        <Table className="table-custom" striped bordered hover>
          <thead>
            <tr>
              <th>Nome da Categoria</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaCategorias.map((categoria) => (
              <tr key={categoria.cat_nome}>
                <td>{categoria.cat_nome}</td>
                <td>{categoria.cat_descricao}</td>
                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => remover(categoria)}
                  >
                    Excluir
                  </Button>{" "}
                  <Button
                    className="btn-editar"
                    onClick={() => editarCategoria(categoria)}
                  >
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={cancelarExclusao} centered>
          <Modal.Header closeButton>
            <Modal.Title style={customModalStyle}>
              Confirmar Exclusão
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={customModalStyle}>
            Tem certeza de que deseja excluir esta categoria?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelarExclusao}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={confirmarExclusao}>
              Excluir
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
