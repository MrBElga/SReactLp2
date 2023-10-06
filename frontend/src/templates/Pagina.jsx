import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";


export default function Pagina(props) {
    return (
        <>
            <Cabecalho  />
            <Menu />
            <div >
                {
                  
                }
                {props.children} 
            </div>
            <Rodape conteudo="Rua Avenida Doutora Ruth Cardoso, 101 - Bairro Pinheiros - São Paulo/SP - CNPJ 59.143.742/0001-19"/>
        </>
    )
}

