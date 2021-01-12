import { fishes } from '../models'

async function getAllFishes(root, args, context) {
  try {
    // let allFishes = await Fish.findAll()
    return [...fishes]
  } catch (error) {
    return "Not yet"
  }
}

async function getFish(root, args, context) {
  let { id } = args
  return fishes[id]
}

export {
  getAllFishes,
  getFish
}