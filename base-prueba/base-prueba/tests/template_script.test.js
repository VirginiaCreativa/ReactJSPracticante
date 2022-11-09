import { getSaludo } from '../src/template_script';

describe('Prueba File template_script', () => {
  test('getSalud debe de retonar "Hola name"', () => {
    const name = 'Virginia';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`)

  })
});
