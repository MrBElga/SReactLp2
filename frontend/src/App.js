import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaCadastroCliente from './telasCadastro/TelaCadastroCliente';
import TelaCadastroFornecedor from './telasCadastro/TelaCadastroFornecedor';
import ContextoUsuario from "./contextos/ContextoGlobal";
import TelaCadastroProduto from './telasCadastro/TelaCadastroProduto';
import TelaCadastroCategoria from './telasCadastro/TelaCadastroCategorias';
import TelaLogin from './login/TelaLogin'
import Tela404 from './telasCadastro/Tela404';
import Pagina from './templates/Pagina';
import Sistema from './Sistema'
import avatarNaoLogado from './templates/Image/SAO_icons/SAO_Icons_v3.300/1_Menu-1/Man.svg';


function App() {
  const [usuario, setUsuario] = useState({
    nome: "",
    avatar: avatarNaoLogado,
    logado: false
  });


  if(!usuario.logado)
  {
    return(
      <ContextoUsuario.Provider value={[usuario, setUsuario]}>
      <Sistema>
        <Route path='/login' element={<TelaLogin/>}/>
        <Route path='*' element={<Tela404 />}/>
      </Sistema>
      </ContextoUsuario.Provider>
    );
  }
  else
  {
    return (
      <div>
        <Sistema>
          <Route path='/SReactLp2' element={<Pagina />}/>  
          <Route path='*' element={<Tela404 />}/>
          <Route path='/home' element={<Pagina />}/>
          <Route path="/cliente" element={<TelaCadastroCliente />} />
          <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
          <Route path="/produto" element={<TelaCadastroProduto />} />
          <Route path="/categoria" element={<TelaCadastroCategoria />} />
        </Sistema>
      </div>
    );
  }
}

export default App;
