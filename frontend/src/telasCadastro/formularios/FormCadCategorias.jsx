import React, { useState } from "react";
import { Container, Form, Row, Col, FloatingLabel, Button, Alert } from "react-bootstrap";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";
import { adicionar, atualizar } from "../../redux/categoriaReducer";

export default function FormCadCategoria(props) {
  const categoriaIn = props.categoriaParaEdicao;
  const categoriaVazia = {
    nomeCategoria:"",
    descricao:"",
  };
  const [categoria, setCategoria] = useState(categoriaIn);
  const [validated, setValidated] = useState(false);
  const [categoriaDuplicada, setCategoriaDuplicada] = useState(false); 
  const { status, mendagem, listaCategorias } = useSelector((state) => state.categoria);
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setCategoria({
      ...categoria,
      [componente.name]: componente.value,
    });
  }

  function manipularSubmit(e) {
    const form = e.currentTarget;

    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        if (listaCategorias.some(itemCategoria => itemCategoria.nomeCategoria === categoria.nomeCategoria)) {
     
          setCategoriaDuplicada(true);
        } else {
          dispatch(adicionar(categoria));
          props.setExibirAlert(true);
          props.exibirFormulario(false);
        }
      } else {
        dispatch(atualizar(categoria));
        props.setModoEdicao(false);
     
        props.setCategoriaParaEdicao({
          nomeCategoria: "",
          descricao: ""
        });
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      }
  
      setCategoria(categoriaIn);
      setValidated(false);
    } else {
      setValidated(true);
    }
    
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={manipularSubmit}>
       
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome da Categoria:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome da categoria"
                  name="nomeCategoria"
                  value={categoria.nomeCategoria}
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
              <FloatingLabel
                controlId="descricao"
                label="Descrição:"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição da categoria"
                  name="descricao"
                  value={categoria.descricao}
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
              onClick={() => {
                props.exibirFormulario(false);
              }}
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
}