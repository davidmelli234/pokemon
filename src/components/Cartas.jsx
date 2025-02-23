import React, { useEffect, useState } from 'react';
import Selector from './Selector'; 
import CartaSeleccionada from './CartaSeleccionada';
import './Cartas.css';

export const Cartas = () => {
  // estados para gestionar cartas, límite, índice y carta seleccionada
  const [cartas, setCartas] = useState([]); 
  const [limite, setLimite] = useState(10);
  const [indice, setIndice] = useState(1);
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

  // efecto para obtener las cartas desde la API cuando cambian índice o límite
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${indice - 1}&limit=${limite}`)
      .then(response => response.json())
      .then(data => {
        // mapear los resultados para obtener los detalles de cada carta
        const nuevasCartas = data.results.map((pokemon, index) => ({
          id: index + 1, 
          name: pokemon.name, 
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index + 1) + (indice - 1)}.png`, // imagen de la carta
          urlDetallada: pokemon.url, // url para obtener más detalles del pokemon
        }));
        setCartas(nuevasCartas); 
      });
  }, [indice, limite]); 

  // funcion para obtener los detalles adicionales de la carta seleccionada
  const obtenerDetallesCarta = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // obtener detalles de la carta
        const detallesCarta = {
          name: data.name,
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`, 
          altura: data.height, 
          peso: data.weight,   
          tipos: data.types.map((type) => type.type.name), // tipos de pokemon
        };
        setCartaSeleccionada(detallesCarta); 
      });
  };

  // funcion para seleccionar una carta y obtener más detalles
  const seleccionarCarta = (carta) => {
    obtenerDetallesCarta(carta.urlDetallada); // obtener detalles de la carta
  };

  return (
    <>
      {/* componente selector para elegir el índice y límite */}
      <Selector
        indice={indice}
        setIndice={setIndice}
        limite={limite}
        setLimite={setLimite}
      />
      <div className="container">
        {/* mostrar la carta seleccionada en un componente separado */}
        <CartaSeleccionada carta={cartaSeleccionada} />
        <div className="cards-container">
          {/* mapeo de todas las cartas para mostrarlas */}
          {cartas.map((carta) => (
            <div
              key={carta.id}
              className="carta"
              onClick={() => seleccionarCarta(carta)} 
            >
              <h2 className="carta-nombre">{carta.name}</h2>
              <img src={carta.url} alt={carta.name} className="carta-img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cartas;
