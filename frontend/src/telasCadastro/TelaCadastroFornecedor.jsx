import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedores";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroFornecedor(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [fornecedorParaEdicao, setFornecedorPAraEdicao] = useState({
    nome:"",
    cnpj: "",
    email: "",
    telefone: "",
    celular: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "SP",
    cep: ""
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <>
      <Pagina>
        <Container className="container-centralizadoTelas">
          {exibirFormulario ? (
            <FormCadFornecedor
              exibirFormulario={setExibirFormulario}
              listaFornecedores={listaFornecedores}
              setListaFornecedores={setListaFornecedores}
              fornecedorParaEdicao={fornecedorParaEdicao}
              setFornecedorPAraEdicao={setFornecedorPAraEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          ) : (
            <TabelaFornecedor
              exibirFormulario={setExibirFormulario}
              listaFornecedores={listaFornecedores}
              setListaFornecedores={setListaFornecedores}
              fornecedorParaEdicao={fornecedorParaEdicao}
              setFornecedorPAraEdicao={setFornecedorPAraEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Container>
      </Pagina>
    </>
  );
}
