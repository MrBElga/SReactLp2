//import { useState } from "react";
import { createContext } from "react";

const ContextoUsuario = createContext();

export default ContextoUsuario;

//Outra abordagem
/* function ComponenteContextoUsuario(props){
    const [usuario,setUsuario] = useState();
    return (
        <ContextoUsuario.Provider value={[usuario,setUsuario]}>
            {props.children}
        </ContextoUsuario.Provider>
    );
} */