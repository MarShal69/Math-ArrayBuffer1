import Magician from '../typeMagician';

test('создание класса наследника Magician', () => {
  const magician = new Magician('Wind', 'Magician', 5);
  const expected = {
    name: 'Wind',
    type: 'Magician',
    x: 5,
    health: 100,
    level: 1,
    _attack: 6,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});
