import React from "react";
import { Container, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

export default function FormCadFornecedor(props) {
  return (
    <Container>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Contato:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o nome de contato"
                  id="contato"
                  name="contato"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome de contato!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        
          <Col md={6}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Email:"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Informe o email"
                  id="email"
                  name="email"
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe um email válido!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
    
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Telefone:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="(00) 0000-0000"
                  id="telefone"
                  name="telefone"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Celular:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="(00) 00000-0000"
                  id="celular"
                  name="celular"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Endereço:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Avenida/Rua/Alameda/Viela ..."
                  id="endereco"
                  name="endereco"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Número"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Nº"
                  id="numero"
                  name="numero"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Bairro:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Bairro/Vila..."
                  id="bairro"
                  name="bairro"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Cidade"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Cidade"
                  id="cidade"
                  name="cidade"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select aria-label="Unidades Federativas brasileiras">
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="CEP:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="CEP"
                  id="cep"
                  name="cep"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
    
        <Row>
          <Col md={6} offset={5} className="d-flex justify-content-end">
            <Button type="submit" variant="primary">
              Cadastrar
            </Button>
          </Col>
          <Col md={6} offset={5}>
            <Button type="button" variant="secondary">
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
