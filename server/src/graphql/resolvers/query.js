import { Fish, User } from "../../db";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

async function getAllFishes(root, args, context) {
  try {
    let allFishes = await Fish.findAll();
    console.log(allFishes);
    if (allFishes.length) {
      return allFishes;
    } else {
      throw new Error("No Fish Fetched Feller");
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function getFish(root, args, context) {
  try {
    let { id } = args;
    console.log(id);
    let fish = await Fish.findByPk(1);
    if (fish) {
      return fish;
    } else {
      return `Fish with id ${id} does not exist,dude.`;
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function me(root, args, { user }) {
  if (!user) throw new Error("You are not authenticated");
  return user;
}

async function getAllUsers(root, args, context) {
  try {
    let users = await User.findAll();
    if (users.length) {
      return users;
    } else {
      return "None users bro :/";
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function getUser(root, args, context) {
  try {
    let { id } = args;
    id = Number(id);
    console.log(id);
    let user = await User.findByPk(id);
    if (user) {
      return user;
    } else {
      ("User Not Found");
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function hello(root, args, context) {
  console.log("context", context.user);
  if (context.user) {
    return `Hello how are you I am under the water, glug glug ${success}`;
  } else {
    return "All your base are belong to us";
  }
}

export { getAllFishes, getFish, me, getAllUsers, getUser, hello };
