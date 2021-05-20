"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("./config");

var _schema = require("./graphql/schema");

var _db = require("./db");

var _auth = require("./utils/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // const getUser =  async (token) =>{
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

var server = new _apolloServerExpress.ApolloServer({
  cors: true,
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers,
  context: function context(_ref) {
    var req = _ref.req;
    return {
      user: req.headers.authorization
    };
  }
}); // debugger
// const token = req.headers.authorization || ''
// const user = getUser(token)
// console.log("USER IN SERVER",user)
// return {
//   user
// }

var PORT = 3000;
app.use(_auth.auth);
server.applyMiddleware({
  app: app,
  path: "/graphql"
});

_db.db.sync(); // app.use((req, res) => {
//   res.status(200),
//     res.send('hello'),
//     res.end()
// })


app.listen({
  port: PORT
}, function () {
  console.log("Server Ready at Port ".concat(PORT));
});