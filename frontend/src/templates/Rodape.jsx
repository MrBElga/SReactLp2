import React from 'react';
import "./estilo.css"; // Import your custom styles if needed

const estiloRodape = {
  backgroundColor: 'rgba(68, 68, 68, 0.747)',
  color: '#b3ecff',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '20px',
  textAlign: 'center',
};

export default function Rodape(props) {
  return (
    <footer style={estiloRodape}>
      <div>
        {props.conteudo}
      </div>
    </footer>
  );
}
