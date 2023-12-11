import { Container, Table, Button, Modal, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ESTADO from "../../recurso/estado.js";
import { buscarVendas, excluirVenda } from "../../redux/vendaReducer";

import "./tabela.css";

export default function TabelaVendas(props) {
  const { status, mensagem, listaVendas } = useSelector((state) => state.venda);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [vendaToDelete, setVendaToDelete] = useState(null);

  const customModalStyle = {
    color: "black",
  };

  useEffect(() => {
    dispatch(buscarVendas());
  }, [dispatch, vendaToDelete]);

  const Remover = (venda) => {
    setVendaToDelete(venda);
    setShowModal(true);
  };

  const confirmarExclusao = () => {
    console.log(vendaToDelete);
    if (vendaToDelete) {
      dispatch(excluirVenda(vendaToDelete)).then(() => {
        dispatch(buscarVendas());
        setShowModal(false);
        setVendaToDelete(null);
        toast.success("Venda excluída com sucesso!");
      });
    }
  };

  const cancelarExclusao = () => {
    setShowModal(false);
    setVendaToDelete(null);
  };

  const editarVenda = (venda) => {
    console.log("Editar venda:", venda);
  };

  if (status === ESTADO.PENDENTE) {
    toast(
      ({ closeToast }) => (
        <div>
          <Spinner animation="border" role="status"></Spinner>
          <p>Buscando vendas....</p>
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
          Nova Venda
        </Button>
        <Table className="table-custom" striped bordered hover>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Cliente</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaVendas.map((venda) => (
              <tr key={venda.codigo}>
                <td>{venda.cli_nome}</td>
                <td>{venda.prod_nome}</td>
                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      Remover(venda);
                    }}
                  >
                    Excluir
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
            Tem certeza de que deseja excluir esta venda?
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
