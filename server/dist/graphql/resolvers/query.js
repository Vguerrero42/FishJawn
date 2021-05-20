"use strict";

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFishes = getAllFishes;
exports.getFish = getFish;
exports.me = me;
exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.hello = hello;

require("regenerator-runtime/runtime.js");

var _db = require("../../db");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var JWT_SECRET = process.env.JWT_SECRET;

function getAllFishes(_x, _x2, _x3) {
  return _getAllFishes.apply(this, arguments);
}

function _getAllFishes() {
  _getAllFishes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(root, args, context) {
    var allFishes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _db.Fish.findAll();

          case 3:
            allFishes = _context.sent;
            console.log(allFishes);

            if (!allFishes.length) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", allFishes);

          case 9:
            throw new Error("No Fish Fetched Feller");

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            throw new Error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _getAllFishes.apply(this, arguments);
}

function getFish(_x4, _x5, _x6) {
  return _getFish.apply(this, arguments);
}

function _getFish() {
  _getFish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(root, args, context) {
    var id, fish;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = args.id;
            console.log(id);
            _context2.next = 5;
            return _db.Fish.findByPk(1);

          case 5:
            fish = _context2.sent;

            if (!fish) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", fish);

          case 10:
            return _context2.abrupt("return", "Fish with id ".concat(id, " does not exist,dude."));

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            throw new Error(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _getFish.apply(this, arguments);
}

function me(_x7, _x8, _x9) {
  return _me.apply(this, arguments);
}

function _me() {
  _me = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(root, args, _ref) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user = _ref.user;

            if (user) {
              _context3.next = 3;
              break;
            }

            throw new Error("You are not authenticated");

          case 3:
            return _context3.abrupt("return", user);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _me.apply(this, arguments);
}

function getAllUsers(_x10, _x11, _x12) {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(root, args, context) {
    var users;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _db.User.findAll();

          case 3:
            users = _context4.sent;

            if (!users.length) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", users);

          case 8:
            return _context4.abrupt("return", "None users bro :/");

          case 9:
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            throw new Error(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return _getAllUsers.apply(this, arguments);
}

function getUser(_x13, _x14, _x15) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(root, args, context) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = args.id;
            id = Number(id);
            console.log(id);
            _context5.next = 6;
            return _db.User.findByPk(id);

          case 6:
            user = _context5.sent;

            if (!user) {
              _context5.next = 11;
              break;
            }

            return _context5.abrupt("return", user);

          case 11:
            "User Not Found";

          case 12:
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            throw new Error(_context5.t0);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return _getUser.apply(this, arguments);
}

function hello(_x16, _x17, _x18) {
  return _hello.apply(this, arguments);
}

function _hello() {
  _hello = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(root, args, context) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log("context", context.user);

            if (!context.user) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", "Hello how are you I am under the water, glug glug ".concat(success));

          case 5:
            return _context6.abrupt("return", "All your base are belong to us");

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _hello.apply(this, arguments);
}