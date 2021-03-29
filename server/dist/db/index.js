"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "db", {
  enumerable: true,
  get: function get() {
    return _db["default"];
  }
});
Object.defineProperty(exports, "Fish", {
  enumerable: true,
  get: function get() {
    return _models.Fish;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function get() {
    return _models.User;
  }
});
Object.defineProperty(exports, "Catch", {
  enumerable: true,
  get: function get() {
    return _models.Catch;
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function get() {
    return _models.Location;
  }
});

var _db = _interopRequireDefault(require("./db"));

var _models = require("./models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_models.User.hasMany(_models.Catch);

_models.Catch.belongsTo(_models.User);

_models.Fish.hasMany(_models.Catch);

_models.Location.hasMany(_models.Catch);