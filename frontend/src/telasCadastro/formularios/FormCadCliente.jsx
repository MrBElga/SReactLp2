import React, { useState } from "react";
import "./form.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Alert,
} from "react-bootstrap";

export default function FormCadCliente(props) {
  const estadoInicialCliente = props.clienteParaEdicao;

  const clienteVazio = {
    cpf: "",
    nome: "",
    email: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "SP",
    cep: "",
  };
  const [cliente, setCliente] = useState(estadoInicialCliente);
  const [validated, setValidated] = useState(false);
  const [cpfError, setCpfError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showAlertErro, setShowAlertErro] = useState(false);



  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setCliente({
      ...cliente,
      [componente.name]: componente.value,
    });
  }

  function verificarExistenciaCPF(cpf) {
    return props.listaClientes.some((itemCliente) => itemCliente.cpf === cpf);
  }

  function verificarExistenciaEmail(email) {
    return props.listaClientes.some((itemCliente) => itemCliente.email === email);
  }

  function manipularSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setCpfError("");
      setEmailError("");

      if (props.modoEdicao) {
        props.setListaClientes([
          ...props.listaClientes.filter(
            (itemCliente) => itemCliente.cpf !== cliente.cpf
          ),
          cliente,
        ]);
        props.setModoEdicao(false);
        props.setClienteParaEdicao(clienteVazio);
        setCliente(clienteVazio);
        props.setExibirAlert(true);
      } else {
        if (verificarExistenciaCPF(cliente.cpf)) {
          setCpfError("CPF já cadastrado!");
          setShowAlertErro(true);
          setValidated(false);
        } else if (verificarExistenciaEmail(cliente.email)) {
          setEmailError("Email já cadastrado!");
          setShowAlertErro(true);
          setValidated(false);
        } else {
          props.setListaClientes([...props.listaClientes, cliente]);
          setCliente(clienteVazio);
          setValidated(false);
          setShowAlertErro(false);
          props.setExibirAlert(true);
          props.exibirFormulario(false);
        }
      }
    } else {
      setValidated(true);
    }

    e.stopPropagation();
    e.preventDefault();
  }

    return (
      <Container  className="container">
        <Form noValidate validated={validated} onSubmit={manipularSubmit}>
          <Row>
            <Col md={5}>
              <Form.Group>
                <FloatingLabel label="cpf:" className="mb-3">
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
                <FloatingLabel label="email:" className="mb-3">
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
                <FloatingLabel label="Nome Completo:" className="mb-3">
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
                <FloatingLabel label="Endereço:" className="mb-3">
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
                <FloatingLabel label="Número" className="mb-3">
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
                <FloatingLabel label="Bairro:" className="mb-3">
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
                <FloatingLabel label="Cidade" className="mb-3">
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
                <FloatingLabel label="UF:">
                  <Form.Select
                    className="divEstilo"
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
          <Row className="Row">
            <Col md={4}>
              <Form.Group>
                <FloatingLabel label="CEP:" className="mb-3">
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
          <Row className="Row">
            <Col md={6} className="d-flex justify-content-end">
              <Button type="submit" variant={"primary"}>
                {props.modoEdicao ? "Alterar" : "Cadastrar"}
              </Button>
          
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => {
                  props.exibirFormulario(false);
                 
                  setShowAlertErro(false)
                }}
              >
                Voltar
              </Button>
            </Col>
          </Row>
       
       {showAlertErro && (
        <Alert variant="danger" onClose={() => setShowAlertErro(false)} dismissible>
          {emailError||cpfError}
        
        </Alert>
      )}
        </Form>

      </Container>
    );
  }
