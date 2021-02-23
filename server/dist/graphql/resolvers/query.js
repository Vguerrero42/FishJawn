"use strict";

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFishes = getAllFishes;
exports.getFish = getFish;
exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.hello = hello;

require("regenerator-runtime/runtime.js");

var _db = require("../../db");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
            return _context.abrupt("return", 'No Fish here mane');

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", "Not yet");

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
            return _context2.abrupt("return", "".concat(_context2.t0));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _getFish.apply(this, arguments);
}

function getAllUsers(_x7, _x8, _x9) {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(root, args, context) {
    var users;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _db.User.findAll();

          case 3:
            users = _context3.sent;

            if (!users.length) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", users);

          case 8:
            return _context3.abrupt("return", 'None users bro :/');

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", "".concat(_context3.t0));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _getAllUsers.apply(this, arguments);
}

function getUser(_x10, _x11, _x12) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(root, args, context) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = args.id;
            id = Number(id);
            console.log(id);
            _context4.next = 6;
            return _db.User.findByPk(id);

          case 6:
            user = _context4.sent;

            if (!user) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", user);

          case 11:
            'User Not Found';

          case 12:
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", "".concat(_context4.t0));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return _getUser.apply(this, arguments);
}

function hello(_x13, _x14, _x15) {
  return _hello.apply(this, arguments);
}

function _hello() {
  _hello = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(root, args, context) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", "Hello,how are you, i am under the water");

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _hello.apply(this, arguments);
}