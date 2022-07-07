import React from 'react';
import '../stylesheet/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');// eslint-disable-next-line
  };

  /*2 formas de realizarlo*/
  // primera seria la mas optimizada menos lineas de codigo expresado con el operador ternario
  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
// segunda si es necesario extender el codigo puedo usar esta solucion
/*
if (esOperador(props.children)){
  return(
  <div
      className='boton-contenedor operador'
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
    );
}else{
  return(
  <div
      className='boton-contenedor'
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
    );
}*/

}

export default Boton;
// error en consola Boton.js:13 Uncaught TypeError: props.manejarClic is not a function
//    at onClick (Boton.js:13:1)