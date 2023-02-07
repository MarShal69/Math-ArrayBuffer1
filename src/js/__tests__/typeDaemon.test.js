import Daemon from '../typeDaemon';

test('создание класса наследника Daemon', () => {
  const daemon = new Daemon('Jhon', 'Daemon', 2);
  const expected = {
    name: 'Jhon',
    type: 'Daemon',
    x: 2,
    health: 100,
    level: 1,
    _attack: 9,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});
