"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("regenerator-runtime/runtime.js");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("./config");

var _schema = require("./graphql/schema");

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();

var getUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 10;
              break;
            }

            _context.prev = 1;
            console.log("Token in get User", token); // console.log('verify',jwt.verify(token,JWT_SECRET))

            return _context.abrupt("return", _jsonwebtoken["default"].verify(token, _config.JWT_SECRET));

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.log("ERROR", _context.t0);
            return _context.abrupt("return", null);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var server = new _apolloServerExpress.ApolloServer({
  cors: true,
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers,
  context: function () {
    var _context2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
      var req, token, user;
      return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = _ref2.req;
              token = req.headers.authorization || '';
              user = getUser(token);
              console.log("USER IN SERVER", user);
              return _context3.abrupt("return", {
                user: user
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));

    function context(_x2) {
      return _context2.apply(this, arguments);
    }

    return context;
  }()
});
var PORT = 3000;
server.applyMiddleware({
  app: app,
  path: '/graphql'
});

_db.db.sync();

app.use(function (req, res) {
  res.status(200), res.send('hello'), res.end();
});
app.listen({
  port: PORT
}, function () {
  console.log("Server Ready at Port ".concat(PORT));
});