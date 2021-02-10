"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("regenerator-runtime/runtime.js");

var _models = require("../db/models");

var _db = require("../db");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fs = require('fs'); // const getFishes = () => {
//   let fileData = {}
//   fs.readFile('/home/victor/Projects/FishJawnDBData/fishData.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     fileData = JSON.parse(data)
//   })
//   return fileData
// }


var fishes = [];
var fishObj = JSON.parse(fs.readFileSync('/home/victor/Projects/FishJawnDBData/fishData.txt', 'utf8'));

for (var fish in fishObj) {
  // console.log('fish', fish)
  fishes.push({
    name: String(fish),
    description: String(fishObj[fish])
  });
}

var seed = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.db.sync();

          case 2:
            _context.next = 4;
            return _models.Fish.bulkCreate(fishes);

          case 4:
            _context.next = 6;
            return console.log('seed Success!');

          case 6:
            _db.db.close();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function seed() {
    return _ref.apply(this, arguments);
  };
}();

var runSeed = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("Beginning Seed");
            _context2.prev = 1;
            _context2.next = 4;
            return seed();

          case 4:
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 9:
            _context2.prev = 9;
            console.log('Closing Connection');
            _context2.next = 13;
            return _db.db.close();

          case 13:
            console.log('Connection Closed');
            return _context2.finish(9);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 6, 9, 15]]);
  }));

  return function runSeed() {
    return _ref2.apply(this, arguments);
  };
}();

runSeed();
console.log(fishes);