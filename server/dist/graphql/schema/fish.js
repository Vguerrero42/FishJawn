"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;
// import { gql } from 'apollo-server-express'
// export default gql`
//   extend type Query {
//     fishes:[Fish!]
//     fish:(id: ID!): Fish!
//   }
// extend type Mutation {
//     addNewFish(name: String!): Fish!
//     removeFish(id: ID!): Boolean!
//     updateFish(id: ID!, name: String!): String!
// }
// type Fish {
//     id: ID!
//     name: String!
// }
// `
var typeDefs = "\n   type Fish {\n       id: ID!\n       name: String!\n       description: String!\n   }\n";
exports.typeDefs = typeDefs;