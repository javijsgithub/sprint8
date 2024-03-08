import React from 'react';
import { DatosProvider } from './Context/DatosContext';
import BalanceSemana from './components/BalanceSemana';
import GastosHoy from './components/GastosHoy';
import GraficaGastos from './components/GraficaGastos';
import './App.css';

const App = () => {
  return (
    <DatosProvider>
      <div>
        <h1>Control de Gastos</h1>
        <BalanceSemana />
        <GraficaGastos />
        <br></br>
        <GastosHoy />
      </div>
    </DatosProvider>
  );
};

export default App;