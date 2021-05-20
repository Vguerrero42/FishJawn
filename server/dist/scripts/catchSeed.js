"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catches = exports.locations = void 0;
var crossBay = {
  name: "Cross Bay/Shellbank Basin",
  longitude: 40.64588613907378,
  latitude: -73.83609347597145
};
var fortTotten = {
  name: "Fort Totten Park",
  longitude: 40.791654657990776,
  latitude: -73.78424799464753
};
var northBrotherIsland = {
  name: "North Brother Island/Spookyville",
  longitude: 40.801433115721764,
  latitude: -73.8994225706901
};
var locations = [crossBay, fortTotten, northBrotherIsland];
exports.locations = locations;

var choooseLocation = function choooseLocation() {
  return Math.floor(Math.random() * locations.length) + 1;
};

var chooseFishID = function chooseFishID() {
  return Math.floor(Math.random() * 51) + 1;
};

var chooseUser = function chooseUser() {
  return Math.floor(Math.random() * 11) + 1;
};

var createCatch = function createCatch() {
  return {
    userId: chooseUser(),
    fishId: chooseFishID(),
    locationId: choooseLocation()
  };
};

var catches = [];
exports.catches = catches;

while (catches.length < 25) {
  catches.push(createCatch());
}

console.log(catches);