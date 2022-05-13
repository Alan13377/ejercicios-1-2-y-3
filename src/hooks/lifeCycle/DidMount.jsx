/**
 * Ejemplo de uso del método
 * de ciclo de vida en componete clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  DidMount() {
    console.log(
      "Comportamiento antes que el componente sea añadido al dom (renderize)"
    );
  }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes que el componente sea añadido al dom (renderize)"
    );
  }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
