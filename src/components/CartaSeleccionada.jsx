import React from 'react';
import './CartaSeleccionada.css'; // Asegúrate de tener el CSS correspondiente

const CartaSeleccionada = ({ carta }) => {
  if (!carta) { // si no hay carta seleccionada, mostramos un mensaje de advertencia
    return <p>Selecciona una carta para ver más detalles.</p>;
  }

  return (
    <div className="carta-seleccionada-container">
      <div className="carta-seleccionada">
        <h2 className="carta-seleccionada-nombre">{carta.name}</h2>
        <img src={carta.url} alt={carta.name} className="carta-seleccionada-img" />
        <div className="carta-seleccionada-info">
          <p><strong>Altura:</strong> {carta.altura}cm</p>
          <p><strong>Peso:</strong> {carta.peso}g</p>
          <p><strong>Tipos:</strong> {carta.tipos.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default CartaSeleccionada;
