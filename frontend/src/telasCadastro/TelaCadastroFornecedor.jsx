import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedores";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroFornecedor(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Pagina>
        <Container className="container-centralizadoTelas">
          {exibirFormulario ? <FormCadFornecedor /> : <TabelaFornecedor />}
          <Button onClick={toggleFormulario}>
            {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
          </Button>
        </Container>
    </Pagina>
 
    </>
  );
}
