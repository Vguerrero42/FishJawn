import { Fish } from '../db/models'
import { db } from '../db'

require('../../../secrets')

const fs = require('fs')


let fishes = []
let dataPath = process.env.FISH_DATA_PATH

let fishObj = JSON.parse(fs.readFileSync(`${dataPath}/fishData.txt`, 'utf8'))


for (let fish in fishObj) {
  fishes.push({
    name: String(fish),
    description: String(fishObj[fish])
  })
}



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
console.log(fishes)