import Pagina from "../templates/Pagina";
import {Alert} from "react-bootstrap";


export default function TelaMensagem(props) {
    return (
        <>
            <Pagina>
         
                <Alert variant = {props.tipo}> 
                    <p>{props.mensagem} </p>
                </Alert>
            </Pagina>
        </>
    )
}

