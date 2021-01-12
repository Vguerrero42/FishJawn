import cors from 'cors'
import express from 'express'
import { ApolloServer, graphiqlExpress } from 'apollo-server-express'

import { typeDefs, resolvers } from "./db/graphql/schema"

const app = express()
const schema = new ApolloServer({
  typeDefs,
  resolvers
})

const PORT = 3000

schema.applyMiddleware({
  app,
  path: '/graphql'
})


app.use((req, res) => {
  res.status(200),
    res.send('hello'),
    res.end()
})

app.listen({ port: PORT }, () => {
  console.log(`Server Ready at Port ${PORT}`)
})