import React from 'react';
import './Selector.css'; // importamos el archivo de estilo

export const Selector = ({ indice, setIndice, limite, setLimite }) => {
  // manejador para actualizar el valor del límite
  const handleChangelimite = (event) => {
    setLimite(event.target.value);
  };

  // manejador para actualizar el valor del índice
  const handleChangeindice = (event) => {
    setIndice(event.target.value);
  };

  return (
    <div className='formularios'> 
      {/* contenedor para los formularios */}
      <form className='formulario-limite'>
        <label htmlFor="limite" id='limite'>Límite: </label>
        {/* formulario para el límite */}
        <input type="number" value={limite} onChange={handleChangelimite} name='limite' id='limite' />
      </form>

      <form className='formulario-indice'>
        <label htmlFor="indice" id='indice'>Índice: </label>
        {/* formulario para el índice */}
        <input type="number" value={indice} onChange={handleChangeindice} name='indice' id='indice' />
      </form>
    </div>
  );
};

export default Selector;
