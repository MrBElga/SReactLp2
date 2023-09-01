import React from "react";
import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

export default function FormCadCategoria(props) {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Nome da Categoria:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o nome da categoria"
                  id="nomeCategoria"
                  name="nomeCategoria"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome da categoria!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Descrição:"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição da categoria"
                  id="descricao"
                  name="descricao"
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a descrição da categoria!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
                  <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"}>Voltar</Button>
                    </Col>
        </Row>
      </Form>
    </Container>
  );
}
