import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroCliente(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaClientes, setListaClientes] = useState([]);
  const [clienteParaEdicao, setClienteParaEdicao] = useState({
    cpf: '',
    nome: '',
    email: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: 'SP',
    cep: ''
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <>
      <Pagina>
        <Container className="container-centralizadoTelas">
          {exibirFormulario ? (
            <FormCadCliente
              exibirFormulario={setExibirFormulario} 
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
              clienteParaEdicao={clienteParaEdicao}
              setClienteParaEdicao={setClienteParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          ) : (
            <TabelaClientes
              exibirFormulario={setExibirFormulario} 
              listaClientes={listaClientes}
              setListaClientes={setListaClientes}
              clienteParaEdicao={clienteParaEdicao}
              setClienteParaEdicao={setClienteParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
          
        </Container>
      </Pagina>
    </>
  );
}
