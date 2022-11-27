import { ship } from './ship'

test('ship function returns ship object 1', () => {
  const testShip = ship(5, false)

  expect(testShip.length).toEqual(5)
  expect(testShip.sunk).toEqual(false)
  expect(testShip.timesHit).toEqual(0)
})

test('ship function returns ship object 2', () => {
  const testShip = ship(10, false)

  expect(testShip.length).toEqual(10)
  expect(testShip.sunk).toEqual(false)
  expect(testShip.timesHit).toEqual(0)
})

test('ship hit function test one', () => {
  const testShipHitOne = ship(5, false)
  testShipHitOne.hit(testShipHitOne)

  expect(testShipHitOne.timesHit).toEqual(1)
  expect(testShipHitOne.sunk).toEqual(false)
})

test('ship hit function test two', () => {
  const testShipHitTwo = ship(10, false)
  testShipHitTwo.hit(testShipHitTwo)

  expect(testShipHitTwo.timesHit).toEqual(1)
  expect(testShipHitTwo.sunk).toEqual(false)
})

test('ship sunk test one', () => {
  const testShipSunk = ship(1, false)
  testShipSunk.hit(testShipSunk)
  testShipSunk.isItSunk(testShipSunk)

  expect(testShipSunk.sunk).toEqual(true)
})

test('ship sunk test two', () => {
  const testShipSunkTwo = ship(4, false)
  testShipSunkTwo.timesHit = 3
  testShipSunkTwo.hit(testShipSunkTwo)
  testShipSunkTwo.isItSunk(testShipSunkTwo)

  expect(testShipSunkTwo.sunk).toEqual(true)
})
