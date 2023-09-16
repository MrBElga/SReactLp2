import React from "react";
import { Container } from "react-bootstrap";
import "./tela.css";
import FormLogin from "./formularios/FormLogin";
import Pagina from "../templates/Pagina";

export default function TelaCadastroCategoria(props) {
  return (
    <>
    
    <Pagina>
      <Container className="container-centralizadoLogin ">
            <FormLogin/>
      </Container>
    </Pagina>
    </>
  );
}
