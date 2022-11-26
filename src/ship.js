const ship = (length, sunk) => {
  const timesHit = 0

  const hit = (object) => { object.timesHit++ }

  const isItSunk = (object) => {
    if (object.length === object.timesHit) { object.sunk = true }
  }
  return { length, timesHit, sunk, hit, isItSunk }
}

export { ship }
