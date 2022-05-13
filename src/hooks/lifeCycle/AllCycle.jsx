import React, { useEffect } from "react";

const AllCycle = () => {
  useEffect(() => {
    console.log("Componente actualizado");
    const IntervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("actualizacion del componete");
    }, 1000);
    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(IntervalID);
    };
  }, []);
  return <div></div>;
};

export default AllCycle;
