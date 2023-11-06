import React from "react";
import { Container } from "react-bootstrap";
import "../telasCadastro/tela.css";
import FormLogin from "./FormLogin";
import Pagina from "../templates/Pagina";

export default function TelaCadastroCategoria(props) {
  return (
    <>
    
    <Pagina>import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import "./login.css";

export default function LoginForm(props) {
  const [formData, setFormData] = useState({
    nickName: "",
    senha: "",
    classe: "Espadachins", // Classe padrão
  });
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() && formData.nickName.trim() !== "" && formData.senha.trim() !== "") {
      // Realize a lógica de login aqui
      setValidated(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <Container className="login-container" style={{ margin: 0 }}>
      <div className="container border m-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <fieldset>
            <legend style={{ color: "#b3ecff" }}>Login</legend>

            <Row className="rowLogin">
              <Col md={10}>
                <Form.Group controlId="nickName">
                  <Form.Label>NICKNAME:</Form.Label>
                  <Form.Control
                    type="text"
                    name="nickName"
                    value={formData.nickName}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Insira o nickname.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="rowLogin">
              <Col md={10}>
                <Form.Group controlId="senha">
                  <Form.Label>SENHA:</Form.Label>
                  <Form.Control
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Insira a senha.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="rowLogin">
              <Col md={10}>
                <Form.Group controlId="classe">
                  <Form.Label>Escolha sua classe:</Form.Label>
                  <Form.Control
                    as="select"
                    name="classe"
                    value={formData.classe}
                    onChange={handleInputChange}
                  >
                    <option value="Espadachins">Espadachins</option>
                    <option value="Ferreiro">Ferreiro</option>
                    <option value="Domador de animais">Domador de animais</option>
                    <option value="Cavaleiro">Cavaleiro</option>
                    <option value="Paladinos">Paladinos</option>
                    <option value="Comerciante">Comerciante</option>
                    <option value="Assassino">Assassino</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            {showError && (
              <Alert variant="danger">Usuário ou senha inválidos.</Alert>
            )}

            <Row className="rowLogin">
              <Col>
                <Button type="submit" variant="info">
                  LOGIN
                </Button>
              </Col>
            </Row>
          </fieldset>
        </Form>
      </div>
    </Container>
  );
}

      <Container className="container-centralizadoLogin ">
            <FormLogin/>
      </Container>
    </Pagina>
    </>
  );
}
