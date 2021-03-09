import cors from 'cors'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

import { typeDefs, resolvers } from "./graphql/schema"

import { db } from './db'

const JWT_SECRET = process.env.JWT_SECRET

const app = express()

const getUser = token =>{
  try {
    if(token){
      return jwt.verify(token,JWT_SECRET)
    }
    return null
  } catch (error) {
    return null
  }
}
const schema = new ApolloServer({
  cors:true,
  typeDefs,
  resolvers,
  context:({req}) => {
    const token = req.headers.authorization || ''
    const user = getUser(token.replace('Bearer',''))
    return {
      user
    }
  }
})

const PORT = 3000

schema.applyMiddleware({
  app,
  path: '/graphql'
})

db.sync()

app.use((req, res) => {
  res.status(200),
    res.send('hello'),
    res.end()
})

app.listen({ port: PORT }, () => {
  console.log(`Server Ready at Port ${PORT}`)
})