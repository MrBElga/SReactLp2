import React, { useState, useEffect } from "react";
import "./form.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,Spinner
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incluirProduto, atualizarProduto } from "../../redux/produtoReducer";
import { buscarCategorias } from "../../redux/categoriaReducer";
import ESTADO from "../../recurso/estado.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormCadProduto(props) {
  const estadoInicialProduto = props.produtoParaEdicao;
  const ProdutoVazio = {
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
    categoria: {
      cat_codigo: 0,
      cat_descricao: "",
      cat_nome: "",
    },
  };

  const [produto, setProduto] = useState(estadoInicialProduto);
  const [validated, setValidated] = useState(false);

  const {estadoCat,mensagemCat,listaCategorias,} = useSelector((state) => state.categoria);

  const { status, mensagem, listaProdutos } = useSelector(
    (state) => state.produto
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarCategorias());
  }, [dispatch]);

  function selecionaCategoria(e) {
    const componente = e.currentTarget;
    setProduto({
      ...produto,
      fornecedorId: {
        codigo: componente.value,
        descricao: componente.options[componente.selectedIndex].text,
      },
    });
  }

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setProduto({
      ...produto,
      [componente.name]: componente.value,
    });
  }
  function selecionaCategoria(e) {
    const componente = e.currentTarget;
    setProduto({
      ...produto,
      categoria: {
        cat_codigo: componente.value,
        cat_nome: componente.options[componente.selectedIndex].text,
      },
    });
  }
  const limparDados = () => {
    setProduto(ProdutoVazio);
    props.setModoEdicao(false);
    props.setProdutoParaEdicao(ProdutoVazio);
    setValidated(false);
    props.exibirFormulario(false);
  
  };
  function manipularSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        dispatch(incluirProduto(produto));
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      } else {
        dispatch(atualizarProduto(produto));
        props.setModoEdicao(false);
        props.setProdutoParaEdicao(ProdutoVazio);
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      }
      setProduto(ProdutoVazio);
      setValidated(false);
    } else {
      setValidated(true);
    }
    e.stopPropagation();
    e.preventDefault();
  }
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
              <FloatingLabel label="Nome do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do produto"
                  name="nome"
                  value={produto.nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Descrição:" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição do produto"
                  name="descricao"
                  value={produto.descricao}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a descrição do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Preco:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço do produto"
                  name="preco"
                  value={produto.preco}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o preço do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Quantidade em Estoque:" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Informe a quantidade em estoque"
                  name="estoque"
                  value={produto.estoque}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a quantidade em estoque!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FloatingLabel controlId="floatingSelect" label="Categoria:">
              <Form.Select
                aria-label="Categoria dos produtos"
                id="categoria"
                name="categoria"
                onChange={selecionaCategoria}
                value={produto.categoria.cat_codigo}
                style={{ backgroundColor: "#020202", color: "#f0f0f0" }}
                required
              >
                <option value='0' defaultValue>
                  Selecione uma categoria
                </option>
                {listaCategorias?.map((listaCategorias) => (
                  <option
                    key={listaCategorias.cat_codigo}
                    value={listaCategorias.cat_codigo} 
                  >
                    {listaCategorias.cat_nome}
                  </option>
                ))}
              </Form.Select>
              {estadoCat === ESTADO.PENDENTE ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">
                    Carregando listaCategorias...
                  </span>
                </Spinner>
              ) : null}
              {estadoCat === ESTADO.ERRO ? (
                <p>Erro ao carregar as categorias: {mensagemCat}</p>
              ) : null}
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              {props.modoEdicao ? "Alterar" : "Cadastrar"}
            </Button>

            <Button
              type="button"
              variant={"secondary"}
              onClick={limparDados}
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
 }
}
