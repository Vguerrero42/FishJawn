"use strict";

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _sequelize = require("sequelize");

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _db["default"].define('user', {
  userName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    validate: {
      notEmpty: true
    },
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get: function get() {
      var _this = this;

      return function () {
        return _this.getDataValue('password');
      };
    }
  },
  salt: {
    type: _sequelize.DataTypes.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get: function get() {
      var _this2 = this;

      return function () {
        return _this2.getDataValue('salt');
      };
    }
  }
});

var _default = User;
/**
 * instanceMethods
 */

exports["default"] = _default;

User.prototype.correctPassword = function (candidatePwd) {
  console.log(candidatePwd, this.password);
  return _bcrypt["default"].compareSync(candidatePwd, this.password());
};
/**
 * classMethods
 */


User.generateSalt = function () {
  return _bcrypt["default"].genSaltSync();
};

User.encryptPassword = function (plainText, salt) {
  return _bcrypt["default"].hashSync(plainText, salt);
};
/**
 * hooks
 */


var setSaltAndPassword = function setSaltAndPassword(user) {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate(function (users) {
  users.forEach(setSaltAndPassword);
});