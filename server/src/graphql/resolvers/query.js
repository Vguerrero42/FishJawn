import { Fish,User } from '../../db'

async function getAllFishes(root, args, context) {
  try {
    let allFishes = await Fish.findAll()
    console.log(allFishes)
    if(allFishes.length){
    return allFishes
    }
    else{
      return 'No Fish here mane'
    }
  } catch (error) {
    return "Not yet"
  }
}

async function getFish(root, args, context) {
  try {
    let { id } = args
    console.log(id)
    let fish = await Fish.findByPk(1)
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

async function getAllUsers(root,args,context){
  try {
    let users = await User.findAll()
    if(users.length){
      return users
    }
    else {
      return  'None users bro :/'
    }
  } catch (error) {
      return `${error}`
  }
}

async function getUser(root,args,context){
  try {
    let { id } = args
    id = Number(id)
    console.log(id)
    let user = await User.findByPk(id)
    if(user) {
      return user
    }
    else {
      'User Not Found'
    }
  } catch (error) {
    return `${error}`
  }
}



async function hello(root, args, context) {
  return "Hello,how are you, i am under the water"
}

export {
  getAllFishes,
  getFish,
  getAllUsers,
  getUser,
  hello
}