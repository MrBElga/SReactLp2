import { Alert } from "react-bootstrap";

export default function Rodape(props){
    return (
        <footer>
            <div style={{
                            border:'1px solid black',
                            borderRadius:'5px',
                            padding:'5px',
                            margin:'3px',
                        }}>
                <p>{props.conteudo||"Rodapé do sistema."}</p>
            </div>
        </footer>
    )
}