"use strict";

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

require("regenerator-runtime/runtime.js");

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function addFish(_x, _x2, _x3) {
  return _addFish.apply(this, arguments);
}

function _addFish() {
  _addFish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(root, args, context) {
    var newFish;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newFish = args.newFish;

            _models.fishes.push(newFish);

            return _context.abrupt("return", _models.fishes);

          case 3:
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
            return _context2.abrupt("return", "This fish was removed: ".concat(_models.fishes[id]));

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
            oldFish = _models.fishes[id];
            _models.fishes[id] = name;
            return _context3.abrupt("return", "".concat(oldFish, " will now be known as ").concat(_models.fishes[id]));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _updateFish.apply(this, arguments);
}