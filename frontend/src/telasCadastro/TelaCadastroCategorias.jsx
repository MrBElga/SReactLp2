import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import Cabecalho from "../templates/Cabecalho";
import Rodape from "../templates/Rodape";
import Menu from "../templates/Menu";

export default function TelaCadastroCategoria(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Cabecalho conteudo='Sistema de Gestão Comercial' />
    <Menu />
    <Container>
      {exibirFormulario ? <FormCadCategoria /> : <TabelaCategorias />}
      <Button onClick={toggleFormulario}>
        {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
      </Button>
    </Container>
    <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
    </>
  );
}
