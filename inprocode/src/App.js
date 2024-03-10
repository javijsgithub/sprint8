import React, { useState } from 'react';
import { DatosProvider } from './Context/DatosContext';
import BalanceSemana from './components/BalanceSemana';
import GraficaGastos from './components/GraficaGastos';
import { useTranslation } from 'react-i18next';
import i18n from './components/i18n';
import './App.css';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };
  useTranslation();
  
  return (
    <DatosProvider>
      <div className='container-app'>
      <div className='container-language-buttons'>

          <button className='btn-spain' onClick={() => changeLanguage('es')} disabled={selectedLanguage === 'es'}>
            <img src= {require(`../src/images/España.png`)} alt="España" width="25" height="25" className="flag-spain" />
          </button>
          <button className='btn-uk' onClick={() => changeLanguage('en')} disabled={selectedLanguage === 'en'}>
            <img src= {require(`../src/images/UK.png`)} alt="España" width="25" height="25" className="flag-uk" />
          </button>
          <button className='btn-catalonia' onClick={() => changeLanguage('ca')} disabled={selectedLanguage === 'ca'}>
            <img src= {require(`../src/images/Catalonia.png`)} alt="España" width="25" height="25" className="flag-catalonia" />
          </button>

        </div>
        <BalanceSemana />
        <GraficaGastos />
      </div>
    </DatosProvider>
  );
};

export default App;