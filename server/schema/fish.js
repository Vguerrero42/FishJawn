import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    fishes:[Fish!]
    fish:(id: ID!): Fish!
  }

  type Fish {
    id: ID!
    name: String!
  }
`