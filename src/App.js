import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {


  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Favor ingrese valores para realizar los calculos");
    }
    
  };

  return (
    <div className='App'>   
    <div className='freecodecamp-logo-contenedor'>
      <img
      src={freeCodeCampLogo}
      className='freecodecamp-logo'
      alt='Logo de FreeCodeCamp' />
      {/* Primer reto
      Crear componente para logo de freecodecamp
      crear archivo js describe componente funcional y reemplazar

      Segundo reto
       implementar casos o correciones que no se han manejado hasta el final del proyecto
       ejemplo 5+-*8 */}

    </div>
    <div className='contenedor-calculadora'>
      <Pantalla input={input} />
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>        
      </div>
      <div className='fila'></div>
        <BotonClear manejarClear={() => setInput('')}>
          Clear
        </BotonClear>
        {/* si la funcion es sencilla puedo definirla dentro de la misma ej clear  sin asignarla a una constante*/}
    </div>
    </div>
  );
}

export default App;

