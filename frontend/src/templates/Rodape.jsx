import React from 'react';
import "./estilo.css"; 

export default function Rodape(props) {
  return (
    <footer className='rodape'>
      <div>
        {props.conteudo}
      </div>
    </footer>
  );
}
