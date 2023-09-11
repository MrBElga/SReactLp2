import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import Pagina from "../templates/Pagina";


export default function TelaCadastroCliente(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Pagina>
      <Container>
        {exibirFormulario ? <FormCadCliente /> : <TabelaClientes />}
        <Button onClick={toggleFormulario}>
          {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
        </Button>
      </Container>
    </Pagina>
   
  
    </>
  );
}
