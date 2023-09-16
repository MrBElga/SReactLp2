import React from "react";
import { Container, Alert } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function Tela404(props) {
  return (
    <>
      <Pagina>
        <Container className="container-centralizado">
          <Alert variant="info">
            PÁGINA NÃO ENCONTRADA!!
          </Alert>
        </Container>
      </Pagina>
    </>
  );
}
