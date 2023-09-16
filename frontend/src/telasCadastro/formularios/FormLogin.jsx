import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./login.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    nickName: "",
    senha: ""
  });

  const [validated, setValidated] = useState(false);

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
    if (form.checkValidity()) {
  
      console.log("Form is valid. Submitting data:", formData);
    }
    setValidated(true);
  };

  return (
    <Container className="login-container">
      <div className="container border m-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <fieldset>
            <legend style={{ color: "#b3ecff" }}>Login</legend>

            <Row>
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
                    insira o nickname.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
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
                    insira a senha.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row >
              <Col >
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
