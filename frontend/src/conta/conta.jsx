import React, { useContext } from 'react';
import './conta.css';
import { Link } from 'react-router-dom';
import ContextoUsuario from '../contextos/ContextoGlobal';
import Pagina from '../templates/Pagina'
import avatarProvisorio from '../templates/Image/SAO_icons/SAO_Icons_v3.300/1_Menu-1/Man_on.svg'
function Conta() {
 
  const [usuario] = useContext(ContextoUsuario);

  
  const censurarSenha = (senha) => {
    return '*'.repeat(senha.length); 
  };

  return (
    <Pagina>
        <div className="pagina-conta">
        
        <div className="info-usuario">
            <h2>Minha Conta</h2>
            <img src={avatarProvisorio} alt="Avatar" className="avatar" />
            <p>Nome: {usuario.nome}</p>
            <p>Senha: {censurarSenha(usuario.senha)}</p>
            <p>Classe: Guerreiro</p>
            <p>Nivel: 10</p>
            <p>progesso: 20%</p>
            <p>Itens:</p>
        </div>
        </div>
    </Pagina>
  );
}

export default Conta;
