import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaCadastroCliente from './telasCadastro/TelaCadastroCliente';
import TelaCadastroFornecedor from './telasCadastro/TelaCadastroFornecedor';
import TelaCadastroProduto from './telasCadastro/TelaCadastroProduto';
import TelaCadastroCategoria from './telasCadastro/TelaCadastroCategorias';
import TelaLogin from './login/TelaLogin'
import Tela404 from './telasCadastro/Tela404';
import Pagina from './templates/Pagina';
import Sistema from './Sistema'

function App() {
  return (
    <div>
      <Sistema>
        <Route path='*' element={<Tela404 />}/>
        <Route path='/' element={<Pagina />}/>
        <Route path='/login' element={<TelaLogin />}/>
        <Route path="/cliente" element={<TelaCadastroCliente />} />
        <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
        <Route path="/produto" element={<TelaCadastroProduto />} />
        <Route path="/categoria" element={<TelaCadastroCategoria />} />
        
      </Sistema>
    </div>
  );
}

export default App;
