import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import db from "../db";

const User = db.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
    },
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue("password");
    },
  },
  salt: {
    type: DataTypes.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue("salt");
    },
  },
});

export default User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return bcrypt.compareSync(candidatePwd, this.password());
};

/**
 * classMethods
 */
User.generateSalt = function () {
  return bcrypt.genSaltSync();
};

User.encryptPassword = function (plainText, salt) {
  return bcrypt.hashSync(plainText, salt);
};
/**
 * hooks
 */
const setSaltAndPassword = (user) => {
  if (user.changed("password")) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});
