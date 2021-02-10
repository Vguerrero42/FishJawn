import { Fish } from '../db/models'
import { db } from '../db'

const fs = require('fs')

// const getFishes = () => {
//   let fileData = {}
//   fs.readFile('/home/victor/Projects/FishJawnDBData/fishData.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     fileData = JSON.parse(data)
//   })
//   return fileData
// }



let fishes = []

let fishObj = JSON.parse(fs.readFileSync('/home/victor/Projects/FishJawnDBData/fishData.txt', 'utf8'))


for (let fish in fishObj) {
  // console.log('fish', fish)
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
