import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroProduto(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [exibirAlert, setExibirAlert] = useState(false);
  const [produtosCadastrados, setProdutosCadastrados] = useState([]);
  const [produtoParaEdicao, setProdutoParaEdicao] = useState({
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
    categoria: {
      cat_codigo: 0,
      cat_descricao: "",
      cat_nome: "",
    },
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  const exibirAlertTemporariamente = () => {
    setExibirAlert(true);
    setTimeout(() => {
      setExibirAlert(false);
    }, 3000);
  };

  useEffect(() => {
    if (exibirAlert) {
      exibirAlertTemporariamente();
    }
  }, [exibirAlert]);
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
              exibirAlert={exibirAlert}
              setExibirAlert={setExibirAlert}
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
        {exibirAlert && (
          <Alert variant="success">Produto cadastrada com sucesso!!</Alert>
        )}
      </Pagina>
    </>
  );
}
