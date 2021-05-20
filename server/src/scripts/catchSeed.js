const crossBay = {
  name: "Cross Bay/Shellbank Basin",
  longitude: 40.64588613907378,
  latitude: -73.83609347597145,
};

const fortTotten = {
  name: "Fort Totten Park",
  longitude: 40.791654657990776,
  latitude: -73.78424799464753,
};

const northBrotherIsland = {
  name: "North Brother Island/Spookyville",
  longitude: 40.801433115721764,
  latitude: -73.8994225706901,
};

const locations = [crossBay, fortTotten, northBrotherIsland];

const choooseLocation = () => Math.floor(Math.random() * locations.length) + 1;
const chooseFishID = () => Math.floor(Math.random() * 51) + 1;
const chooseUser = () => Math.floor(Math.random() * 11) + 1;

const createCatch = () => ({
  userId: chooseUser(),
  fishId: chooseFishID(),
  locationId: choooseLocation(),
});

const catches = [];

while (catches.length < 25) {
  catches.push(createCatch());
}

console.log(catches);

export { locations, catches };
