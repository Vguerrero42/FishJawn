import { fishes } from "../models"

async function addFish(root, args, context) {
  let { newFish } = args
  fishes.push(newFish)
  return fishes
}

async function removeFish(root, args, context) {
  let { id } = args
  return `This fish was removed: ${fishes[id]
    }`
}

async function updateFish(root, args, context) {
  let { id, name } = args
  let oldFish = fishes[id]
  fishes[id] = name
  return `${oldFish} will now be known as ${fishes[id]}`
}

export {
  addFish,
  removeFish,
  updateFish
}