import { gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import { typeDefs as Fish } from "./fish"

import resolvers from "../resolvers"

const rootTypeDefs = gql`
type Query {
  getAllFishes:[Fish]
  getFish(id: ID!): Fish!
  hello:String
}

type Mutation {
  addFish(name: String!): Fish!
  removeFish(id: ID!): Boolean!
  updateFish(id: ID!, name: String!): String!
  numSon(numToAdd:Int):String
}
`

// const schema = makeExecutableSchema({
//   typeDefs: [typeDefs, Fish], resolvers
// })
const typeDefs = [rootTypeDefs, Fish]
export {
  typeDefs,
  resolvers
}