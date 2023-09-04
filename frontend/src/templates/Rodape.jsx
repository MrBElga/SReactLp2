import React from 'react';

export default function Rodape(props) {
    const estiloRodape = {
        backgroundColor: '#dfdede', 
        color: '#fff',
        padding: '10px', 
        borderRadius: '5px', 
        marginTop: '20px', 
        textAlign: 'center', 
    };

    return (
        <footer>
            <div style={estiloRodape}>
                <p>{props.conteudo || "Rodapé do sistema."}</p>
            </div>
        </footer>
    );
}
