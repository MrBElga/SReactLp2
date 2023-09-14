import React from "react";
import { Container,Alert } from "react-bootstrap";
import Pagina from "../templates/Pagina"


const estiloRodape = {
    padding: '10px', 
    borderRadius: '5px', 
    marginTop: '20px', 
    textAlign: 'center', 
};

export default function Tela404(props) {
  return (
    <>
    <Pagina>
        <Container style={estiloRodape}>
        <Alert variant="danger"> 
              PAGINA NÃO ENCONTRAdA!!
            </Alert>    
        </Container>
    </Pagina>
    </>
  );
}
