import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remover } from "../../redux/clienteReducer";
import "./tabela.css";

export default function TabelaClientes(props) {
  const { status, mensagem, listaClientes } = useSelector((state) => state.cliente);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [clienteToDelete, setClienteToDelete] = useState(null);

  function excluirCliente(cliente) {
    setClienteToDelete(cliente);
    setShowModal(true);
  }

  function confirmarExclusao() {
    if (clienteToDelete) {
      dispatch(remover(clienteToDelete));
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

  return (
    <Container>
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
              <tr key={cliente.cpf}>
                <td>{cliente.cpf}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.endereco + ", n " + cliente.numero}</td>
                <td>{cliente.bairro}</td>
                <td>{cliente.cidade}/{cliente.uf}</td>
                <td>{cliente.cep}</td>
                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      excluirCliente(cliente);
                    }}
                  >
                    Excluir
                  </Button>
                  <Button className="btn-editar" onClick={() => { editarCliente(cliente); }}>Editar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

   
      <Modal show={showModal} onHide={cancelarExclusao} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Confirmar Exclusão</Modal.Title>
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
