"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFish = addFish;
exports.removeFish = removeFish;
exports.updateFish = updateFish;
exports.login = login;
exports.addUser = addUser;
exports.removeUser = removeUser;

require("regenerator-runtime/runtime.js");

var _db = require("../../db");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var JWT_SECRET = process.env.JWT_SECRET;

function addFish(_x, _x2, _x3) {
  return _addFish.apply(this, arguments);
}

function _addFish() {
  _addFish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(root, args, context) {
    var name, description, newFish;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = args.name, description = args.description;
            _context.next = 3;
            return _db.Fish.create({
              name: name,
              description: description
            });

          case 3:
            newFish = _context.sent;
            return _context.abrupt("return", newFish);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addFish.apply(this, arguments);
}

function removeFish(_x4, _x5, _x6) {
  return _removeFish.apply(this, arguments);
}

function _removeFish() {
  _removeFish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(root, args, context) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = args.id;
            return _context2.abrupt("return", "This fish was removed: ".concat(fishes[id]));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _removeFish.apply(this, arguments);
}

function updateFish(_x7, _x8, _x9) {
  return _updateFish.apply(this, arguments);
}

function _updateFish() {
  _updateFish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(root, args, context) {
    var id, name, oldFish;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = args.id, name = args.name;
            oldFish = fishes[id];
            fishes[id] = name;
            return _context3.abrupt("return", "".concat(oldFish, " will now be known as ").concat(fishes[id]));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateFish.apply(this, arguments);
}

function addUser(_x10, _x11, _x12) {
  return _addUser.apply(this, arguments);
}

function _addUser() {
  _addUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(root, _ref, context) {
    var userName, email, password, newUser;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userName = _ref.userName, email = _ref.email, password = _ref.password;
            console.log('usercreate');
            _context4.prev = 2;
            _context4.next = 5;
            return _db.User.create({
              userName: userName,
              email: email,
              password: password
            });

          case 5:
            newUser = _context4.sent;
            console.log('end of func');
            return _context4.abrupt("return", newUser);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            throw new Error(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 10]]);
  }));
  return _addUser.apply(this, arguments);
}

function removeUser(_x13, _x14, _x15) {
  return _removeUser.apply(this, arguments);
}

function _removeUser() {
  _removeUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(root, _ref2, context) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = _ref2.id;
            _context5.next = 3;
            return _db.User.findByID(id);

          case 3:
            user = _context5.sent;
            return _context5.abrupt("return", "This user was removed: ".concat(user));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _removeUser.apply(this, arguments);
}

function login(_x16, _x17, _x18) {
  return _login.apply(this, arguments);
} // async function login(root,args,context) {
// }


function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(root, _ref3, context) {
    var email, password, user, token;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            email = _ref3.email, password = _ref3.password;
            _context6.prev = 1;
            _context6.next = 4;
            return _db.User.findOne({
              where: {
                email: email
              }
            });

          case 4:
            user = _context6.sent;

            if (user) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", "No such user with email ".concat(email));

          case 7:
            if (user.correctPassword(password)) {
              _context6.next = 10;
              break;
            }

            console.log("Wrong Password");
            throw new Error('Incorrect Password');

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: user.id,
              email: user.email
            }, JWT_SECRET);
            return _context6.abrupt("return", {
              token: token,
              user: user
            });

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](1);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 14]]);
  }));
  return _login.apply(this, arguments);
}