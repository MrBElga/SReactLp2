import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroProduto(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [produtosCadastrados, setProdutosCadastrados] = useState([]);
  const [produtoParaEdicao, setProdutoParaEdicao] = useState({
    nomeProduto: "",
    descricao: "",
    preco: "",
    quantidade: "",
    tipoProduto: "",
    numeroIdentificacao: "",
    custoUnitario: "",
    precoVenda: "",
    nomeFornecedor: ""
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <>
      <Pagina>
        <Container className="container-centralizadoTelas">
          {exibirFormulario ? (
            <FormCadProduto
              exibirFormulario={setExibirFormulario}
              setProdutosCadastrados={setProdutosCadastrados}
              produtosCadastrados={produtosCadastrados}
              setProdutoParaEdicao={setProdutoParaEdicao}
              produtoParaEdicao={produtoParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          ) : (
            <TabelaProdutos
              exibirFormulario={setExibirFormulario}
              setProdutosCadastrados={setProdutosCadastrados}
              produtosCadastrados={produtosCadastrados}
              setProdutoParaEdicao={setProdutoParaEdicao}
              produtoParaEdicao={produtoParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Container>
      </Pagina>
    </>
  );
}
