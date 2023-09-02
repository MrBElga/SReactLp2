import "./estilo.css"; 

const estiloRodape = {
    backgroundColor: '#343a40', 
    color: '#fff',
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
