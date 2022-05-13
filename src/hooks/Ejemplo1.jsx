/**
 * Ejemplo del uso del hook useState
 *
 * Crear un componente tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas poder modificarlo
 */

import React, { useState } from "react";

//Valor iniciar para un contador

const Ejemplo1 = () => {
  const valorInicial = 0;

  //Valor inicial para persona
  const personaInicial = {
    nombre: "Martin",
    email: "martin@correo.com",
  };

  /**
   * Queremos que el VALORINICIAL Y PERSONAINICIAL sean
   * parte del estado del componente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */

  const incrementarContador = () => {
    /* Updating the state of the component. */
    setContador(contador + 1);
  };

  /**
   * Funcion para actualizar el estado de persona
   * en el componente
   */
  const actualizarPersona = () => {
    setPersona({
      nombre: "Pepe",
      email: "pepe@correo.com",
    });
  };
  return (
    <div>
      <h1>**Ejemplo de useState()**</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Nombre: {persona.email}</h3>
      {/**Botones para actualizar el estado */}
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <br />
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
