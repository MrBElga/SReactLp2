import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";

import Pagina from "../templates/Pagina";

export default function TelaCadastroProduto(props) {
  const [exibirFormulario, setExibirFormulario] = useState(true);
  const [produtosCadastrados, setProdutosCadastrados] = useState([]);
  
  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };


  useEffect(() => {
    
  }, [produtosCadastrados]);

  return (
    <>
      <Pagina>
        <Container>
          {exibirFormulario ? (
            <FormCadProduto produtos={produtosCadastrados} setProdutos={setProdutosCadastrados} />
          ) : (
            <TabelaProdutos produtos={produtosCadastrados} />
          )}
          <Button onClick={toggleFormulario}>
            {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
          </Button>
        </Container>
      </Pagina>
    </>
  );
}
