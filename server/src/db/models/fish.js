import { Sequelize, DataTypes } from 'sequelize'
import db from '../db'

const Fish = db.define('Fish', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

export default Fish