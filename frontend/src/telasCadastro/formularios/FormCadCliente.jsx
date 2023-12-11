import React, { useState,useEffect } from "react";
import "./form.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incluirCliente, atualizarCliente } from "../../redux/clienteReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ESTADO from "../../recurso/estado.js";

export default function FormCadCliente(props) {
  const estadoInicialCliente = props.clienteParaEdicao;

  const clienteVazio = {
    cli_cpf: "",
    cli_nome: "",
    cli_email: "",
    cli_endereco: "",
    cli_numero: "",
    cli_bairro: "",
    cli_cidade: "",
    cli_uf: "SP",
    cli_cep: "",
  };

  const [cliente, setCliente] = useState(estadoInicialCliente);
  const [validated, setValidated] = useState(false);
  const [cpfError, setCpfError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showAlertErro, setShowAlertErro] = useState(false);
  const { status, mensagem, listaClientes } = useSelector(
    (state) => state.cliente
  );
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setCliente({
      ...cliente,
      [componente.name]: componente.value,
    });
  }

  function verificarExistenciaCPF(cpf) {
    return listaClientes.some((itemCliente) => itemCliente.cpf === cpf);
  }

  function verificarExistenciaEmail(email) {
    return listaClientes.some((itemCliente) => itemCliente.email === email);
  }

  const limparDados = () => {
    setCliente(clienteVazio);
    props.setModoEdicao(false);
    props.setClienteParaEdicao(clienteVazio)
    setValidated(false);
    props.exibirFormulario(false);
  
  };
  function manipularSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setCpfError("");
      setEmailError("");

      if (props.modoEdicao) {
        dispatch(atualizarCliente(cliente));
        props.setModoEdicao(false);
        props.setClienteParaEdicao(clienteVazio);
        setCliente(clienteVazio);
        props.exibirFormulario(false);
        props.setExibirAlert(true);
      } else {
        if (verificarExistenciaCPF(cliente.cli_cpf)) {
          setCpfError("CPF já cadastrado!");
          setShowAlertErro(true);
          setValidated(false);
        } else if (verificarExistenciaEmail(cliente.cli_email)) {
          setEmailError("Email já cadastrado!");
          setShowAlertErro(true);
          setValidated(false);
        } else {
          dispatch(incluirCliente(cliente));
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
            <Col md={5}>
              <Form.Group>
                <FloatingLabel label="cpf:" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="000.000.000-00"
                    name="cli_cpf"
                    value={cliente.cli_cpf}
                    onChange={manipularMudancas}
                    readOnly={props.modoEdicao}
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
                    name="cli_email"
                    value={cliente.cli_email}
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
                    name="cli_nome"
                    value={cliente.cli_nome}
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
                    name="cli_endereco"
                    value={cliente.cli_endereco}
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
                    name="cli_numero"
                    value={cliente.cli_numero}
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
                    name="cli_bairro"
                    value={cliente.cli_bairro}
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
                    name="cli_cidade"
                    value={cliente.cli_cidade}
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
                    name="cli_uf"
                    value={cliente.cli_uf}
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
                    name="cli_cep"
                    value={cliente.cli_cep}
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
                onClick={limparDados}
              >
                Voltar
              </Button>
            </Col>
          </Row>

          {showAlertErro && (
            <Alert
              variant="danger"
              onClose={() => setShowAlertErro(false)}
              dismissible
            >
              {emailError || cpfError}
            </Alert>
          )}
        </Form>
      </Container>
    );
  }
}
