import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import Cabecalho from "../templates/Cabecalho";
import Rodape from "../templates/Rodape";
import Menu from "../templates/Menu";

export default function TelaCadastroCliente(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <>
    <Cabecalho conteudo='Sistema de Gestão Comercial' />
    <Menu />
    <Container>
      {exibirFormulario ? <FormCadCliente /> : <TabelaClientes />}
      <Button onClick={toggleFormulario}>
        {exibirFormulario ? "Mostrar Tabela" : "Mostrar Formulário"}
      </Button>
    </Container>
    <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
    </>
  );
}
