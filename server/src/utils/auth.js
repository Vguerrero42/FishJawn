import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const auth = (req, res, next) => {
  let user;
  try {
    const split = req.headers.authorization[1];
    jwt.verify(split, JWT_SECRET, (err, decoded) => {
      console.log("INSIDE DECONDED", decoded, err);
      if (decoded && decoded.user) {
        user = decoded.user;
        return user;
      } else {
        console.log("Authorization Failed");
      }
    });
  } catch (err) {
    console.log("Invalid Token");
    console.log(err);
  }
};
