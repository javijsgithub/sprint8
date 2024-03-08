import React from 'react';
import { render } from '@testing-library/react';
import GastosHoy from '../components/GastosHoy';
import { DatosProvider } from '../Context/DatosContext';

test('renders gastos totales de hoy y variación', () => {
  // Simula datos de prueba para gastos de hoy y variación
  const gastoHoy = 100;
  const variacion = 10;

  const { getByText } = render(
    <DatosProvider value={{ gastoHoy, variacion }}>
      <GastosHoy />
    </DatosProvider>
  );

  // Verifica que el componente renderice correctamente los datos de gastos de hoy y variación
  const gastosHoyElement = getByText(`Total: $${gastoHoy}`);
  expect(gastosHoyElement).toBeInTheDocument();

  const variacionElement = getByText(`Variación respecto a ayer: ${variacion}%`);
  expect(variacionElement).toBeInTheDocument();
});