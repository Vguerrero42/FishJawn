"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("sequelize/types");

var fish = function fish(sequelize, DataTypes) {
  var Fish = sequelize.define("fish", {
    name: DataTypes.STRING
  });
  return Fish;
};

var _default = fish;
exports["default"] = _default;