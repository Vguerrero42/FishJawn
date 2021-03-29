import { Fish,User } from "../../db"
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

async function addFish(root, args, context) {
  if(context.user){
  let { name,description } = args
  let newFish = await Fish.create({
    name: name,
    description:description
  })
  return newFish
}
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

async function addUser(root, { userName,email,password }, context) {
  try {
    console.log(context)
    const newUser = await User.create({
      userName,
      email,
      password
    })
    const {id} = newUser.dataValues
    const token = jwt.sign(
      {id:id,email:email},JWT_SECRET
      )
    context.user = newUser
    return {token,user:{id,email}}

  } catch (error) {
    throw new Error(error)
  }
}


async function removeUser(root, {id}, context) {
  let user = await User.findByID(id)
  return `This user was removed: ${user}`
}

async function login(root,{email,password},context) {
  console.log('context in login before',context)

    const user = await User.findOne({where:{
      email: email
    }})
    if(!user){
      throw new Error(`No User with email ${email}`)
    }
    if(!user.correctPassword(password)){
      throw new Error('Incorrect Password')
    }
    const token = jwt.sign(
      {id:user.id,email:user.email},JWT_SECRET
      )
      context.user = user
      console.log('context after success',context)
      return {token,user}
 
}









export {
  addFish,
  removeFish,
  updateFish,
  login,
  addUser,
  removeUser
}