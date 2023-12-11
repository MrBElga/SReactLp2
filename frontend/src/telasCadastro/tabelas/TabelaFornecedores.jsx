import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ESTADO from "../../recurso/estado.js";
import {
  buscarFornecedores,
  excluirFornecedor,
} from "../../redux/fornecedorReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tabela.css";

export default function TabelaFornecedores(props) {
  const { status, mensagem, listaFornecedores } = useSelector(
    (state) => state.fornecedor
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [fornecedorToDelete, setFornecedorToDelete] = useState(null);
  const customModalStyle = {
    color: "black",
  };

  useEffect(() => {
    dispatch(buscarFornecedores());
  }, [dispatch]);

  function remover(fornecedor) {
    setFornecedorToDelete(fornecedor);
    setShowModal(true);
  }

  function confirmarExclusao() {
    if (fornecedorToDelete) {
      dispatch(excluirFornecedor(fornecedorToDelete));
      setShowModal(false);
      setFornecedorToDelete(null);
    }
  }

  function cancelarExclusao() {
    setShowModal(false);
    setFornecedorToDelete(null);
  }

  function editarFornecedor(fornecedor) {
    props.setFornecedorParaEdicao(fornecedor);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
  }

  if (status === ESTADO.PENDENTE) {
    toast(
      ({ closeToast }) => (
        <div>
          <Spinner animation="border" role="status"></Spinner>
          <p>Buscando fornecedores....</p>
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
            props.setExibirFormulario(true);
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
            {listaFornecedores.map((fornecedor) => (
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
                    onClick={() => remover(fornecedor)}
                  >
                    Excluir
                  </Button>
                  <Button
                    className="btn-editar"
                    onClick={() => editarFornecedor(fornecedor)}
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
            Tem certeza de que deseja excluir este fornecedor?
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
