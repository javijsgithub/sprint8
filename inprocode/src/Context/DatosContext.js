import React, { createContext, useContext, useState, useEffect } from 'react';

const DatosContext = createContext();

export const useDatosContext = () => useContext(DatosContext);

export const DatosProvider = ({ children }) => {
  const [balanceSemana, setBalanceSemana] = useState(0);
  const [gastoHoy, setGastoHoy] = useState(0);
  const [variacion, setVariacion] = useState(0);
  const [gastosPorDia, setGastosPorDia] = useState({
    lunes: 500,
    martes: 300,
    miercoles: 400,
    jueves: 200,
    viernes: 150,
    sabado: 225,
    domingo: 175
  });

  useEffect(() => {
    // Calcular el balance de la semana
    const totalSemana = Object.values(gastosPorDia).reduce((acc, cur) => acc + cur, 0);
    setBalanceSemana(totalSemana);

    // Calcular los gastos de hoy
    const diaActual = new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();
    console.log("Dia actual:", diaActual);
    const gastoHoy = gastosPorDia[diaActual] || 0;
    console.log("Gasto de hoy:", gastosPorDia[diaActual]);
    setGastoHoy(gastoHoy);

    // Calcular la variación respecto a ayer
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const indiceDiaActual = dias.indexOf(diaActual);
    const gastoAyer = indiceDiaActual > 0 ? gastosPorDia[dias[indiceDiaActual - 1]] : 0;
    let variacion = 0;
    if (gastoAyer !== 0) {
      variacion = ((gastoHoy - gastoAyer) / gastoAyer) * 100;
      // Limitar el resultado a dos decimales
      variacion = parseFloat(variacion.toFixed(2));
    }
    setVariacion(variacion);
  }, [gastosPorDia]);

  return (
    <DatosContext.Provider
      value={{
        balanceSemana,
        gastoHoy,
        variacion,
        gastosPorDia, 
        setGastosPorDia
      }}
    >
      {children}
    </DatosContext.Provider>
  );
};