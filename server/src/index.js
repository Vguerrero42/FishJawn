import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "./config";
import { typeDefs, resolvers } from "./graphql/schema";
import { db } from "./db";
import { auth } from "./utils/auth";
const app = express();

// const getUser =  async (token) =>{
//   if(token){
//   try {
//     console.log("Token in get User",token)
//     // console.log('verify',jwt.verify(token,JWT_SECRET))
//     let decoded = jwt.verify(token,JWT_SECRET)
//     console.log("DECODED",decoded)
//     return decoded
//   } catch (error) {
//     console.log("ERROR",error)
//     return null
//   }
// }
// }

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.headers.authorization,
  }),
});

// debugger
// const token = req.headers.authorization || ''
// const user = getUser(token)
// console.log("USER IN SERVER",user)
// return {
//   user
// }

const PORT = 3000;

app.use(auth);

server.applyMiddleware({
  app,
  path: "/graphql",
});

db.sync();

// app.use((req, res) => {
//   res.status(200),
//     res.send('hello'),
//     res.end()
// })

app.listen({ port: PORT }, () => {
  console.log(`Server Ready at Port ${PORT}`);
});
