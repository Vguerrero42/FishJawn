"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  extend type Query {\n    fishes:[Fish!]\n    fish:(id: ID!): Fish!\n  }\n\n  extend type Mutation {\n    addNewFish(name: String!): Fish!\n    removeFish(id:ID!): Boolean!\n    updateFish(id:ID!, name:String!): String!\n  }\n  type Fish {\n    id: ID!\n    name: String!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;