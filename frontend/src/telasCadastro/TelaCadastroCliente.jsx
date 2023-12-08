import React, { useState,useEffect } from "react";
import { Container,Alert } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroCliente(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [exibirAlert, setExibirAlert] = useState(false);
  const [clienteParaEdicao, setClienteParaEdicao] = useState({
    cli_cpf: "",
    cli_nome: "",
    cli_email: "",
    cli_endereco: "",
    cli_numero: "",
    cli_bairro: "",
    cli_cidade: "",
    cli_uf: "SP",
    cli_cep: "",
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
            <FormCadCliente
              exibirFormulario={setExibirFormulario}
              clienteParaEdicao={clienteParaEdicao}
              setClienteParaEdicao={setClienteParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              exibirAlert={exibirAlert}
              setExibirAlert={setExibirAlert}
            />
          ) : (
            <TabelaClientes
              exibirFormulario={setExibirFormulario} 
              clienteParaEdicao={clienteParaEdicao}
              setClienteParaEdicao={setClienteParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
          {
            exibirAlert&&( <Alert variant="success">
                            Cliente cadastrada com sucesso!!
                          </Alert>)
          }
        </Container>
       
      </Pagina>
    </>
  );
}
