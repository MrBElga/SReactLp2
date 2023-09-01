import React from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadProduto(props) {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Nome do Produto:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do produto"
                  id="nomeProduto"
                  name="nomeProduto"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome do produto!
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
                  placeholder="Informe a descrição do produto"
                  id="descricao"
                  name="descricao"
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a descrição do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Preço:"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço do produto"
                  id="preco"
                  name="preco"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o preço do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Quantidade em Estoque:"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Informe a quantidade em estoque"
                  id="quantidade"
                  name="quantidade"
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
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Tipo de Produto:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o tipo de produto"
                  id="tipoProduto"
                  name="tipoProduto"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o tipo de produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Número de Identificação:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o número de identificação"
                  id="numeroIdentificacao"
                  name="numeroIdentificacao"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o número de identificação!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Custo Unitário:"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o custo unitário"
                  id="custoUnitario"
                  name="custoUnitario"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o custo unitário!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Preço de Venda:"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço de venda"
                  id="precoVenda"
                  name="precoVenda"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o preço de venda!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Nome do Fornecedor:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do fornecedor"
                  id="nomeFornecedor"
                  name="nomeFornecedor"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome do fornecedor!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} offset={5} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              Cadastrar
            </Button>
          </Col>
          <Col md={6} offset={5}>
            <Button type="button" variant={"secondary"}>
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
