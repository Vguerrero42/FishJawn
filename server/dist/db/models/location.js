"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Location = _db["default"].define("location", {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  longitude: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  latitude: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

var _default = Location;
exports["default"] = _default;