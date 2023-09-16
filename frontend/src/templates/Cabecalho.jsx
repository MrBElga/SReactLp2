import React, { useState, useEffect } from "react";
import "./estilo.css";

const estiloRodape = {
  backgroundColor: "rgba(68, 68, 68, 0.747)",
  color: "#b3ecff",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "20px",
  textAlign: "center",
};

const titulos = ["Explorando Aincrad", "Mundo de Sword Art Online"];

export default function Cabecalho(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [tituloIndex, setTituloIndex] = useState(0);

  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    
    const intervalId = setInterval(() => {
      setTituloIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);


    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header
      style={{ ...estiloRodape, opacity: isVisible ? 1 : 0 }}
      className={`cabecalho-animado ${isVisible ? "visible" : ""}`}
    >
      <div>{titulos[tituloIndex]}</div>
    </header>
  );
}
