import React from 'react'
import '../stylesheet/Pantalla.css'


// Forma alternativa de definir componentes funcionales, no siempre usamos function
// podemos unsar const y definir como flecha
//Normalmente se usa cuando es un componente sencillo, sin logica ni funciones

const Pantalla = ({ input }) => (
<div className='input'>
    {input}
</div>
);

export default Pantalla;