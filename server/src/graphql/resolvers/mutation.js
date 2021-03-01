import { Fish,User } from "../../db"

async function addFish(root, args, context) {
  let { name,description } = args
  let newFish = await Fish.create({
    name: name,
    description:description
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

async function addUser(root, args, context) {
  console.log('usercreate')
  let { userName,email,password } = args
  let newUser = await User.create({
    userName,
    email,
    password
  })

  return newUser
}

async function removeUser(root, args, context) {
  let { id } = args
  let user = await User.findByID(id)
  return `This user was removed: ${user}`
}

async function login(root,args,context) {
  try {
    const user = await  User.findOne({where:{
      email: args.email
    }})
    if(!user){
      return `No such user with email ${args.email}`
    }
    if(!user.correctPassword(args.password)){

    }

  } catch (error) {
    
  }
}

// async function login(root,args,context) {

// }







export {
  addFish,
  removeFish,
  updateFish,
  addUser,
  removeUser
}