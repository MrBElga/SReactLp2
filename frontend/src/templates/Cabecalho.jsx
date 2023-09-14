import "./estilo.css"; 

const estiloRodape = {
  backgroundColor: 'rgba(68, 68, 68, 0.747)',
  color: '#b3ecff',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '20px',
  textAlign: 'center',
};

export default function Cabecalho(props) {
  return (
    <header style={estiloRodape}>
      <div>
        {props.conteudo || "Sistema"}
      </div>
    </header>
  );
}
