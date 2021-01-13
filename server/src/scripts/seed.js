import { Fish } from '../db/models'
import { db } from '../db'
console.log(db)

let fishes = [
  {
    name: 'charles'
  },
  {
    name: 'eeyore'
  },
  {
    name: 'little finger'
  },
  {
    name: 'goldenEye'
  },
  {
    name: 'Fruit'
  },
  {
    name: 'charles2'
  }
]

const seed = async () => {
  await db.sync()
  await Fish.bulkCreate(fishes)
  await console.log('seed Success!')
  db.close()
}

const runSeed = async () => {
  console.log("Beginning Seed")
  try {
    await seed()
  } catch (error) {
    console.error(error)
  }
  finally {
    console.log('Closing Connection')
    await db.close()
    console.log('Connection Closed')
  }
}

runSeed()
