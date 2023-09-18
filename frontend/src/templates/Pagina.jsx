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
            <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
        </>
    )
}

