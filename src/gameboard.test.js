import { gameboardFactory } from './gameboard'
import { ship } from './ship.js'

const gameboard = gameboardFactory()

test('placement location test one horizontal', () => {
  const testShip = ship(5, false)
  gameboard.setShipLocation(testShip, 2, true)

  expect(testShip.shipReference).toEqual([2, 12, 22, 32, 42])
})

test('placement location test two horizontal', () => {
  const testShip = ship(3, false)
  gameboard.setShipLocation(testShip, 36, true)

  expect(testShip.shipReference).toEqual([36, 46, 56])
})

test('placement location test one vertical', () => {
  const testShip = ship(3, false)
  gameboard.setShipLocation(testShip, 3, false)

  expect(testShip.shipReference).toEqual([3, 4, 5])
})
