import React, { useState,useEffect  } from "react";
import { Container,Alert } from "react-bootstrap";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import Pagina from "../templates/Pagina";
import "./tela.css";

export default function TelaCadastroCategoria(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [exibirAlert, setExibirAlert] = useState(false);
  const [listaCategoria, setListaCategoria] = useState([]);
  const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
    nomeCategoria: "",
    descricao: ""
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
            <FormCadCategoria
              exibirFormulario={setExibirFormulario}
              listaCategoria={listaCategoria}
              setListaCategoria={setListaCategoria}
              categoriaParaEdicao={categoriaParaEdicao}
              setCategoriaParaEdicao={setCategoriaParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
              exibirAlert={exibirAlert}
              setExibirAlert={setExibirAlert}
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
        {
          exibirAlert&&( <Alert variant="success">
                          Categoria cadastrada com sucesso!!
                        </Alert>)
        }
      </Pagina>
    </>
  );
}
