"use strict";

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _schema = require("./graphql/schema");

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JWT_SECRET = process.env.JWT_SECRET;
var app = (0, _express["default"])();

var getUser = function getUser(token) {
  try {
    if (token) {
      return _jsonwebtoken["default"].verify(token, JWT_SECRET);
    }

    return null;
  } catch (error) {
    return null;
  }
};

var schema = new _apolloServerExpress.ApolloServer({
  cors: true,
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers,
  context: function context(_ref) {
    var req = _ref.req;
    var token = req.headers.authorization || '';
    var user = getUser(token.replace('Bearer', ''));
    return {
      user: user
    };
  }
});
var PORT = 3000;
schema.applyMiddleware({
  app: app,
  path: '/graphql'
});

_db.db.sync();

app.use(function (req, res) {
  res.status(200), res.send('hello'), res.end();
});
app.listen({
  port: PORT
}, function () {
  console.log("Server Ready at Port ".concat(PORT));
});