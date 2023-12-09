import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, FloatingLabel, Button, Alert,Spinner } from "react-bootstrap";
import "./form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { incluirCategoria, atualizarCategoria } from "../../redux/categoriaReducer";
import ESTADO from '../../recurso/estado';

const FormCadCategoria = (props) => {
  const categoriaIn = props.categoriaParaEdicao;
  const categoriaVazia = {
    cat_codigo: 0,
    cat_nome: "",
    cat_descricao: "",
  };
  const [categoria, setCategoria] = useState(categoriaIn);
  const [validated, setValidated] = useState(false);
  const [categoriaDuplicada, setCategoriaDuplicada] = useState(false);
  const { status, mensagem, listaCategorias } = useSelector((state) => state.categoria);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategoria(props.categoriaParaEdicao);
  }, [props.categoriaParaEdicao]);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setCategoria({
      ...categoria,
      [componente.name]: componente.value,
    });
  }
  const limparDados = () => {
    setCategoria(categoriaVazia);
    props.setModoEdicao(false);
    props.setCategoriaParaEdicao(categoriaVazia);
    setValidated(false);
    props.exibirFormulario(false);
  
  };
  function manipularSubmit(e) {
    const form = e.currentTarget;

    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        if (listaCategorias.some((itemCategoria) => itemCategoria.cat_nome === categoria.cat_nome)) {
          setCategoriaDuplicada(true);
        } else {
          dispatch(incluirCategoria(categoria));
          props.setExibirAlert(true);
          props.exibirFormulario(false);
  
        }
      } else {
        dispatch(atualizarCategoria(categoria));
        props.setModoEdicao(false);
        props.setCategoriaParaEdicao(categoriaVazia);
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      }

      setCategoria(categoriaVazia);
      setValidated(false);
    } else {
      setValidated(true);
    }

    e.stopPropagation();
    e.preventDefault();
  }


  useEffect(() => {
    if (status === ESTADO.PENDENTE) {
      toast(({ closeToast }) => (
        <div>
          <Spinner animation="border" role="status"></Spinner>
          <p>Enviando dados do Categoria....</p>
        </div>
      ));
    } else if (status === ESTADO.ERRO) {
      toast.error(({ closeToast }) => (
        <div>
          <p>{mensagem}</p>
        </div>
      ));
    } else if (status === ESTADO.SUCESSO) {
      toast.dismiss();
    }
  }, [status, mensagem]);
  return (
    <Container>
      <ToastContainer />
      <Form noValidate validated={validated} onSubmit={manipularSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome da Categoria:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome da categoria"
                  name="cat_nome"
                  value={categoria.cat_nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Por favor, informe o nome da categoria.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel controlId="descricao" label="Descrição:" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição da categoria"
                  name="cat_descricao"
                  value={categoria.cat_descricao}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Por favor, informe a descrição da categoria.
              </Form.Control.Feedback>
            </Form.Group>
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
        {categoriaDuplicada && (
          <Alert variant="danger">
            Nome da categoria já existe. Por favor, escolha outro nome.
          </Alert>
        )}
      </Form>
    </Container>
  );
 
};

export default FormCadCategoria;
