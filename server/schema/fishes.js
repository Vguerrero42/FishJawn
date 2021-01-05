import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    fishes:[Fish!]
    fish:(id: ID!): Fish!
  }

  extend type Mutation {
    addNewFish(name: String!): Fish!
    removeFish(id:ID!): Boolean!
    updateFish(id:ID!, name:String!): String!
  }
  type Fish {
    id: ID!
    name: String!
  }
`