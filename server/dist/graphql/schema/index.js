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

var _graphqlTools = require("graphql-tools");

var _fish = require("./fish");

var _resolvers = _interopRequireDefault(require("../resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Query {\n  getAllFishes:[Fish]\n  getFish(id: ID!): Fish!\n  hello:String\n}\n\ntype Mutation {\n  addFish(name: String!): Fish!\n  removeFish(id: ID!): Boolean!\n  updateFish(id: ID!, name: String!): String!\n  numSon(numToAdd:Int):String\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rootTypeDefs = (0, _apolloServerExpress.gql)(_templateObject()); // const schema = makeExecutableSchema({
//   typeDefs: [typeDefs, Fish], resolvers
// })

var typeDefs = [rootTypeDefs, _fish.typeDefs];
exports.typeDefs = typeDefs;