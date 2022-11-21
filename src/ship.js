const ship = (length, timesHit, isSunk) =>{
    
    const shipLength = () => length

    const hit = (n) =>{
        timesHit + n
    }

    const isItSunk = () =>{
        if (isSunk === length) 
        return true
    }

    return {length, timesHit,isSunk, hit}
}


export {ship}
