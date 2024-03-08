import React from 'react';
import { render } from '@testing-library/react';
import GraficaGastos from '../components/GraficaGastos';
import { DatosProvider } from '../Context/DatosContext';

test('renders gráfica de gastos semanales', () => {
  // Simula datos de prueba para la gráfica
  const datosGrafica = [20, 30, 40, 50, 60];

  const { container } = render(
    <DatosProvider value={{ datosGrafica }}>
      <GraficaGastos />
    </DatosProvider>
  );

  // Verifica que el componente renderice correctamente la gráfica
  const canvasElement = container.querySelector('canvas');
  expect(canvasElement).toBeInTheDocument();

  // Aquí podrías realizar pruebas adicionales para verificar que la gráfica se renderiza correctamente
  // Sin embargo, para pruebas más exhaustivas, necesitarías utilizar herramientas especializadas para pruebas de gráficos, como @testing-library/react-hooks o similares.
});