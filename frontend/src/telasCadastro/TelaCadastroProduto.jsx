import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import Cabecalho from "../templates/Cabecalho";
import Rodape from "../templates/Rodape";
import Menu from "../templates/Menu";
export default function TelaCadastroProduto(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Cabecalho conteudo='Sistema de Gestão Comercial' />
    <Menu />
    <Container>
      {exibirFormulario ? <FormCadProduto /> : <TabelaProdutos />}
      <Button onClick={toggleFormulario}>
        {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
      </Button>
    </Container>
    <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
    </>
  );

}
