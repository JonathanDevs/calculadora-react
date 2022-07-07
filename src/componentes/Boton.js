import React from 'react';
import '../stylesheet/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');// eslint-disable-next-line
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
// error en consola Boton.js:13 Uncaught TypeError: props.manejarClic is not a function
//    at onClick (Boton.js:13:1)