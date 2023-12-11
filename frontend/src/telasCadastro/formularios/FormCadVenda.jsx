import React, { useState, useEffect } from "react";
import "./form.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incluirVenda, atualizarVenda } from "../../redux/vendaReducer";
import { buscarProdutos } from "../../redux/produtoReducer";
import { buscarClientes } from "../../redux/clienteReducer"; // Adicione a ação de buscar clientes
import ESTADO from "../../recurso/estado.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormCadVenda(props) {
  const VendaVazia = {
    produto: {
      codigo: 0,
      nome: "",
    },
    cliente: {
      codigo: 0,
      nome: "",
    },
  };

  const estadoInicialVenda = props.vendaParaEdicao || VendaVazia;
  const [venda, setVenda] = useState(estadoInicialVenda);

  const [validated, setValidated] = useState(false);

  const { estadoProd, mensagemProd, listaProdutos } = useSelector(
    (state) => state.produto
  );

  const { estadoCliente, mensagemCliente, listaClientes } = useSelector( 
    (state) => state.cliente
  );

  const { status, mensagem, listaVendas } = useSelector((state) => state.venda);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarProdutos());
    dispatch(buscarClientes()); 
  }, [dispatch]);

  function selecionaProduto(e) {
    const componente = e.currentTarget;
    setVenda({
      ...venda,
      produto: {
        codigo: componente.value,
        nome: componente.options[componente.selectedIndex].text,
      },
    });
  }

  function selecionaCliente(e) {
    const componente = e.currentTarget;
    setVenda({
      ...venda,
      cliente: {
        codigo: componente.value,
        nome: componente.options[componente.selectedIndex].text,
      },
    });
  }

  function manipularSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        dispatch(incluirVenda(venda));
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      } else {
        dispatch(atualizarVenda(venda));
        props.setModoEdicao(false);
        props.setVendaParaEdicao(VendaVazia);
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      }
      setVenda(VendaVazia);
      setValidated(false);
    } else {
      setValidated(true);
    }
    e.stopPropagation();
    e.preventDefault();
  }

  const limparDados = () => {
    setVenda(VendaVazia);
    props.setModoEdicao(false);
    props.setVendaParaEdicao(VendaVazia);
    setValidated(false);
    props.exibirFormulario(false);
  };

  if (status === ESTADO.PENDENTE) {
    toast(({ closeToast }) =>
        <div>
            <Spinner animation="border" role="status"></Spinner>
            <p>Buscando categorias....</p>
        </div>
    ,{toastId:status});
}
else if (status === ESTADO.ERRO) {
    toast.error(({ closeToast }) =>
        <div>
            <p>{mensagem}</p>

        </div>
    , {toastId: status});
}
else {
    toast.dismiss();
  return (
    <Container className="container">
      <ToastContainer />
      <Form noValidate validated={validated} onSubmit={manipularSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Produto:" className="mb-3">
                <Form.Select
                  aria-label="Produto"
                  id="produto"
                  name="produto"
                  onChange={selecionaProduto}
                  value={venda.produto ? venda.produto.codigo : "0"}
                  style={{ backgroundColor: "#020202", color: "#f0f0f0" }}
                  required
                >
                  <option value="0" defaultValue>
                    Selecione um produto
                  </option>
                  {listaProdutos?.map((produto) => (
                    <option
                      key={produto.codigo}
                      value={produto.codigo}
                    >
                      {produto.nome}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Selecione um produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Cliente:" className="mb-3">
                <Form.Select
                  aria-label="Cliente"
                  id="cliente"
                  name="cliente"
                  onChange={selecionaCliente}
                  value={venda.cliente ? venda.cliente.codigo : "0"}
                  style={{ backgroundColor: "#020202", color: "#f0f0f0" }}
                  required
                >
                  <option value="0" defaultValue>
                    Selecione um cliente
                  </option>
                  {listaClientes?.map((cliente) => (
                    <option
                      key={cliente.cli_codigo}
                      value={cliente.cli_codigo}
                    >
                      {cliente.cli_nome}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Selecione um cliente!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              {props.modoEdicao ? "Alterar" : "Cadastrar"}
            </Button>

            <Button type="button" variant={"secondary"} onClick={limparDados}>
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
  }
}
