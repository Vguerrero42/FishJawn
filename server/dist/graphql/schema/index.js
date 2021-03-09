"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.freeze.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resolvers", {
  enumerable: true,
  get: function get() {
    return _resolvers["default"];
  }
});
exports.typeDefs = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _fish = require("./fish");

var _user = require("./user");

var _authPayload = require("./authPayload");

var _resolvers = _interopRequireDefault(require("../resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Query {\n  getAllFishes:[Fish]\n  getFish(id: ID!):Fish\n  me:User\n  getAllUsers:[User]\n  getUser(id:ID!):User\n  hello:String\n  \n}\n\ntype Mutation {\n  addFish(name: String!,description:String!): Fish!\n  removeFish(id: ID!): String!\n  updateFish(id: ID!, name: String!): String!\n  login(email:String!,password:String!):AuthPayload!\n  addUser(userName:String!,email:String!,password:String!):User!\n  removeUser(id:ID!):String!\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rootTypeDefs = (0, _apolloServerExpress.gql)(_templateObject());
var typeDefs = [rootTypeDefs, _fish.typeDefs, _user.typeDefs, _authPayload.typeDefs];
exports.typeDefs = typeDefs;