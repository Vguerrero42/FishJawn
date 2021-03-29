import { DataTypes } from 'sequelize'
import db from '../db'

const Location = db.define('location', {
  name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notEmpty:true
    }
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

export default Location