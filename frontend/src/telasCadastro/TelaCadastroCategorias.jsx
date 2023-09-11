import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import Pagina from "../templates/Pagina";

export default function TelaCadastroCategoria(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Pagina>
        <Container>
          {exibirFormulario ? <FormCadCategoria /> : <TabelaCategorias />}
          <Button onClick={toggleFormulario}>
            {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
          </Button>
        </Container>
    </Pagina>
  
    </>
  );
}
