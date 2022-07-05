import React from 'react'

function Boton(props){

    const esOperador = valor => {
      return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return (
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
          {props.children}
          {/* de esta manera podremos declarar los componentes con sin la etiqueta de autocierre usando la nomenclatura
          por defecto de html con su etiqueta de aperta y cierre */}
        </div>
    );
}

export default Boton;