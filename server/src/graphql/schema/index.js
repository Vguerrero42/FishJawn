import { gql } from "apollo-server-express";

import { typeDefs as Fish } from "./fish";
import { typeDefs as User } from "./user";
import { typeDefs as AuthPayload } from "./authPayload";
import resolvers from "../resolvers";

const rootTypeDefs = gql`
  type Query {
    getAllFishes: [Fish]
    getFish(id: ID!): Fish
    me: User
    getAllUsers: [User]
    getUser(id: ID!): User
    hello: String
  }

  type Mutation {
    addFish(name: String!, description: String!): Fish!
    removeFish(id: ID!): String!
    updateFish(id: ID!, name: String!): String!
    login(email: String!, password: String!): AuthPayload!
    addUser(userName: String!, email: String!, password: String!): AuthPayload!
    removeUser(id: ID!): String!
  }
`;

const typeDefs = [rootTypeDefs, Fish, User, AuthPayload];
export { typeDefs, resolvers };
