import { DataTypes, Sequelize } from "sequelize/types";

const fish = (sequelize, DataTypes) => {
  const Fish = sequelize.define("fish", {
    name: DataTypes.STRING
  })
  return Fish
}

export default fish