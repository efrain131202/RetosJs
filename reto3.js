function distributeGifts(packOfGifts, reindeers) {
    let totalWeight = 0, totalCapacity = 0
    for (const gift of packOfGifts) {
      totalWeight += gift.length
    }
    for (const reindeer of reindeers) {
      totalCapacity += reindeer.length * 2
    }
    return Math.floor(totalCapacity / totalWeight);
  }