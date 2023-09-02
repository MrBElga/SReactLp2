import React from "react";
import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

export default function FormCadCategoria(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="nomeCategoria"
                label="Nome da Categoria:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o nome da categoria"
                  name="nomeCategoria"
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
            <Button type="submit" variant="primary">
              Cadastrar
            </Button>
          </Col>
          <Col md={6}>
            <Button type="button" variant="secondary">
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
