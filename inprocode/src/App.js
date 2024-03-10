import React from 'react';
import { DatosProvider } from './Context/DatosContext';
import BalanceSemana from './components/BalanceSemana';
import GraficaGastos from './components/GraficaGastos';
import './App.css';

const App = () => {
  return (
    <DatosProvider>
      <div className='container-app'>
        <BalanceSemana />
        <GraficaGastos />
      </div>
    </DatosProvider>
  );
};

export default App;