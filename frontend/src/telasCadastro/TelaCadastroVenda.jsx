import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import FormCadVenda from "./formularios/FormCadVenda";
import TabelaVendas from "./tabelas/TabelaVenda";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroProduto(props) {
  const [exibirFormularioVenda, setExibirFormularioVenda] = useState(false);
  const [exibirAlert, setExibirAlert] = useState(false);
  const [vendasCadastradas, setVendasCadastradas] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [vendaParaEdicao, setVendaParaEdicao] = useState(null);

  const Venda = {
    produto: {
      codigo: 0,
      nome: "",
    },
    cliente: {
      codigo: 0,
      nome: "",
    },
  };
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
          {exibirFormularioVenda ? (
            <FormCadVenda
              exibirFormulario={setExibirFormularioVenda}
              setVendasCadastradas={setVendasCadastradas}
              vendasCadastradas={vendasCadastradas}
              exibirAlert={exibirAlert}
              setExibirAlert={setExibirAlert}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              vendaParaEdicao={vendaParaEdicao}
              setVendaParaEdicao={setVendaParaEdicao}
            />
          ) : (
            <TabelaVendas
              exibirFormulario={setExibirFormularioVenda}
              setVendasCadastradas={setVendasCadastradas}
              vendasCadastradas={vendasCadastradas}
              setModoEdicao={setModoEdicao}
              setVendaParaEdicao={setVendaParaEdicao}
            />
          )}
        </Container>
        {exibirAlert && (
          <Alert variant="success">Venda cadastrada com sucesso!</Alert>
        )}
      </Pagina>
    </>
  );
}
