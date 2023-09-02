import React from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadCliente(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione o código para lidar com o envio do formulário aqui
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel
                controlId="cpf"
                label="CPF:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="000.000.000-00" name="cpf" required />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o CPF!</Form.Control.Feedback>
            </Form.Group>
          </Col>
         
          <Col md={7}>
            <Form.Group>
              <FloatingLabel
                controlId="email"
                label="Email:"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Informe o email" name="email" />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe um email válido!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="nome"
                label="Nome Completo:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Informe o nome completo" name="nome" required />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Group>
              <FloatingLabel
                controlId="endereco"
                label="Endereço:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela ..." name="endereco" />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <FloatingLabel
                controlId="numero"
                label="Número"
                className="mb-3"
              >
                <Form.Control type="number" placeholder="Nº" name="numero" />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel
                controlId="bairro"
                label="Bairro:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Bairro/Vila..." name="bairro" />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel
                controlId="cidade"
                label="Cidade"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Cidade" name="cidade" />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <FloatingLabel controlId="uf" label="UF:">
                <Form.Select aria-label="Unidades Federativas brasileiras" name="uf">
                  <option value="SP" selected>São Paulo</option>
                  {/* ... outras opções de UF ... */}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel
                controlId="cep"
                label="CEP:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="00000-000" name="cep" />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o CEP!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>Cadastrar</Button>
          </Col>
          <Col md={6}>
            <Button type="button" variant={"secondary"}>Voltar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
