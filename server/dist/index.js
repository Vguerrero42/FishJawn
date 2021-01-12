"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = require("./db/graphql/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var schema = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers
});
var PORT = 3000;
schema.applyMiddleware({
  app: app,
  path: '/graphql'
});
app.use(function (req, res) {
  res.status(200), res.send('hello'), res.end();
});
app.listen({
  port: PORT
}, function () {
  console.log("Server Ready at Port ".concat(PORT));
});