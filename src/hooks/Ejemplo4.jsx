/**
 * Ejemplo para entender el uso de props.children
 */

import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>**Ejemplo de children Props**</h1>
      <h2>Nombre: {props.name}</h2>
      {/**Props.children pintara por defecto aquello que se encuentre en las etiquetas 
        de apretura y cierre de este componente desde el componente de orden superior
       */}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
