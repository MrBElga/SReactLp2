import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroCategoria(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaCategoria, setListaCategoria] = useState([]);
  const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
    nomeCategoria: "",
    descricao: "",
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  return (
    <>
      <Pagina>
        <Container className="container-centralizadoTelas">
          {exibirFormulario ? (
            <FormCadCategoria
              exibirFormulario={setExibirFormulario}
              listaCategoria={listaCategoria}
              setListaCategoria={setListaCategoria}
              categoriaParaEdicao={categoriaParaEdicao}
              setCategoriaParaEdicao={setCategoriaParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          ) : (
            <TabelaCategorias
              exibirFormulario={setExibirFormulario}
              listaCategoria={listaCategoria}
              setListaCategoria={setListaCategoria}
              categoriaParaEdicao={categoriaParaEdicao}
              setCategoriaParaEdicao={setCategoriaParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Container>
      </Pagina>
    </>
  );
}
