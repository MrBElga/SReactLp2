import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaCadastroCliente from './telasCadastro/TelaCadastroCliente';
import TelaCadastroFornecedor from './telasCadastro/TelaCadastroFornecedor';
import ContextoUsuario from "./contextos/ContextoGlobal";
import TelaCadastroProduto from './telasCadastro/TelaCadastroProduto';
import TelaCadastroCategoria from './telasCadastro/TelaCadastroCategorias';
import TelaLogin from './login/TelaLogin';
import Tela404 from './telasCadastro/Tela404';
import Pagina from './templates/Pagina';
import Home from './homePage/homePage'
import Conta from './conta/conta.jsx';
import Forum from './forum/forum.jsx';
import Sistema from './Sistema';
import store from "./redux/store";
import { Provider } from "react-redux";
import avatarNaoLogado from './templates/Image/SAO_icons/SAO_Icons_v3.300/1_Menu-1/Man.svg';

function App() {
  const [usuario, setUsuario] = useState({
    nome: "",
    avatar: avatarNaoLogado,
    senha: "",
    level: "",
    progesso:"",

    prior: 1,
    logado: false
  });

 
    return (
      <Provider store={store}>
        <ContextoUsuario.Provider value={[usuario, setUsuario]}>
          <BrowserRouter>
            <Routes>
              {!usuario.logado ? (
                <>
                  <Route path="/login" element={<TelaLogin />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </>
              ) : (
                <>
                  <Route path="/login" element={<Navigate to="/home" />} />
                  <Route path="/conta" element={<Conta />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/cliente" element={<TelaCadastroCliente />} />
                  <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
                  <Route path="/produto" element={<TelaCadastroProduto />} />
                  <Route path="/categoria" element={<TelaCadastroCategoria />} />
                
                  <Route path="*" element={<Tela404 />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </ContextoUsuario.Provider>
      </Provider>
    );
}

export default App;