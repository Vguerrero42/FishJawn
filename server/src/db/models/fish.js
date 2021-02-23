import { DataTypes } from 'sequelize'
import db from '../db'

const Fish = db.define('fish', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

export default Fish