import { Fish } from "../models"

async function addFish(root, args, context) {
  let { name } = args
  let newFish = await Fish.create({
    name: name
  })

  return newFish
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