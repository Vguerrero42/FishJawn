import { Fish,User } from '../../db'

async function getAllFishes(root, args, context) {
  try {
    let allFishes = await Fish.findAll()
    console.log(allFishes)
    if(allFishes.length){
    return allFishes
    }
    else{
      throw new Error("No Fish Fetched Feller")
    }
  } catch (error) {
    throw new Error(error)
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
    throw new Error(error)
  }
}

async function me(root,args,{user}){
  if(!user) throw new Error('You are not authenticated')
  return await User.findByPk(user.id)
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
      throw new Error(error)
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
    throw new Error(error)
  }
}



async function hello(root, args, context) {
  if(context.user)
  {return "Hello,how are you, i am under the water"}
  
  else {
    throw new Error("RuhROh")
  }
}

export {
  getAllFishes,
  getFish,
  me,
  getAllUsers,
  getUser,
  hello
}