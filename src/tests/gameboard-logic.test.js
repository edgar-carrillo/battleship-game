import { player1 } from './gameboard-logic';
import { test1 } from './gameboard-logic';
import { array } from './gameboard-logic';
import { array2 } from './gameboard-logic';

test('popBoard returns a populated array with false values', () => {
  expect(player1.popBoard()).toEqual(array);
});

test('Place ship on gameboard that has false values', () => {
  expect(test1.placeShip()).toEqual(array2);
});
