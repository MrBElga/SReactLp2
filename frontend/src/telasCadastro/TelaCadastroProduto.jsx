import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import Pagina from "../templates/Pagina";
export default function TelaCadastroProduto(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Pagina>
        <Container>
          {exibirFormulario ? <FormCadProduto /> : <TabelaProdutos />}
          <Button onClick={toggleFormulario}>
            {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
          </Button>
        </Container>
    </Pagina>

    </>
  );

}
