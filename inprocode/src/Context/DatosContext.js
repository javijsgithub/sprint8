import React, { createContext, useContext, useState, useEffect } from 'react';

const DatosContext = createContext();

export const useDatosContext = () => useContext(DatosContext);

export const DatosProvider = ({ children }) => {
  const [balanceSemana, setBalanceSemana] = useState(0);
  const [gastoHoy, setGastoHoy] = useState(0);
  const [variacion, setVariacion] = useState(0);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  
  const weeksData = [
    {
      lunes: 500,
      martes: 300,
      miercoles: 575,
      jueves: 200,
      viernes: 150,
      sabado: 225,
      domingo: 175
    },
    {
      lunes: 300,
      martes: 200,
      miercoles: 500,
      jueves: 225,
      viernes: 175,
      sabado: 280,
      domingo: 125
    },
    {
      lunes: 400,
      martes: 350,
      miercoles: 450,
      jueves: 150,
      viernes: 180,
      sabado: 425,
      domingo: 275
    }
      ];
  const [gastosPorDia, setGastosPorDia] = useState(weeksData[currentWeekIndex]);
  
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

  const goToPreviousWeek = () => {
    if (currentWeekIndex < weeksData.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
      setGastosPorDia(weeksData[currentWeekIndex + 1]);
    }
  };

  const goToNextWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
      setGastosPorDia(weeksData[currentWeekIndex - 1]);
    }
   
  };

  return (
    <DatosContext.Provider
      value={{
        balanceSemana,
        gastoHoy,
        variacion,
        gastosPorDia, 
        setGastosPorDia,
        currentWeekIndex,
        goToPreviousWeek,
        goToNextWeek
      }}
    >
      {children}
    </DatosContext.Provider>
  );
};                                               