import Magician from '../typeMagician';
import Daemon from '../typeDaemon';

test(('проверка на клеточке  5 при атаке 100'), () => {
  const magician = new Magician('Wind', 'Magician', 5);
  magician.attack = 100;
  const result = magician.attack;
  const expected = 60;
  expect(result).toBe(expected);
});

test(('проверка на клеточке  2 при атаке 50'), () => {
  const daemon = new Daemon('Jhon', 'Daemon', 2);
  daemon.attack = 50;
  const result = daemon.attack;
  const expected = 45;
  expect(result).toBe(expected);
});


test(('проверка на клеточке  5 при атаке 170'), () => {
  const magician = new Magician('Wind', 'Magician', 5);
  magician.attack = 170;
  const result = magician.attack;
  const expected = 100;
  expect(result).toBe(expected);
});

test(('проверка на клеточке  5 при отрицательной атаке '), () => {
  const magician = new Magician('Wind', 'Magician', 5);
  magician.attack = -25;
  const result = magician.attack;
  const expected = 0;
  expect(result).toBe(expected);
});

test(('проверка на клеточке  5 при атаке 100 и наличии дурмана'), () => {
  const magician = new Magician('Wind', 'Magician', 5);
  magician.stoned = 20;
  magician.attack = 100;
  const result = magician.attack;
  const expected = 88.39035952556318;
  expect(result).toBe(expected);
});
