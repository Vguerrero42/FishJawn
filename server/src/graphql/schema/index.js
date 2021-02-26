import { gql } from 'apollo-server-express'

import { typeDefs as Fish } from "./fish"
import { typeDefs as User } from "./user"
import resolvers from "../resolvers"

const rootTypeDefs = gql`
type Query {
  getAllFishes:[Fish]
  getFish(id: ID!):Fish
  getAllUsers:[User]
  getUser(id:ID!):User
  hello:String
}

type Mutation {
  addFish(name: String!,description:String!): Fish!
  removeFish(id: ID!): String!
  updateFish(id: ID!, name: String!): String!
  addUser(userName:String!,email:String!,password:String!):User!
  removeUser(id:ID!):String!
}
`


const typeDefs = [rootTypeDefs, Fish,User]
export {
  typeDefs,
  resolvers
}