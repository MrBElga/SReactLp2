import { Container, Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remover } from "../../redux/produtoReducer";
import "./tabela.css";

export default function TabelaProdutos(props) {
  const {status,mensagem,listaProdutos} = useSelector(state=>state.produto);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [produtoToDelete, setProdutoToDelete] = useState(null)
  const customModalStyle = {
    color: "black", 
  };
  function excluirProduto(produto) {
    setProdutoToDelete(produto);
    setShowModal(true);
  }

  function confirmarExclusao() {
    if (produtoToDelete) {
      dispatch(remover(produtoToDelete));
      setShowModal(false);
      setProdutoToDelete(null);
    }
  }

  function cancelarExclusao() {
    setShowModal(false);
    setProdutoToDelete(null);
  }

  function editarProduto(produto){
    props.setProdutoParaEdicao(produto);
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
        Novo Produto
      </Button>
      <Table className="table-custom" striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Qtd Estoque</th>
            <th>tipo</th>
            <th>nmr Identificacao</th>
            <th>custo Unitario</th>
            <th>preco Venda</th>
            <th>Fornecedor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map((produto) => {
            return (
              <tr key={produto.nomeProduto}>
                <td>{produto.nomeProduto}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.preco}</td>
                <td>{produto.quantidade} unidades</td>
                <td>{produto.tipoProduto}</td>
                <td>{produto.numeroIdentificacao}</td>
                <td>{produto.custoUnitario}</td>
                <td>{produto.precoVenda}</td>
                <td>{produto.nomeFornecedor}</td>

                <td>
                  <Button
                    className="btn-excluir"
                    onClick={() => {
                      excluirProduto(produto);
                    }}
                  >
                    Excluir
                  </Button>
                  <Button className="btn-editar"  onClick={()=>{ editarProduto(produto)}}>Editar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={cancelarExclusao} centered>
        <Modal.Header closeButton>
          <Modal.Title  style={customModalStyle}>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={customModalStyle}>
          Tem certeza de que deseja excluir este produto?
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
