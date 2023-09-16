import React from 'react';
import "./estilo.css"; // Import your custom styles if needed



export default function Rodape(props) {
  return (
    <footer className='rodape'>
      <div>
        {props.conteudo}
      </div>
    </footer>
  );
}
