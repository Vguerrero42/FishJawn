import { Fish } from '../models'

async function getAllFishes(root, args, context) {
  try {
    let allFishes = await Fish.findAll()
    return allFishes
  } catch (error) {
    return "Not yet"
  }
}

async function getFish(root, args, context) {
  try {
    let { id } = args
    let fish = Fish.findByPk(id)
    if (fish) {
      return fish
    }
    else {
      return `Fish with id ${id} does not exist,dude.`
    }
  } catch (error) {
    return `${error}`
  }
}

export {
  getAllFishes,
  getFish
}