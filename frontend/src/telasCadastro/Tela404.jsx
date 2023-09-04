import React, { useState } from "react";
import { Container, Button,Alert } from "react-bootstrap";
import Cabecalho from "../templates/Cabecalho";
import Rodape from "../templates/Rodape";
import Menu from "../templates/Menu";

const estiloRodape = {
    padding: '10px', 
    borderRadius: '5px', 
    marginTop: '20px', 
    textAlign: 'center', 
};

export default function Tela404(props) {
  return (
    <>
    <Cabecalho conteudo ='Sistema de Gestão Comercial' />
    <Menu />
    <Container style={estiloRodape}>
    <Alert variant="danger"> 
           PAGINA NÃO ENCONTRAdA!!
        </Alert>    
    </Container>
    <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
    </>
  );
}
