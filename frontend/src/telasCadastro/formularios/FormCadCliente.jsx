import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

export default function FormCadCliente(props) {
  const clienteInicial = {
    cpf: "",
    email: "",
    nome: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "SP",
    cep: ""
  } 
  const [cliente, setCliente] = useState({clienteInicial});

  function manipularMudancas(e){
    const componente = e.currentTarget;
    setCliente({
      ...cliente,[componente.name]:componente.value
    });
  }

  function manipularSubmit(e){
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Container>
      <Form  onSubmit={manipularSubmit}>
        <Row>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel controlId="cpf" label="CPF:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="000.000.000-00"
                  name="cpf"
                  value={cliente.cpf}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o CPF!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={7}>
            <Form.Group>
              <FloatingLabel controlId="email" label="Email:" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Informe o email"
                  name="email"
                  value={cliente.email}
                  onChange={manipularMudancas}
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
                controlId="nome"
                label="Nome Completo:"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Informe o nome completo"
                  name="nome"
                  value={cliente.nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome!
              </Form.Control.Feedback>
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
                <Form.Control
                  type="text"
                  placeholder="Avenida/Rua/Alameda/Viela ..."
                  name="endereco"
                  value={cliente.endereco}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o endereço!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <FloatingLabel controlId="numero" label="Número" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Nº"
                  name="numero"
                  value={cliente.numero}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o número!
              </Form.Control.Feedback>
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
                <Form.Control
                  type="text"
                  placeholder="Bairro/Vila..."
                  name="bairro"
                  value={cliente.bairro}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o bairro!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel controlId="cidade" label="Cidade" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cidade"
                  name="cidade"
                  value={cliente.cidade}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a cidade!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <FloatingLabel controlId="uf" label="UF:">
                <Form.Select
                  aria-label="Unidades Federativas brasileiras"
                  name="uf"
                  value={cliente.uf} 
                  onChange={manipularMudancas}
                >
                  <option value="SP" selected>
                    São Paulo
                  </option>
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
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel controlId="cep" label="CEP:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="00000-000"
                  name="cep"
                  value={cliente.cep}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o CEP!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              Cadastrar
            </Button>
          </Col>
          <Col md={6}>
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
      </Form>
    </Container>
  );
}
