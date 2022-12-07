const ship = (length, sunk) => {
  const timesHit = 0
  const shipReference = []

  const hit = (object) => { object.timesHit++ }

  const isItSunk = (object) => {
    if (object.length === object.timesHit) { object.sunk = true }
  }
  return { length, timesHit, sunk, hit, isItSunk, shipReference }
}

export { ship }
