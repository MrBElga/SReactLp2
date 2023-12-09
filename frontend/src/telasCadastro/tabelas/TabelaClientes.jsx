import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buscarClientes, excluirCliente } from "../../redux/clienteReducer";
import ESTADO from "../../recurso/estado.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tabela.css";

export default function TabelaClientes(props) {
  const { status, mensagem, listaClientes } = useSelector(
    (state) => state.cliente
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [clienteToDelete, setClienteToDelete] = useState(null);

  useEffect(() => {
    dispatch(buscarClientes());
  }, [dispatch]);

  function remover(cliente) {
    setClienteToDelete(cliente);
    setShowModal(true);
  }

  function confirmarExclusao() {
    if (clienteToDelete) {
      dispatch(excluirCliente(clienteToDelete));
      setShowModal(false);
      setClienteToDelete(null);
    }
  }

  function cancelarExclusao() {
    setShowModal(false);
    setClienteToDelete(null);
  }

  function editarCliente(cliente) {
    props.setClienteParaEdicao(cliente);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
  }

  useEffect(() => {
    if (status === ESTADO.PENDENTE) {
      toast(({ closeToast }) => (
        <div>
          <Spinner animation="border" role="status"></Spinner>
          <p>Enviando dados do Cliente....</p>
        </div>
      ));
    } else if (status === ESTADO.ERRO) {
      toast.error(({ closeToast }) => (
        <div>
          <p>{mensagem}</p>
        </div>
      ));
    } else if (status === ESTADO.SUCESSO) {
      toast.success(({ closeToast }) => (
        <div>
          <p>Cliente cadastrado/atualizado com sucesso!</p>
        </div>
      ));
    }
  }, [status, mensagem]);
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
          Novo Cliente
        </Button>
        <Table className="table-custom" striped bordered hover>
          <thead>
            <tr>
              <th>CPF</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Endereço/Nº</th>
              <th>Bairro</th>
              <th>Cidade/UF</th>
              <th>CEP</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaClientes.map((cliente) => {
              return (
                <tr key={cliente.cli_cpf}>
                  <td>{cliente.cli_cpf}</td>
                  <td>{cliente.cli_nome}</td>
                  <td>{cliente.cli_email}</td>
                  <td>{cliente.cli_endereco + ", n " + cliente.cli_numero}</td>
                  <td>{cliente.cli_cpf}</td>
                  <td>
                    {cliente.cli_cidade}/{cliente.cli_uf}
                  </td>
                  <td>{cliente.cli_cep}</td>
                  <td>
                    <Button
                      className="btn-excluir"
                      onClick={() => {
                        remover(cliente);
                      }}
                    >
                      Excluir
                    </Button>
                    <Button
                      className="btn-editar"
                      onClick={() => {
                        editarCliente(cliente);
                      }}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={cancelarExclusao} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Confirmar Exclusão
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>
            Tem certeza de que deseja excluir este cliente?
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
