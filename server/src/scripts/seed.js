import { Fish, User, Location, Catch } from "../db/";
import { db } from "../db";
import users from "./userSeed";
import { locations, catches } from "./catchSeed";
import fs from "fs";
import { FISH_DATA_PATH } from "../config";

let fishes = [];

let fishObj = JSON.parse(
  fs.readFileSync(`${FISH_DATA_PATH}/fishData.txt`, "utf8")
);

for (let fish in fishObj) {
  fishes.push({
    name: String(fish),
    description: String(fishObj[fish]),
  });
}

const seed = async () => {
  await db.sync();
  await Fish.bulkCreate(fishes);
  await User.bulkCreate(users);
  await Location.bulkCreate(locations);
  await Catch.bulkCreate(catches);
  await console.log("seed Success!");
  db.close();
};

const runSeed = async () => {
  console.log("Beginning Seed");
  try {
    await seed();
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Closing Connection");
    await db.close();
    console.log("Connection Closed");
  }
};

runSeed();
