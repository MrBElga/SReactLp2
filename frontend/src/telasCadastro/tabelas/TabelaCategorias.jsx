import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buscarCategorias, excluirCategoria } from "../../redux/categoriaReducer";
import "./tabela.css";

export default function TabelaCategorias(props) {
  const { status, mensagem, listaCategorias } = useSelector((state) => state.categoria);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [categoriaToDelete, setCategoriaToDelete] = useState(null);

  useEffect(() => {
    dispatch(buscarCategorias());
  }, [dispatch]);

  function excluirCategoria(categoria) {
    setCategoriaToDelete(categoria);
    setShowModal(true);
  }

  function confirmarExclusao() {
    if (categoriaToDelete) {
      dispatch(excluirCategoria(categoriaToDelete.nomeCategoria));
      setShowModal(false);
      setCategoriaToDelete(null);
    }
  }

  function cancelarExclusao() {
    setShowModal(false);
    setCategoriaToDelete(null);
  }

  function editarCategoria(categoria) {
    props.setCategoriaParaEdicao(categoria);
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
        Nova Categoria
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome da Categoria</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaCategorias.map((categoria) => {
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
                  <Button className="btn-editar" onClick={() => { editarCategoria(categoria); }}>Editar</Button>
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
