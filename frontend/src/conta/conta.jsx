import React, { useContext } from 'react';
import { LinearProgress, Typography } from '@mui/material';
import './conta.css';
import ContextoUsuario from '../contextos/ContextoGlobal';
import Pagina from '../templates/Pagina';
import avatarProvisorio from '../templates/Image/SAO_icons/SAO_Icons_v3.300/1_Menu-1/Man_on.svg';

function Conta() {
  const [usuario] = useContext(ContextoUsuario);

  const censurarSenha = (senha) => {
    return '*'.repeat(senha.length);
  };

 
  const xpAtual = 200; 
  const xpProximoNivel = 500; 

  const progressoXPAtual = (xpAtual / xpProximoNivel) * 100;
  const progressoXPProximoNivel = 10;

 
  const nivelAtual = Math.floor(xpAtual / 100); 
  const proximoNivel = nivelAtual + 1;

  
  let corXPAtual = '';
  let corXPProximoNivel = '';

  if (progressoXPAtual <= 10) {
    corXPAtual = 'red';
  } else if (progressoXPAtual  <= 35) {
    corXPAtual = 'yellow';
  } else {
    corXPAtual = 'green';
  }

  if (progressoXPProximoNivel  <=10) {
    corXPProximoNivel = 'red';
  } else if (progressoXPProximoNivel  <= 35) {
    corXPProximoNivel = 'yellow';
  } else {
    corXPProximoNivel = 'green';
  }

  return (
    <Pagina>
      <div className="pagina-conta">
        <div className="info-usuario" >
          <h2>Minha Conta</h2>
          <img src={avatarProvisorio} alt="Avatar" className="avatar" />
          <p>Nome: {usuario.nome}</p>
          <p>Senha: {censurarSenha(usuario.senha)}</p>
          <p>Classe: Guerreiro</p>
          <Typography variant="body2">Nível: {nivelAtual}</Typography>
          <Typography variant="body2">XP: {progressoXPAtual.toFixed(2)}%</Typography>
          <LinearProgress variant="determinate" value={progressoXPAtual} sx={{ backgroundColor: 'transparent', height: '10px', borderRadius: '5px', '& .MuiLinearProgress-bar': { backgroundColor: corXPAtual, border: '1px solid black' } }} />
          <Typography variant="body2">Progresso do Jogo: {progressoXPProximoNivel.toFixed(2)}%</Typography>
          <LinearProgress variant="determinate" value={progressoXPProximoNivel} sx={{ backgroundColor: 'transparent', height: '10px', borderRadius: '5px', '& .MuiLinearProgress-bar': { backgroundColor: corXPProximoNivel, border: '1px solid black' } }} />
          <p>Itens:</p>
        </div>
      </div>
    </Pagina>
  );
}

export default Conta;
