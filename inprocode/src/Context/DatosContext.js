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
    const gastoHoy = gastosPorDia[diaActual];
    setGastoHoy(gastoHoy);

    // Calcular la variación respecto a ayer
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const indiceDiaActual = dias.indexOf(diaActual);
    const gastoAyer = indiceDiaActual > 0 ? gastosPorDia[dias[indiceDiaActual - 1]] : 0;
    const variacion = ((gastoHoy - gastoAyer) / gastoAyer) * 100;
    setVariacion(variacion);
  }, [gastosPorDia]);

  return (
    <DatosContext.Provider
      value={{
        balanceSemana,
        gastoHoy,
        variacion,
        gastosPorDia, setGastosPorDia
      }}
    >
      {children}
    </DatosContext.Provider>
  );
};